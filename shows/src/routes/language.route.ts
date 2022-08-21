import express from "express";
import {ApiCheck} from "../middleware/api.middleware";
import {Validate} from "../middleware/validate.middleware";
import {LanguageSchema, ShowLanguageSchema} from "../schemas/language.schema";
import {
  createLanguageHandler,
  createShowLanguageHandler,
  getLanguageByIdHandler,
  getLanguageHandler,
} from "../controllers/language.controller";

const Router = express.Router();

Router.route("/")
  .get(getLanguageHandler)
  .post(ApiCheck, Validate(LanguageSchema), createLanguageHandler);

Router.route("/:id").get(getLanguageByIdHandler);

Router.route("/show").post(
  ApiCheck,
  Validate(ShowLanguageSchema),
  createShowLanguageHandler
);

export default Router;
