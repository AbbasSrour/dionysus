import { NextFunction, Request, Response } from "express";
import { MovieInput } from "../schemas/movie.schema";
import { createMovieService } from "../services/movies.service";
import log from "../utils/logger.util";

export const createMovieHandler = async (
  req: Request<{}, {}, MovieInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      releaseYear,
      poster,
      cover,
      summary,
      pgRating,
      budget,
      revenue,
      trailer,
    } = req.body;
    const movie = await createMovieService({
      name,
      releaseYear,
      poster,
      cover,
      summary,
      pgRating,
      budget,
      revenue,
      trailer,
    });
    res.status(201).json({ status: "Success, the movie was created", movie });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
