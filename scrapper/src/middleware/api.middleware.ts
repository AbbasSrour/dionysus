import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app.error";
import { env } from "../utils/validate-env.util";

export const ApiCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    const apikey = req.body.apikey;
    if (!apikey) {
      return next(new AppError(400, `No Api Key Provided `));
    } else if (apikey !== env.API_KEY)
      return next(new AppError(500, `Wrong Api Key`));
    next();
  } catch (e) {
    next(e);
  }
};
