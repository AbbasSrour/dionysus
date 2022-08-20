import { NextFunction, Request, Response } from "express";
import { GenreInput, ShowGenreInput } from "../schemas/genre.schema";
import {
  createGenreService,
  createShowGenreService,
  getGenreByIdService,
  getGenreByNameService,
  getShowGenresService,
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

export const createShowGenreHandler = async (
  req: Request<{}, {}, ShowGenreInput>,
  res: Response,
  next: NextFunction
) => {
  const { showId, genreId } = req.body;
  try {
    const showGenre = await createShowGenreService({ showId, genreId });
    res
      .status(201)
      .json({ status: "Success show genre created", data: { showGenre } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between genre ${genreId} and show ${showId} already exists in the database`,
      });
    next(error);
  }
};

export const getShowGenresHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const showGenres = getShowGenresService(id);
    res.status(200).json({ status: "Success", data: { showGenres } });
  } catch (error) {
    next(error);
  }
};
