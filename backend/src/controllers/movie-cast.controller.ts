import { NextFunction, Request, Response } from "express";
import { MovieCastInput } from "../schemas/movie-cast.schema";
import { createMovieCastService } from "../services/movie-cast.service";
import log from "../utils/logger.util";

export const createMovieCastHandler = async (
  req: Request<{}, {}, MovieCastInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, actor, role } = req.body;
  try {
    const movieCast = await createMovieCastService({ movie, role, actor });
    res
      .status(201)
      .json({ status: "Success movie cast created", data: { movieCast } });
  } catch (error: any) {
    log.error(error);

    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation of actor ${actor} and movie ${movie} with role ${role} already exists in the database`,
      });
    next(error);
  }
};
