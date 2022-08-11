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
      imdbId,
      trailer,
      revenue,
      budget,
      movieLength,
      summary,
      poster,
      cover,
      pgRating,
    } = req.body;
    const movie = await createMovieService({
      name,
      revenue,
      budget,
      movieLength,
      pgRating,
      cover,
      imdbId,
      trailer,
      poster,
      summary,
      releaseYear,
    });
    res.status(201).json({ status: "Success", data: { movie } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Movie of name ${req.body.name} and release ${req.body.releaseYear} exists in the database`,
      });
    next(error);
  }
};
