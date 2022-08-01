import { NextFunction, Request, Response } from "express";
import { GenreInput } from "../schemas/genre.schema";
import { createGenreService } from "../services/genre.service";
import log from "../utils/logger.util";

export const createGenreHandler = async (
  req: Request<{}, {}, GenreInput>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    const genre = await createGenreService({ name });
    res
      .status(201)
      .json({ status: "Success, the genre was created", data: { genre } });
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
