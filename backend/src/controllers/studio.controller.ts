import { NextFunction, Request, Response } from "express";
import { MovieStudioInput, StudioInput } from "../schemas/studio.schema";
import {
  createMovieStudioService,
  createStudioService,
} from "../services/studio.service";
import log from "../utils/logger.util";

export const createStudioHandler = async (
  req: Request<{}, {}, StudioInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image } = req.body;
    const studio = await createStudioService({
      name,
      image,
    });
    res.status(201).json({
      status: "Success, production company created",
      data: { studio },
    });
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

export const createMovieStudioHandler = async (
  req: Request<{}, {}, MovieStudioInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, studio } = req.body;
  try {
    const movieProductionCompany = await createMovieStudioService({
      movie,
      studio,
    });
    res.status(201).json({
      status: "Success movie production company created",
      data: { movieProductionCompany },
    });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between production company ${studio} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
