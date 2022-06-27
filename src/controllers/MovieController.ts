import db from "../database/db"
import { Request, Response } from "express"

export const GetMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movie = await db.query(
      "SELECT * FROM dionysus.movie WHERE movie_id = $1",
      [id]
    );
    res.json(movie.rows[0]);
  } catch (error: any) {
    console.error(error.message);
  }
};

export const MoviesPerGenre = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movie = await db.query(
      "SELECT dionysus.movie.movie_id, movie_name, movie_release_year FROM dionysus.movie_genres, dionysus.movie WHERE dionysus.movie_genres.genre_id = $1 and dionysus.movie.movie_id = dionysus.movie_genres.movie_id; ",
      [id]
    );
    res.json(movie.rows);
  } catch (error: any) {
    console.error(error);
  }
};

