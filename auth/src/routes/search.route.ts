import express from "express";
import {SearchHandler} from "../controllers/search.controller";

//TODO Move this to new service
const Router = express.Router();

Router.route("/").get(SearchHandler);

export default Router;
