import { NextFunction, Request, Response } from "express";
import { LanguageInput } from "../schemas/language.schema";
import log from "../utils/logger.util";
import { createLanguageService } from "../services/language.service";

export const createLanguageHandler = async (
  req: Request<{}, {}, LanguageInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const language = await createLanguageService({ name });
    res
      .status(201)
      .json({ status: "Success, the language was created", language });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
