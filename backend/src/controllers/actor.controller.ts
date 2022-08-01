import { NextFunction, Request, Response } from "express";
import { ActorInput } from "../schemas/actor.schema";
import { createActorService } from "../services/actor.service";

export const createActorHandler = async (
  req: Request<{}, {}, ActorInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const actor = await createActorService({ name, image });
    res
      .status(201)
      .json({
        status: "Success, the actor was created",
        data: { actor: actor },
      });
  } catch (error: any) {
    if (error.code === "23505")
      return res.status(409).json({
        status: "fail",
        message: `Actor of name ${name} already exists in the database`,
      });
    next(error);
  }
};
