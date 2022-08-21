import express from "express";
import {SearchHandler} from "../controllers/search.controller";

const Router = express.Router();

Router.route("/").get(SearchHandler);

export default Router;
