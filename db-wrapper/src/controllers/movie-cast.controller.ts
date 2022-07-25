import { NextFunction, Request, Response } from "express";
import { MovieCastInput } from "../schemas/movie-cast.schema";
import { createMovieCastService } from "../services/movie-cast.service";
import log from "../utils/logger.util";

export const createMovieCastHandler = async (
  req: Request<{}, {}, MovieCastInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movie, actor, role } = req.body;
    const movieCast = await createMovieCastService({ movie, role, actor });
    res.status(201).json({ status: "Success movie cast created", movieCast });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
