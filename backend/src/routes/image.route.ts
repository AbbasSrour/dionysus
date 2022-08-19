import express from "express";
import { createImageHandler } from "../controllers/image.controller";

const Router = express.Router();

Router.route("/").get().post(createImageHandler);

export default Router;
