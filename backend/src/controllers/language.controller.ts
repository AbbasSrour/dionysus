import { NextFunction, Request, Response } from "express";
import { LanguageInput } from "../schemas/language.schema";
import log from "../utils/logger.util";
import { createLanguageService } from "../services/language.service";

export const createLanguageHandler = async (
  req: Request<{}, {}, LanguageInput>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    const language = await createLanguageService({ name });
    res
      .status(201)
      .json({
        status: "Success, the language was created",
        data: { language },
      });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Language of ${name} already exists in the database`,
      });
    next(error);
  }
};
