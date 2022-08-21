import express from "express";
import {createVideoHandler} from "../controllers/video.controller";

const Router = express.Router();

Router.route("/").get().post(createVideoHandler);

export default Router;
