import express from "express";
import { ScrapeHandler } from "../controllers/scrape.controller";
import { Validate } from "../middleware/validate.middleware";
import { ScrapeSchema } from "../schemas/scrape.schema";
import { ApiCheck } from "../middleware/api.middleware";

const Router = express.Router();

// TODO make this a get
Router.route("/").post(ApiCheck, Validate(ScrapeSchema), ScrapeHandler);

export default Router;
