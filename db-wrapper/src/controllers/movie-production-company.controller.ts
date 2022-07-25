import { NextFunction, Request, Response } from "express";
import { MovieProductionCompanyInput } from "../schemas/movie-production-company.schema";
import { createMovieProductionCompanyService } from "../services/movie-production-company.service";
import log from "../utils/logger.util";

export const createMovieProductionCompanyHandler = async (
  req: Request<{}, {}, MovieProductionCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movie, productionCompany } = req.body;
    const movieProductionCompany = await createMovieProductionCompanyService({
      movie,
      productionCompany,
    });
    res.status(201).json({
      status: "Success movie production company created",
      movieProductionCompany,
    });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
