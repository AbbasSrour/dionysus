import { NextFunction, Request, Response } from "express";
import { ImdbInput } from "../schemas/imdb.schema";
import log from "../utils/logger.util";
import { createImdbService } from "../services/imdb.service";

export const createImdbHandler = async (
  req: Request<{}, {}, ImdbInput>,
  res: Response,
  next: NextFunction
) => {
  const { rating, voteCount, imdbId } = req.body;
  try {
    const imdb = await createImdbService({ rating, voteCount, imdbId });
    res
      .status(201)
      .json({ status: "Success imdb new entry created", data: { imdb } });
  } catch (error: any) {
    log.error(error);

    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Imdb entry of id ${imdbId} already exists in the database`,
      });
    next(error);
  }
};
