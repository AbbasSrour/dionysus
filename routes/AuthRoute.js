const AuthController = require("../controllers/AuthController.js");
const EmailCheck = require("../middleware/AuthMiddleware").emailCheck;

const AuthRoute = (app, options, done) => {
  app.post("/api/v1/register");
  app.post("/api/v1/login");
};

module.exports = AuthRoute;
