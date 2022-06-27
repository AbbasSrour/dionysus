import db from "../database/db";
import { Request, Response } from "express";

export const getSeries = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const series = await db.query(
      "SELECT * FROM dionysus.series WHERE series_id = $1",
      [id]
    );
    res.json(series.rows[0]);
  } catch (err) {
    console.error(err);
  }
};

export const seriesPerGenre = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const series = await db.query(
      "SELECT dionysus.series.series_id, series_name, series_release_year FROM dionysus.series_genres as genre, dionysus.series WHERE genre.genre_id = $1 and dionysus.series.series_id = genre.series_id; ",
      [id]
    );
    res.json(series.rows);
  } catch (error) {
    console.log(error);
  }
};
