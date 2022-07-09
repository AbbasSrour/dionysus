import express from "express";
import {
  loginUserHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerUserHandler,
  verifyEmailHandler,
} from "../controllers/auth.controller";
import { deserializeUser } from "../middleware/deserialize-user.middleware";
import { requireUser } from "../middleware/require-user.middleware";
import { Validate } from "../middleware/validate.middleware";
import { RegisterUserSchema, LoginUserSchema, VerifyEmailSchema } from "../schemas/users.schema";

const Router = express.Router();

// Register user
Router.post("/register", Validate(RegisterUserSchema), registerUserHandler);

// Login user
Router.post("/login", Validate(LoginUserSchema), loginUserHandler);

// Logout user
Router.get("/logout", deserializeUser, requireUser, logoutHandler);

// Refresh access token
Router.get("/refresh", refreshAccessTokenHandler);

// Verify Email
Router.get("/verifyemail/:verificationCode", Validate(VerifyEmailSchema), verifyEmailHandler);

export default Router;
