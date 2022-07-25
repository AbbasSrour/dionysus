import { NextFunction, Request, Response } from "express";
import { MovieGenreInput } from "../schemas/movie-genre.schema";
import { createMovieGenreService } from "../services/movie-genre.service";
import log from "../utils/logger.util";

export const createMovieGenreHandler = async (
  req: Request<{}, {}, MovieGenreInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movie, genre } = req.body;
    const movieGenre = await createMovieGenreService({ movie, genre });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
