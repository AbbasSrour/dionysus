import { NextFunction, Request, Response } from "express";
import { ServerInput } from "../schemas/server.schema";
import { createServerService } from "../services/server.service";
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
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Server of name ${name} already exists in the database`,
      });
    next(error);
  }
};
