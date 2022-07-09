import { RedisClient } from "../utils/redis.util";
import config from "config";
import { CookieOptions, NextFunction, Request, Response } from "express";
import { Users } from "../entities/users.entity";
import AppError from "../errors/app.error";
import {
  LoginUserInput,
  RegisterUserInput,
  VerifyEmailInput,
} from "../schemas/users.schema";
import {
  createUser,
  findUser,
  findUserByEmail,
  findUserById,
  signTokens,
} from "../services/users.service";
import { signJwt, verifyJwt } from "../utils/jwt.util";
import { Email } from "../utils/email.util";
import crypto from "crypto";

// Setting Up Cookie Options
const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "lax",
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

const accessTokenCookieOptions: CookieOptions = {
  ...cookieOptions,
  expires: new Date(
    Date.now() + config.get<number>("accessTokenExpiresIn") * 60 * 1000
  ),
  maxAge: config.get<number>("accessTokenExpiresIn") * 60 * 1000,
};

const refreshTokenCookieOptions: CookieOptions = {
  ...cookieOptions,
  expires: new Date(
    Date.now() + config.get<number>("refreshTokenExpiresIn") * 60 * 1000
  ),
  maxAge: config.get<number>("refreshTokenExpiresIn") * 60 * 1000,
};

// Register Controller
export const registerUserHandler = async (
  req: Request<{}, {}, RegisterUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, userName, age, firstName, lastName } = req.body;
    const user = await createUser({
      email: email.toLowerCase(),
      password: password,
      userName: userName,
      age: age,
      firstName: firstName,
      lastName: lastName,
    });

    // email verification process
    const { hashedVerificationCode, verificationCode } = Users.createVerificationCode();
    user.verificationCode = hashedVerificationCode;
    await user.save();
    const redirectUrl = `${config.get<string>(
      "origin"
    )}/verifyemail/${verificationCode}`;
    try {
      await new Email(user, redirectUrl).sendVerificationCode();
      res.status(201).json({
        status: "success",
        message: "Success a verification link was sent to your email address",
      });
    } catch (error) {
      user.verificationCode = null;
      console.log(error);
      await user.save();

      return res.status(500).json({
        status: "error",
        message: "There was an error sending email, please try again",
      });
    }
  } catch (error: any) {
    if (error.code === "23505") {
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

    if (!user || !(await Users.comparePasswords(password, user.password))) {
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

    const session = await RedisClient.get(`user: ${decoded.sub}`);
    if (!session) return next(new AppError(403, message));

    const user = await findUserById(JSON.parse(session).userId);
    if (!user) return next(new AppError(403, message));

    const accessToken = signJwt({ sub: user.userId }, "accessTokenPrivateKey", {
      expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
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

    await RedisClient.del(`user: ${user.id}`);

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

    user.verified = true;
    user.verificationCode = null;
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Email verified successfully",
    });
  } catch (err: any) {
    next(err);
  }
};