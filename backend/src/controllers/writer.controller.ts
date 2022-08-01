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
    res
      .status(201)
      .json({ status: "Success, the writer was created", data: { writer } });
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
