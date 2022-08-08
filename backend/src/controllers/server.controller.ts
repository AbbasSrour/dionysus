import { NextFunction, Request, Response } from "express";
import { MovieServerInput, ServerInput } from "../schemas/server.schema";
import {
  createMovieServerService,
  createServerService,
} from "../services/server.service";
import log from "../utils/logger.util";

export const createServerHandler = async (
  req: Request<{}, {}, ServerInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, url } = req.body;
  try {
    const server = await createServerService({ name, url });
    res
      .status(201)
      .json({ status: "Success the server was created", data: { server } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Server of name ${name} already exists in the database`,
      });
    next(error);
  }
};

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
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between server ${server} and movie ${movie} already exists in the database`,
      });
    next(error);
  }
};
