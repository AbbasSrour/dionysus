import { NextFunction, Request, Response } from "express";
import { VideoInput } from "../schemas/video.schema";
import { createVideoService } from "../services/video.service";

export const createVideoHandler = async (
  req: Request<{}, {}, VideoInput, {}>,
  res: Response,
  next: NextFunction
) => {
  const {
    isDefault,
    url,
    showId,
    type,
    language,
    official,
    publishedAt,
    quality,
    site,
    name,
  } = req.body;
  try {
    const video = await createVideoService({
      isDefault,
      url,
      showId,
      type,
      language,
      official,
      publishedAt,
      quality,
      site,
      name,
    });
    res.status(201).json({ status: "Success", data: { video } });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Video for ${showId} and url ${url} already exists in the database`,
      });
    else next(error);
  }
};
