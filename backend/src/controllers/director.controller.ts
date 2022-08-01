import { NextFunction, Request, Response } from "express";
import { DirectorInput } from "../schemas/director.schema";
import { createDirectorService } from "../services/director.service";
import log from "../utils/logger.util";

export const createDirectorHandler = async (
  req: Request<{}, {}, DirectorInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const director = await createDirectorService({
      name,
      image,
    });
    res
      .status(201)
      .json({ status: "Success, the writer was created", data: { director } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Director of name ${name} already exists in the database`,
      });
    next(error);
  }
};
