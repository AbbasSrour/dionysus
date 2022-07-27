import { NextFunction, Request, Response } from "express";
import { MovieInput } from "../schemas/movie.schema";
import { createMovieService } from "../services/movie.service";

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
      movieLength,
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
      movieLength,
    });
    res.status(201).json({ status: "Success, the movie was created", movie });
  } catch (error) {
    next(error);
  }
};
