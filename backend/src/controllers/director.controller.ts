import { NextFunction, Request, Response } from "express";
import { DirectorInput, MovieDirectorInput } from "../schemas/director.schema";
import {
  createDirectorService,
  createMovieDirectorService,
  getDirectorByIdService,
  getDirectorByNameAndImageService,
} from "../services/director.service";
import { Director, Prisma } from "../../prisma/client";
import AppError from "../errors/app.error";

export const createDirectorHandler = async (
  req: Request<{}, {}, DirectorInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const director = await createDirectorService({
      name,
      image,
    });
    res
      .status(201)
      .json({ status: "Success, the writer was created", data: { director } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Director of name ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getDirectorHandler = async (
  req: Request<{}, {}, {}, { id?: number; name?: string; image?: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id, name, image } = req.query;
  try {
    let director: Director | null;
    if (id) director = await getDirectorByIdService(id);
    else if (name && image)
      director = await getDirectorByNameAndImageService(name, image);
    else throw new AppError(400, "Missing name and image or id");
    res.status(200).json({ status: "Success", data: { director } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested director not found" });
    else next(error);
  }
};

export const getDirectorByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const director = await getDirectorByIdService(id);
    res.status(200).json({ status: "Success", data: { director } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested director not found" });
    else next(error);
  }
};

export const createMovieDirectorHandler = async (
  req: Request<{}, {}, MovieDirectorInput>,
  res: Response,
  next: NextFunction
) => {
  const { movieId, directorId } = req.body;
  try {
    const movieDirector = await createMovieDirectorService({
      movieId,
      directorId,
    });
    res.status(201).json({
      status: "Success movie director created",
      data: { movieDirector },
    });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between director ${directorId} and movie ${movieId} already exists in the database`,
      });
    else next(error);
  }
};
