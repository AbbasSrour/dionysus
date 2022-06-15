const router = require("express").Router();
const pool = require("../db");
const movieController = require("../controllers/movieController");

router.route("/:id").get(movieController.getMovie);
router.route("/genres/:id").get(movieController.moviesPerGenre);

module.exports = router;
