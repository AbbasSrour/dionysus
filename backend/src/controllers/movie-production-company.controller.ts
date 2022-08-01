import { NextFunction, Request, Response } from "express";
import { MovieProductionCompanyInput } from "../schemas/movie-production-company.schema";
import { createMovieProductionCompanyService } from "../services/movie-production-company.service";
import log from "../utils/logger.util";

export const createMovieProductionCompanyHandler = async (
  req: Request<{}, {}, MovieProductionCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, productionCompany } = req.body;
  try {
    const movieProductionCompany = await createMovieProductionCompanyService({
      movie,
      productionCompany,
    });
    res.status(201).json({
      status: "Success movie production company created",
      data: { movieProductionCompany },
    });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between production company ${productionCompany} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
