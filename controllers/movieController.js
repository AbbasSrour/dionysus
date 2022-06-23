const db = require("../database/db.js");

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await db.query(
      "SELECT * FROM dionysus.movie WHERE movie_id = $1",
      [id]
    );
    res.json(movie.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const moviesPerGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await db.query(
      "SELECT dionysus.movie.movie_id, movie_name, movie_release_year FROM dionysus.movie_genres, dionysus.movie WHERE dionysus.movie_genres.genre_id = $1 and dionysus.movie.movie_id = dionysus.movie_genres.movie_id; ",
      [id]
    );
    res.json(movie.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getMovie, moviesPerGenre };
