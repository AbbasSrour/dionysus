import { NextFunction, Request, Response } from "express";
import { ShowInput } from "../schemas/show.schema";
import { Prisma, Show } from "../../prisma/client";
import {
  createShowService,
  getShowByIdService,
  getShowByNameReleaseYearService,
} from "../services/show.service";
import AppError from "../errors/app.error";
import log from "../utils/logger.util";

export const createShowHandler = async (
  req: Request<{}, {}, ShowInput, {}>,
  res: Response,
  next: NextFunction
) => {
  const { name, revenue, budget, summary, releaseYear, pgRating } = req.body;
  try {
    const show = await createShowService({
      name,
      releaseYear,
      revenue,
      budget,
      summary,
      pgRating,
    });
    res
      .status(201)
      .json({ status: "Success the show was created", data: { show } });
  } catch (error: any) {
    log.error(error);
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Show of name ${name} and ${releaseYear} already exists in the database`,
      });
    else next(error);
  }
};

export const getShowHandler = async (
  req: Request<
    {},
    {},
    {},
    { name?: string; id?: number; releaseYear?: string }
  >,
  res: Response,
  next: NextFunction
) => {
  const { name, id, releaseYear } = req.query;
  try {
    let show: Show;
    if (id) show = await getShowByIdService(id);
    else if (name && releaseYear)
      show = await getShowByNameReleaseYearService(name, parseInt(releaseYear));
    else throw new AppError(400, "Missing id or name and release year");
    res.status(200).json({ status: "Success", data: { show } });
  } catch (error) {
    log.error(error);
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested show not found" });
    else next(error);
  }
};

export const getShowByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const show: Show = await getShowByIdService(id);
    res.status(200).json({ status: "Success", data: { show } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested show not found" });
    next(error);
  }
};
