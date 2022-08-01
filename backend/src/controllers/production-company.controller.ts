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
      data: { productionCompany },
    });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Genre of name ${name} already exists in the database`,
      });
    next(error);
  }
};
