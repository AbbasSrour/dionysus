const router = require("express").Router();
const authController = require("../controllers/authController.js");
const emailCheck = require("../middleware/authMiddleware").emailCheck;

// Register User
router.route("/register").post(emailCheck);

// Log User In
// router.route("/login");

module.exports = router;
