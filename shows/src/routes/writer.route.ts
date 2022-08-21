import express from "express";
import {ApiCheck} from "../middleware/api.middleware";
import {Validate} from "../middleware/validate.middleware";
import {ShowWriterSchema, WriterSchema} from "../schemas/writer.schema";
import {
  createShowWriterHandler,
  createWriterHandler,
  getWriterByIdHandler,
  getWriterHandler,
} from "../controllers/writer.controller";

const Router = express.Router();

Router.route("/")
  .get(getWriterHandler)
  .post(ApiCheck, Validate(WriterSchema), createWriterHandler);

Router.route("/:id").get(getWriterByIdHandler);

Router.route("/show").post(
  ApiCheck,
  Validate(ShowWriterSchema),
  createShowWriterHandler
);

export default Router;
