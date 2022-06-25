const SeriesController = require("../controllers/SeriesController");

const SeriesRoute = (app, options, done) => {
  app.get("/api/v1/series/:id");
  app.get("/api/v1/series/genres/:id");
};

module.exports = SeriesRoute;
