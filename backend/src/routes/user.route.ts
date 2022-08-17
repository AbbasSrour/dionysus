import express from "express";
import {
  checkIfEmailAvailableHandler,
  getMeHandler,
} from "../controllers/users.controller";
import { deserializeUser } from "../middleware/deserialize-user.middleware";
import { requireUser } from "../middleware/require-user.middleware";

const Router = express.Router();

Router.route("/me").get(deserializeUser, requireUser, getMeHandler);

Router.route("/:email/available").get(checkIfEmailAvailableHandler);
export default Router;
