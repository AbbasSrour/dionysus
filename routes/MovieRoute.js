const MovieController = require("../controllers/MovieController");

const MovieRoute = (app, options, done) => {
  app.get("/api/v1/movies/:id");
  app.get("/api/v1/movies/genres/:id");
};

module.exports = MovieRoute;
