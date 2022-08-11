import { NextFunction, Request, Response } from "express";
import { GenreInput, MovieGenreInput } from "../schemas/genre.schema";
import {
  createGenreService,
  createMovieGenreService,
  getGenreByIdService,
  getGenreByNameService,
} from "../services/genre.service";
import { Genre, Prisma } from "../../prisma/client";
import AppError from "../errors/app.error";

export const createGenreHandler = async (
  req: Request<{}, {}, GenreInput>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    const genre = await createGenreService({ name });
    res
      .status(201)
      .json({ status: "Success, the genre was created", data: { genre } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Genre of name ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getGenreHandler = async (
  req: Request<{}, {}, {}, { name?: string; id?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { id, name } = req.query;
  try {
    let genre: Genre | null;
    if (id) genre = await getGenreByIdService(id);
    else if (name) genre = await getGenreByNameService(name);
    else throw new AppError(400, "Missing id or name");
    res.status(200).json({ status: "Success", data: { genre } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested genre not found" });
    else next(error);
  }
};

export const getGenreByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const genre = await getGenreByIdService(id);
    res.status(200).json({ success: "Success", data: { genre } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested genre not found" });
    else next(error);
  }
};

export const createMovieGenreHandler = async (
  req: Request<{}, {}, MovieGenreInput>,
  res: Response,
  next: NextFunction
) => {
  const { movieId, genreId } = req.body;
  try {
    const movieGenre = await createMovieGenreService({ movieId, genreId });
    res
      .status(201)
      .json({ status: "Success movie genre created", data: { movieGenre } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between genre ${genreId} and movie ${movieId} already exists in the database`,
      });
    next(error);
  }
};
