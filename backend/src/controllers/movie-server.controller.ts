import { NextFunction, Request, Response } from "express";
import { MovieServerInput } from "../schemas/movie-server.schema";
import { createMovieServerService } from "../services/movie-server.service";
import log from "../utils/logger.util";

export const createMovieServerHandler = async (
  req: Request<{}, {}, MovieServerInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, server, url } = req.body;
  try {
    const movieServer = await createMovieServerService({ movie, server, url });
    res
      .status(201)
      .json({ status: "Success movie server created", data: { movieServer } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Relation between server ${server} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
