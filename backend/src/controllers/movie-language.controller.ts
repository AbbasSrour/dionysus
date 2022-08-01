import { NextFunction, Request, Response } from "express";
import { MovieLanguagesInput } from "../schemas/movie-langauges.schema";
import log from "../utils/logger.util";
import { createMovieLanguageService } from "../services/movie-language.service";

export const createMovieLanguageHandler = async (
  req: Request<{}, {}, MovieLanguagesInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, language } = req.body;
  try {
    const movieLanguage = await createMovieLanguageService({ movie, language });
    res
      .status(201)
      .json({
        status: "Success movie language create",
        data: { movieLanguage },
      });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between language ${language} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
