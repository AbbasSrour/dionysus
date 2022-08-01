import { NextFunction, Request, Response } from "express";
import { MovieImdbInput } from "../schemas/movie-imdb.schema";
import { createMovieImdbService } from "../services/movie-imdb.service";
import log from "../utils/logger.util";

export const createMovieImdbHandler = async (
  req: Request<{}, {}, MovieImdbInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, imdb } = req.body;
  try {
    const movieImdb = await createMovieImdbService({ movie, imdb });
    res
      .status(201)
      .json({ status: "Success movie imdb created", data: { movieImdb } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between imdb ${imdb} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
