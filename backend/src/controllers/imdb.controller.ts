import { NextFunction, Request, Response } from "express";
import { ImdbInput } from "../schemas/imdb.schema";
import {
  createImdbService,
  getImdbByIdService,
} from "../services/imdb.service";
import { Prisma } from "../../prisma/client";

export const createImdbHandler = async (
  req: Request<{}, {}, ImdbInput>,
  res: Response,
  next: NextFunction
) => {
  const { rating, voteCount, imdbId } = req.body;
  try {
    const imdb = await createImdbService({ rating, voteCount, imdbId });
    res
      .status(201)
      .json({ status: "Success imdb new entry created", data: { imdb } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Imdb entry of id ${imdbId} already exists in the database`,
      });
    else next(error);
  }
};

export const getImdbHandler = async (
  req: Request<{}, {}, {}, { id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.query;
  try {
    const imdb = await getImdbByIdService(id);
    res.status(200).json({ status: "success", data: { imdb } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested Imbd not found" });
    else next(error);
  }
};

export const getImdbByIdHandler = async (
  req: Request<{ id: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const imdb = await getImdbByIdService(id);
    res.status(200).json({ status: "Success", data: { imdb } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested Imbd not found" });
    else next(error);
  }
};
