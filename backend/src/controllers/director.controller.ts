import { NextFunction, Request, Response } from "express";
import { DirectorInput, MovieDirectorInput } from "../schemas/director.schema";
import {
  createDirectorService,
  createMovieDirectorService,
} from "../services/director.service";
import log from "../utils/logger.util";

export const createDirectorHandler = async (
  req: Request<{}, {}, DirectorInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const director = await createDirectorService({
      name,
      image,
    });
    res
      .status(201)
      .json({ status: "Success, the writer was created", data: { director } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Director of name ${name} already exists in the database`,
      });
    next(error);
  }
};

export const createMovieDirectorHandler = async (
  req: Request<{}, {}, MovieDirectorInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, director } = req.body;
  try {
    const movieDirector = await createMovieDirectorService({ movie, director });
    res.status(201).json({
      status: "Success movie director created",
      data: { movieDirector },
    });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between director ${director} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
