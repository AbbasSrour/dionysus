import { NextFunction, Request, Response } from "express";
import { LanguageInput, MovieLanguagesInput } from "../schemas/language.schema";
import log from "../utils/logger.util";
import {
  createLanguageService,
  createMovieLanguageService,
} from "../services/language.service";

export const createLanguageHandler = async (
  req: Request<{}, {}, LanguageInput>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    const language = await createLanguageService({ name });
    res.status(201).json({
      status: "Success, the language was created",
      data: { language },
    });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Language of ${name} already exists in the database`,
      });
    next(error);
  }
};

export const createMovieLanguageHandler = async (
  req: Request<{}, {}, MovieLanguagesInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, language } = req.body;
  try {
    const movieLanguage = await createMovieLanguageService({ movie, language });
    res.status(201).json({
      status: "Success movie language create",
      data: { movieLanguage },
    });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between language ${language} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
