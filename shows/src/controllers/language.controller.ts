import {NextFunction, Request, Response} from "express";
import {LanguageInput, ShowLanguagesInput} from "../schemas/language.schema";
import {
  createLanguageService,
  createShowLanguageService,
  getLanguageByIdService,
  getLanguageByNameService,
} from "../services/language.service";
import AppError from "../errors/app.error";
import {Prisma} from "../../prisma/client";

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
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Language of ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getLanguageHandler = async (
  req: Request<{}, {}, {}, { name?: string; id?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { name, id } = req.query;
  try {
    let language;
    if (id) language = await getLanguageByIdService(id);
    else if (name) language = await getLanguageByNameService(name);
    else throw new AppError(400, "No server id or name provided");
    res.status(200).json({ status: "Success", data: { language } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested language not found" });
    else next(error);
  }
};

export const getLanguageByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const language = await getLanguageByIdService(id);
    res.status(200).json({ status: "Success", data: { language } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested language not found" });
    else next(error);
  }
};

export const createShowLanguageHandler = async (
  req: Request<{}, {}, ShowLanguagesInput>,
  res: Response,
  next: NextFunction
) => {
  const { showId, languageId } = req.body;
  try {
    const showLanguage = await createShowLanguageService({
      showId,
      languageId,
    });
    res.status(201).json({
      status: "Success show language create",
      data: { showLanguage },
    });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between language ${languageId} and show ${showId} already exists in the database`,
      });
    else next(error);
  }
};
