import { NextFunction, Request, Response } from "express";
import { MovieServerInput } from "../schemas/movie-server.schema";
import { createMovieServerService } from "../services/movie-server.service";
import log from "../utils/logger.util";

export const createMovieServerHandler = async (
  req: Request<{}, {}, MovieServerInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movie, server, url } = req.body;
    const movieServer = await createMovieServerService({ movie, server, url });
    res
      .status(201)
      .json({ status: "Success movie server created", movieServer });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
