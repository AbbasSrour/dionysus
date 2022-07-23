import express from "express";
import {SearchHandler} from "../controllers/search.controller";
import {Validate} from "../middleware/validate.middleware";
import {SearchSchema} from "../schemas/search.schema"
import {ApiCheck} from "../middleware/api.middleware";

const Router = express.Router();

Router.route("/").post(Validate(SearchSchema), ApiCheck, SearchHandler);

export default Router;