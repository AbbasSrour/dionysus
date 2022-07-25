import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { GenreSchema } from "../schemas/genre.schema";
import { createGenreHandler } from "../controllers/genre.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(GenreSchema), createGenreHandler);

export default Router;
