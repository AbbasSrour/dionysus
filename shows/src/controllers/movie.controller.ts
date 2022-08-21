import {NextFunction, Request, Response} from "express";
import {MovieInput} from "../schemas/movie.schema";
import {createMovieService} from "../services/movie.service";

export const createMovieHandler = async (
  req: Request<{}, {}, MovieInput>,
  res: Response,
  next: NextFunction
) => {
  const {showId, length} = req.body;
  try {
    const movie = await createMovieService({length, showId});
    res.status(201).json({status: "Success", data: {movie}});
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({
        status: "fail",
        message: `Movie of show id ${showId} exists in the database`,
      });
    next(error);
  }
};
