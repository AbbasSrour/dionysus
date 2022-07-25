import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { LanguageSchema } from "../schemas/language.schema";
import { createLanguageHandler } from "../controllers/language.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(LanguageSchema),
  createLanguageHandler
);

export default Router;
