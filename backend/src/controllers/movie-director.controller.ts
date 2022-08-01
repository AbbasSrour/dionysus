import { NextFunction, Request, Response } from "express";
import { MovieDirectorInput } from "../schemas/movie-director.schema";
import { createMovieDirectorService } from "../services/movie-director.service";
import log from "../utils/logger.util";

export const createMovieDirectorHandler = async (
  req: Request<{}, {}, MovieDirectorInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, director } = req.body;
  try {
    const movieDirector = await createMovieDirectorService({ movie, director });
    res
      .status(201)
      .json({
        status: "Success movie director created",
        data: { movieDirector },
      });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between director ${director} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
