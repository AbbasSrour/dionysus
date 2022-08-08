import { NextFunction, Request, Response } from "express";
import { ActorInput, MovieCastInput } from "../schemas/actor.schema";
import {
  createActorService,
  createMovieCastService,
} from "../services/actor.service";
import log from "../utils/logger.util";

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
    console.log(error.code);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Actor of name ${name} already exists in the database`,
      });
    next(error);
  }
};

export const createMovieCastHandler = async (
  req: Request<{}, {}, MovieCastInput>,
  res: Response,
  next: NextFunction
) => {
  const { movie, actor, role } = req.body;
  try {
    const movieCast = await createMovieCastService({ movie, role, actor });
    res
      .status(201)
      .json({ status: "Success movie cast created", data: { movieCast } });
  } catch (error: any) {
    log.error(error);

    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation of actor ${actor} and movie ${movie} with role ${role} already exists in the database`,
      });
    next(error);
  }
};
