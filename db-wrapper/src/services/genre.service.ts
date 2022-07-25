import { AppDataSource } from "../utils/data-source.util";
import Genre from "../entities/genre.entity";
import { GenreInput, GenreSchema } from "../schemas/genre.schema";

const genreRepo = AppDataSource.getRepository(Genre);

export const createGenreService = async (input: GenreInput): Promise<Genre> => {
  const genre = AppDataSource.manager.create(Genre, input);
  return (await AppDataSource.manager.save(genre)) as Genre;
};
