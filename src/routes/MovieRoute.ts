import db from "../database/db";
import { Request, Response } from "express";
import { GetMovie, MoviesPerGenre } from "../controllers/MovieController"
import express from "express"

const Router = express.Router()

Router.route("/:id").get();

export default Router;

