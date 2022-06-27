import { AjaxSearch as SearchController } from "../controllers/SearchController"
import express from "express"

const Router = express.Router()

Router.post("", SearchController);

export default Router;
