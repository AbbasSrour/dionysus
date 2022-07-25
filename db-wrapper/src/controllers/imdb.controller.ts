import { NextFunction, Request, Response } from "express";
import { ImdbInput } from "../schemas/imdb.schema";
import log from "../utils/logger.util";
import { createImdbService } from "../services/imdb.service";

export const createImdbHandler = async (
  req: Request<{}, {}, ImdbInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { imdbId, rating, voteCount } = req.body;
    const imdb = await createImdbService({ imdbId, rating, voteCount });
    res.status(201).json({ status: "Success imdb new entry created", imdb });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
