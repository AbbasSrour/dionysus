import { EmailCheck } from "../middleware/AuthMiddleware"
import { Register } from "../controllers/AuthController"
import express from "express"

const Router = express.Router();

Router.route("/register")
Router.route("/login");
Router.route("/refresh")
Router.route("/logout")

export default Router;
