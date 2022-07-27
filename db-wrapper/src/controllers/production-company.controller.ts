import { NextFunction, Request, Response } from "express";
import { ProductionCompanyInput } from "../schemas/production-company.schema";
import { createProductionCompanyService } from "../services/production-campany.service";
import log from "../utils/logger.util";

export const createProductionCompanyHandler = async (
  req: Request<{}, {}, ProductionCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image } = req.body;
    const productionCompany = await createProductionCompanyService({
      name,
      image,
    });
    res.status(201).json({
      status: "Success, production company created",
      productionCompany,
    });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
