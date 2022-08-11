import { NextFunction, Request, Response } from "express";
import { ActorInput, MovieCastInput } from "../schemas/actor.schema";
import {
  createActorService,
  createMovieCastService,
  getActorByIdService,
  getActorByNameAndImageService,
} from "../services/actor.service";
import AppError from "../errors/app.error";
import { Actor, Prisma } from "../../prisma/client";

export const createActorHandler = async (
  req: Request<{}, {}, ActorInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const actor = await createActorService({ name, image });
    res.status(201).json({
      status: "Success",
      data: { actor: actor },
    });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Actor of name ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getActorHandler = async (
  req: Request<{}, {}, {}, { name?: string; image?: string; id?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { name, image, id } = req.query;
  try {
    let actor: Actor | null;
    if (id) actor = await getActorByIdService(id);
    else if (name && image)
      actor = await getActorByNameAndImageService(name, image);
    else throw new AppError(400, "Missing name and image or id");
    res.status(200).json({ status: "Success", data: { actor } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested actor not found" });
    else next(error);
  }
};

export const getActorByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const actor = await getActorByIdService(id);
    res.status(200).json({ status: "Success", data: { actor } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested actor not found" });
    else next(error);
  }
};

export const createMovieCastHandler = async (
  req: Request<{}, {}, MovieCastInput>,
  res: Response,
  next: NextFunction
) => {
  const { movieId, actorId, role } = req.body;
  try {
    const movieCast = await createMovieCastService({ movieId, role, actorId });
    res
      .status(201)
      .json({ status: "Success movie cast created", data: { movieCast } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation of actor ${actorId} and movie ${movieId} with role ${role} already exists in the database`,
      });
    else next(error);
  }
};
