import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ServerSchema } from "../schemas/server.schema";
import { createServerHandler } from "../controllers/server.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(ServerSchema), createServerHandler);

export default Router;
