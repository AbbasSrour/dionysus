import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { WriterSchema } from "../schemas/writer.schema";
import { createWriterHandler } from "../controllers/writer.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(WriterSchema), createWriterHandler);

export default Router;
