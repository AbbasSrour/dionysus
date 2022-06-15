const router = require("express").Router();
const db = require("../db");
const seriesController = require("../controllers/seriesController");

router.route("/:id").get(seriesController.getSeries);
router.route("/genres/:id").get(seriesController.seriesPerGenre);

module.exports = router;
