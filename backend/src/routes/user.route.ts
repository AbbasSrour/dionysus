import express from "express";
import { getMeHandler } from "../controllers/users.controller";
import { deserializeUser } from "../middleware/deserialize-user.middleware";
import { requireUser } from "../middleware/require-user.middleware";

const Router = express.Router();

// Get currently logged-in user
Router.get("/me", deserializeUser, requireUser, getMeHandler);

export default Router;
