import { NextFunction, Request, Response } from "express";
import log from "../utils/logger.util";
import { ActorInput } from "../schemas/actor.schema";
import { createActorService } from "../services/actor.service";

export const createActorHandler = async (
  req: Request<{}, {}, ActorInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image } = req.body;
    const actor = await createActorService({ name, image });
    res.status(201).json({ status: "Success, the actor was created", actor });
  } catch (error) {
    log.error(error);
    next(error);
  }
};
