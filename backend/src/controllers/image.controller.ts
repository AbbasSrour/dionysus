import { NextFunction, Request, Response } from "express";
import { createImageService } from "../services/image.service";
import { ImageInput } from "../schemas/image.schema";

export const createImageHandler = async (
  req: Request<{}, {}, ImageInput, {}>,
  res: Response,
  next: NextFunction
) => {
  const { showId, url, isDefault, type, language, aspectRatio, height, width } =
    req.body;
  try {
    const image = createImageService({
      showId,
      url,
      isDefault,
      height,
      width,
      aspectRatio,
      language,
      type,
    });
    res.status(201).json({ status: "Success", data: { poster: image } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Image for ${showId} and url ${url} already exists in the database`,
      });
    else next(error);
  }
};
