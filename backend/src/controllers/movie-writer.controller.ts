import { NextFunction, Request, Response } from "express";
import { MovieWriterInput } from "../schemas/movie-writer.schema";
import { createMovieWriterService } from "../services/movie-wtiter.service";
import log from "../utils/logger.util";

export const createMovieWriterHandler = async (
  req: Request<{}, {}, MovieWriterInput>,
  res: Response,
  next: NextFunction
) => {
  const { writer, movie } = req.body;
  try {
    const movieWriter = createMovieWriterService({ movie, writer });
    res
      .status(201)
      .json({ status: "Success movie writer created", data: { movieWriter } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between writer ${writer} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
