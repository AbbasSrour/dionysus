import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ActorSchema, MovieCastSchema } from "../schemas/actor.schema";
import {
  createActorHandler,
  createMovieCastHandler,
  getActorByIdHandler,
  getActorHandler,
} from "../controllers/actor.controller";

const Router = express.Router();

Router.route("/")
  .get(getActorHandler)
  .post(ApiCheck, Validate(ActorSchema), createActorHandler);

Router.route("/:id").get(getActorByIdHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieCastSchema),
  createMovieCastHandler
);

export default Router;
