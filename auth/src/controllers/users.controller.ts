import { NextFunction, Request, Response } from "express";
import { findUserByEmail } from "../services/user.service";

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    res.status(200).status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const checkIfEmailAvailableHandler = async (
  req: Request<{ email: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.params;
  try {
    console.log(email);
    const user = await findUserByEmail({ email }).catch((error) => null);
    if (!user)
      res
        .status(200)
        .json({ status: "success", message: "email is available" });
    else
      res
        .status(409)
        .json({ status: "fail", data: { message: "email is not available" } });
  } catch (error) {
    next(error);
  }
};
