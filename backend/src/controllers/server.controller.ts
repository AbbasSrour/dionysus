import { NextFunction, Request, Response } from "express";
import { MovieServerInput, ServerInput } from "../schemas/server.schema";
import {
  createMovieServerService,
  createServerService,
  getServerByIdService,
  getServerByNameService,
} from "../services/server.service";
import AppError from "../errors/app.error";
import { Prisma } from "../../prisma/client";

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
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Server of name ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getServerHandler = async (
  req: Request<{}, {}, {}, { name?: string; id?: string }>,
  res: Response,
  next: NextFunction
) => {
  const { name, id } = req.query;
  try {
    let server;
    if (id) server = await getServerByIdService(parseInt(id));
    else if (name) server = await getServerByNameService(name);
    else throw new AppError(400, "No Server id or name provided");
    res.status(200).json({ status: "Success", data: { server } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested server not found" });
    else next(error);
  }
};

export const getServerByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const server = await getServerByIdService(id);
    res.status(200).json({ status: "Success", data: { server } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested entity not found" });
    else next(error);
  }
};

export const createMovieServerHandler = async (
  req: Request<{}, {}, MovieServerInput>,
  res: Response,
  next: NextFunction
) => {
  const { movieId, serverId, url } = req.body;
  try {
    const movieServer = await createMovieServerService({
      movieId,
      serverId,
      url,
    });
    res
      .status(201)
      .json({ status: "Success movie server created", data: { movieServer } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between server ${serverId} and movie ${movieId} already exists in the database`,
      });
    else next(error);
  }
};
