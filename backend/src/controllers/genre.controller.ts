import { NextFunction, Request, Response } from "express";
import { GenreInput, MovieGenreInput } from "../schemas/genre.schema";
import {
  createGenreService,
  createMovieGenreService,
} from "../services/genre.service";
import log from "../utils/logger.util";

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
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Genre of name ${name} already exists in the database`,
      });
    next(error);
  }
};

export const createMovieGenreHandler = async (
  req: Request<{}, {}, MovieGenreInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, genre } = req.body;
  try {
    const movieGenre = await createMovieGenreService({ movie, genre });
    res
      .status(201)
      .json({ status: "Success movie genre created", data: { movieGenre } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between genre ${genre} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
