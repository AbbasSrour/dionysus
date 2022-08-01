import { NextFunction, Request, Response } from "express";
import { MovieInput } from "../schemas/movie.schema";
import { createMovieService } from "../services/movie.service";

export const createMovieHandler = async (
  req: Request<{}, {}, MovieInput>,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    releaseYear,
    poster,
    movieLength,
    cover,
    summary,
    pgRating,
    budget,
    revenue,
    trailer,
  } = req.body;
  try {
    const movie = await createMovieService({
      name,
      releaseYear,
      poster,
      movieLength,
      cover,
      summary,
      pgRating,
      budget,
      revenue,
      trailer,
    });
    res
      .status(201)
      .json({ status: "Success, the movie was created", data: { movie } });
  } catch (error: any) {
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Movie of name ${name} and release ${releaseYear} exists in the database`,
      });
    next(error);
  }
};
