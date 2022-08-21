import {NextFunction, Request, Response} from "express";
import {ShowWriterInput, WriterInput} from "../schemas/writer.schema";
import {
  createShowWriterService,
  createWriterService,
  getWriterByIdService,
  getWriterByNameAndImageService,
} from "../services/writer.service";
import {Prisma, Writer} from "../../prisma/client";
import AppError from "../errors/app.error";

export const createWriterHandler = async (
  req: Request<{}, {}, WriterInput>,
  res: Response,
  next: NextFunction
) => {
  const { name, image } = req.body;
  try {
    const writer = await createWriterService({ name, image });
    res
      .status(201)
      .json({ status: "Success, the writer was created", data: { writer } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Genre of name ${name} already exists in the database`,
      });
    else next(error);
  }
};

export const getWriterHandler = async (
  req: Request<{}, {}, {}, { name?: string; image?: string; id?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { name, image, id } = req.query;
  try {
    let writer: Writer | null;
    if (id) writer = await getWriterByIdService(id);
    else if (name && image)
      writer = await getWriterByNameAndImageService(name, image);
    else throw new AppError(400, "Missing id or name and image");
    res.status(200).json({ status: "Success", data: { writer } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested writer not found" });
    else next(error);
  }
};

export const getWriterByIdHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const writer = await getWriterByIdService(id);
    res.status(200).json({ status: "Success", data: { writer } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested writer not found" });
    else next(error);
  }
};

export const createShowWriterHandler = async (
  req: Request<{}, {}, ShowWriterInput>,
  res: Response,
  next: NextFunction
) => {
  const { writerId, showId } = req.body;
  try {
    const showWriter = createShowWriterService({ showId, writerId });
    res
      .status(201)
      .json({ status: "Success show writer created", data: { showWriter } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Relation between writer ${writerId} and show ${showId} already exists in the database`,
      });
    else next(error);
  }
};
