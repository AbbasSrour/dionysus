import { NextFunction, Request, Response } from "express";
import { MovieWriterInput } from "../schemas/movie-writer.schema";
import { createMovieWriterService } from "../services/movie-wtiter.service";
import log from "../utils/logger.util";

export const createMovieWriterHandler = async (
  req: Request<{}, {}, MovieWriterInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { writer, movie } = req.body;
    const movieWriter = createMovieWriterService({ movie, writer });
    res
      .status(201)
      .json({ status: "Success movie writer created", movieWriter });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
