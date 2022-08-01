import { NextFunction, Request, Response } from "express";
import { MovieGenreInput } from "../schemas/movie-genre.schema";
import { createMovieGenreService } from "../services/movie-genre.service";
import log from "../utils/logger.util";

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
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between genre ${genre} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
