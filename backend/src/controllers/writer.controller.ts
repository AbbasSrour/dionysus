import { NextFunction, Request, Response } from "express";
import { MovieWriterInput, WriterInput } from "../schemas/writer.schema";
import {
  createMovieWriterService,
  createWriterService,
} from "../services/writer.service";
import log from "../utils/logger.util";

export const createWriterHandler = async (
  req: Request<{}, {}, WriterInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image } = req.body;
    const writer = await createWriterService({ name, image });
    res
      .status(201)
      .json({ status: "Success, the writer was created", data: { writer } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Genre of name ${name} already exists in the database`,
      });
    next(error);
  }
};

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
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between writer ${writer} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
