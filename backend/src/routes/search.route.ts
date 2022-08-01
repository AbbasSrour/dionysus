import express from "express";
import { SearchHandler } from "../controllers/search.controller";
import { deserializeUser } from "../middleware/deserialize-user.middleware";
import { requireUser } from "../middleware/require-user.middleware";

const Router = express.Router();

// Router.route("/").post(deserializeUser, requireUser)
Router.route("/").post(SearchHandler);

export default Router;
