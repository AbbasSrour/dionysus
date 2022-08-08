import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieWriterSchema, WriterSchema } from "../schemas/writer.schema";
import {
  createMovieWriterHandler,
  createWriterHandler,
} from "../controllers/writer.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(WriterSchema), createWriterHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieWriterSchema),
  createMovieWriterHandler
);

export default Router;
