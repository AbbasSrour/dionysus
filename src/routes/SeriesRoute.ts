const SeriesController = require("../controllers/SeriesController");
import express from "express";

const Router = express.Router();

Router.route("/:id").get();
Router.route("/genres/:id").get();

export default Router;
