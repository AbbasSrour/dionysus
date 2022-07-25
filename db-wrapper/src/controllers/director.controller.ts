import { NextFunction, Request, Response } from "express";
import { DirectorInput } from "../schemas/director.schema";
import { createDirectorService } from "../services/director.service";
import log from "../utils/logger.util";

export const createDirectorHandler = async (
  req: Request<{}, {}, DirectorInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image } = req.body;
    const director = await createDirectorService({ name, image });
    res
      .status(201)
      .json({ status: "Success, the writer was created", director });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
