import { NextFunction, Request, Response } from "express";
import { MovieStudioInput, StudioInput } from "../schemas/studio.schema";
import {
  createMovieStudioService,
  createStudioService,
  getStudioByIdService,
  getStudioByNameService,
} from "../services/studio.service";
import { Prisma, Studio } from "../../prisma/client";
import AppError from "../errors/app.error";

export const createStudioHandler = async (
  req: Request<{}, {}, StudioInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const studio = await createStudioService({
      name,
      image,
    });
    res.status(201).json({
      status: "Success, production company created",
      data: { studio },
    });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Genre of name ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getStudioHandler = async (
  req: Request<{}, {}, {}, { name?: string; id?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { id, name } = req.query;
  try {
    let studio: Studio | null;
    if (id) studio = await getStudioByIdService(id);
    else if (name) studio = await getStudioByNameService(name);
    else throw new AppError(400, "Missing name or id");
    res.status(200).json({ status: "Success", data: { studio } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested studio not found" });
    else next(error);
  }
};

export const getStudioByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const studio = await getStudioByIdService(id);
    res.status(200).json({ status: "Success", data: { studio } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested studio not found" });
    else next(error);
  }
};

export const createMovieStudioHandler = async (
  req: Request<{}, {}, MovieStudioInput>,
  res: Response,
  next: NextFunction
) => {
  const { movieId, studioId } = req.body;
  try {
    const movieStudio = await createMovieStudioService({
      movieId,
      studioId,
    });
    res.status(201).json({
      status: "Success movie production company created",
      data: { movieStudio },
    });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between production company ${studioId} and movie ${movieId} already exists in the database`,
      });
    else next(error);
  }
};
