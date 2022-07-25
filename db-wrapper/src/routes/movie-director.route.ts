import { NextFunction, Request, Response } from "express";
import { MovieDirectorInput } from "../schemas/movie-director.schema";
import { createMovieDirectorService } from "../services/movie-director.service";
import log from "../utils/logger.util";

export const createMovieDirectorHandler = async (
  req: Request<{}, {}, MovieDirectorInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { director, movie } = req.body;
    const movieDirector = await createMovieDirectorService({ director, movie });
    res
      .status(201)
      .json({ status: "Success movie director created", movieDirector });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
