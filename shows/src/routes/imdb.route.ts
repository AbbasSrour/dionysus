import express from "express";
import {ApiCheck} from "../middleware/api.middleware";
import {Validate} from "../middleware/validate.middleware";
import {createImdbHandler, getImdbByIdHandler, getImdbHandler,} from "../controllers/imdb.controller";
import {ImdbSchema} from "../schemas/imdb.schema";

const Router = express.Router();

Router.route("/")
  .get(getImdbHandler)
  .post(ApiCheck, Validate(ImdbSchema), createImdbHandler);

Router.route("/:id").get(getImdbByIdHandler);

export default Router;
