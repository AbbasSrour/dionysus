import { NextFunction, Request, Response } from "express";
import { MovieLanguagesInput } from "../schemas/movie-langauges.schema";
import log from "../utils/logger.util";
import { createMovieLanguageService } from "../services/movie-language.service";

export const createMovieLanguageHandler = async (
  req: Request<{}, {}, MovieLanguagesInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movie, language } = req.body;
    const movieLanguage = await createMovieLanguageService({ movie, language });
    res
      .status(201)
      .json({ status: "Success movie language create", movieLanguage });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
