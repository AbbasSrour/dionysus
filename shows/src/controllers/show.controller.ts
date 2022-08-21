import {NextFunction, Request, Response} from "express";
import {ShowInput} from "../schemas/show.schema";
import {Prisma, Show} from "../../prisma/client";
import {
  createShowService,
  getPopularShowService,
  getShowByIdService,
  getShowByNameReleaseYearService,
  getShowDefaultBackdropService,
  getShowDefaultLogoService,
  getShowDefaultPosterService,
} from "../services/show.service";
import AppError from "../errors/app.error";
import log from "../utils/logger.util";
import {getShowGenresService} from "../services/genre.service";

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
  req: Request<{ id: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const show: Show = await getShowByIdService(parseInt(id));
    res.status(200).json({ status: "Success", data: { show } });
  } catch (error) {
    if (error instanceof Prisma.NotFoundError)
      res
        .status(404)
        .json({ status: "fail", message: "Requested show not found" });
    next(error);
  }
};

export const getPopularShowHandler = async (
  req: Request<{}, {}, {}, { type?: string }>,
  res: Response,
  next: NextFunction
) => {
  let { type } = req.query;
  try {
    if (!type || (type !== "movie" && type !== "tv")) type = "movie";
    const show = await getPopularShowService(type);

    res.status(200).json({ status: "success", data: { show } });
  } catch (error) {
    log.error(error);
    next(error);
  }
};

export const getShowDefaultImagesHandler = async (
  req: Request<{ id: string }, {}, {}, { type?: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    let { type } = req.query;
    let { id } = req.params;
    const showId = parseInt(id);
    if (!type || type === "") type = "all";

    let data = null;
    if (type === "all") {
      const poster = await getShowDefaultPosterService(showId);
      const backdrop = await getShowDefaultBackdropService(showId);
      const logo = await getShowDefaultLogoService(showId);
      if (logo && backdrop && poster) data = { poster, backdrop, logo };
    } else if (type === "backdrop") {
      const backdrop = await getShowDefaultBackdropService(showId);
      if (backdrop) data = { backdrop };
    } else if (type === "poster") {
      const poster = await getShowDefaultPosterService(showId);
      if (poster) data = { poster };
    } else if (type === "logo") {
      const logo = await getShowDefaultLogoService(showId);
      if (logo) data = { logo };
    }
    if (data)
      res
        .status(200)
        .json({ status: "Success", data: { images: { ...data } } });
    else throw new AppError(404, "No Data");
  } catch (error) {
    console.log(error);
    if (error instanceof AppError)
      res
        .status(404)
        .json({ status: "fail", message: "Data couldn't be found" });
    else next(error);
  }
};

export const getShowGenresHandler = async (
  req: Request<{ id: number }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const genres = getShowGenresService(id);
    res.status(200).json({ status: "Success", data: { genres } });
  } catch (error) {
    next(error);
  }
};
