import { NextFunction, Request, Response } from "express";
import { WriterInput } from "../schemas/writer.schema";
import { createWriterService } from "../services/writer.service";
import log from "../utils/logger.util";

export const createWriterHandler = async (
  req: Request<{}, {}, WriterInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image } = req.body;
    const writer = await createWriterService({ name, image });
    res.status(201).json({ status: "Success, the writer was created", writer });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
