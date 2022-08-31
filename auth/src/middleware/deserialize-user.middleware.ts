import { NextFunction, Request, Response } from "express";
import { findUserById } from "../services/user.service";
import AppError from "../errors/app.error";
import { RedisClient } from "../utils/redis.util";
import { verifyJwt } from "../utils/jwt.util";

export const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let accessToken;
    // Check if access token exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    )
      accessToken = req.headers.authorization.split(" ")[1];
    else if (req.cookies.accessToken) accessToken = req.cookies.accessToken;

    if (!accessToken) return next(new AppError(401, "You are not logged in"));

    // Validate the access token
    const decoded = verifyJwt<{ sub: string }>(
      accessToken,
      "accessTokenPublicKey"
    );
    if (!decoded) {
      return next(new AppError(401, `Invalid token or user doesn't exist`));
    }

    // Check if the user has a valid session
    const session = await RedisClient.get(`${decoded.sub}`);
    if (!session) {
      return next(new AppError(401, `Invalid token or session has expired`));
    }

    // Check if the user still exist
    const user = await findUserById(JSON.parse(session).userId);
    if (!user) {
      return next(new AppError(401, `Invalid token or session has expired`));
    }

    // Add user to res.locals
    res.locals.user = user;

    next();
  } catch (err: any) {
    next(err);
  }
};
