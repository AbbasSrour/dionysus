import { NextFunction, Request, Response } from "express";
import { GenreInput } from "../schemas/genre.schema";
import { createWriterService } from "../services/writer.service";
import { createGenreService } from "../services/genre.service";
import log from "../utils/logger.util";

export const createGenreHandler = async (
  req: Request<{}, {}, GenreInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const genre = await createGenreService({ name });
    res.status(201).json({ status: "Success, the genre was created", genre });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
