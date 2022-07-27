import { NextFunction, Request, Response } from "express";
import { ServerInput } from "../schemas/server.schema";
import { createServerService } from "../services/server.service";
import log from "../utils/logger.util";

export const createServerHandler = async (
  req: Request<{}, {}, ServerInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, url } = req.body;
    const server = await createServerService({ name, url });
    res.status(201).json({ status: "Success the server was created", server });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
