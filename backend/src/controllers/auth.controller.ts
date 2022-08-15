import { RedisClient } from "../utils/redis.util";

import { CookieOptions, NextFunction, Request, Response } from "express";
import AppError from "../errors/app.error";
import {
  LoginUserInput,
  RegisterUserInput,
  VerifyEmailInput,
} from "../schemas/users.schema";
import {
  comparePasswords,
  createUser,
  createVerificationCode,
  findUser,
  findUserByEmail,
  findUserById,
  signTokens,
  updateVerificationCode,
  updateVerified,
} from "../services/user.service";
import { signJwt, verifyJwt } from "../utils/jwt.util";
import { Email } from "../utils/email.util";
import crypto from "crypto";
import { env } from "../utils/validate-env.util";

// Setting Up Cookie Options
const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "lax",
};

if (env.NODE_ENV === "production") cookieOptions.secure = true;

const accessTokenCookieOptions: CookieOptions = {
  ...cookieOptions,
  expires: new Date(Date.now() + env.ACCESS_TOKEN_EXPIRATION * 60 * 1000),
  maxAge: env.ACCESS_TOKEN_EXPIRATION * 60 * 1000,
};

const refreshTokenCookieOptions: CookieOptions = {
  ...cookieOptions,
  expires: new Date(Date.now() + env.REFRESH_TOKEN_EXPIRATION * 60 * 1000),
  maxAge: env.REFRESH_TOKEN_EXPIRATION * 60 * 1000,
};

// Register Controller
export const registerUserHandler = async (
  req: Request<{}, {}, RegisterUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    // Create User
    const { email, password, userName, age, name } = req.body;
    const user = await createUser({
      email: email.toLowerCase(),
      password: password,
      userName: userName,
      age: age,
      name: name,
    });

    // email verification process
    const { hashedVerificationCode, verificationCode } =
      await createVerificationCode();
    await updateVerificationCode(user, hashedVerificationCode);
    const redirectUrl = `${env.ORIGIN}/verifyemail/${verificationCode}`;
    try {
      await new Email(user, redirectUrl).sendVerificationCode();
      res.status(201).json({
        status: "success",
        message: "Success a verification link was sent to your email address",
      });
    } catch (error) {
      const verificationCode = null;
      await updateVerificationCode(user, verificationCode);

      return res.status(500).json({
        status: "error",
        message: "There was an error sending email, please try again",
      });
    }
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "User with that email already exist",
      });
    }
    next(error);
  }
};

// Login Controller
export const loginUserHandler = async (
  req: Request<{}, {}, LoginUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail({ email });

    if (!user) {
      return next(new AppError(400, "Invalid email or password"));
    }

    if (!user || !(await comparePasswords(password, user.password))) {
      return next(new AppError(400, "Invalid email or password"));
    }

    if (!user.verified) {
      return next(new AppError(400, "You are not verified"));
    }

    const { accessToken, refreshToken } = await signTokens(user);
    res.cookie("access_token", accessToken, accessTokenCookieOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.status(200).json({
      status: "success",
      accessToken,
    });
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

// Refresh Token Controller
export const refreshAccessTokenHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const message = "Could not access the refresh token";

    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return next(new AppError(403, message));

    const decoded = verifyJwt<{ sub: string }>(
      refreshToken,
      "refreshTokenPublicKey"
    );
    if (!decoded) return next(new AppError(403, message));

    const session = await RedisClient.get(decoded.sub);
    if (!session) return next(new AppError(403, message));

    const user = await findUserById(JSON.parse(session).userId);
    if (!user) return next(new AppError(403, message));

    const accessToken = signJwt({ sub: user.userId }, "accessTokenPrivateKey", {
      expiresIn: `${env.ACCESS_TOKEN_EXPIRATION}m`,
    });

    res.cookie("accessToken", accessToken, accessTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.status(200).json({
      status: "success",
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

export const logoutHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    await RedisClient.del(user.id);

    res.cookie("accessToken", "", { maxAge: -1 });
    res.cookie("refreshToken", "", { maxAge: -1 });
    res.cookie("logged_in", "", { maxAge: -1 });

    res.status(200).json({
      status: "success",
    });
  } catch (err: any) {
    next(err);
  }
};

export const verifyEmailHandler = async (
  req: Request<VerifyEmailInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const verificationCode = crypto
      .createHash("sha256")
      .update(req.params.verificationCode)
      .digest("hex");

    const user = await findUser({ verificationCode });

    if (!user) {
      return next(new AppError(401, "Could not verify email"));
    }

    await updateVerificationCode(user, null);
    await updateVerified(user, true);

    res.status(200).json({
      status: "success",
      message: "Email verified successfully",
    });
  } catch (err: any) {
    next(err);
  }
};
