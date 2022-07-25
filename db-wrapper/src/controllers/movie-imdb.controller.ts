import { NextFunction, Request, Response } from "express";
import { MovieImdbInput } from "../schemas/movie-imdb.schema";
import { createMovieImdbService } from "../services/movie-imdb.service";
import log from "../utils/logger.util";

export const createMovieImdbHandler = async (
  req: Request<{}, {}, MovieImdbInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movie, imdb } = req.body;
    const movieImdb = await createMovieImdbService({ movie, imdb });
    res.status(201).json({ status: "Success movie imdb created", movieImdb });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
