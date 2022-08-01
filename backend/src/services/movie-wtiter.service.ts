import { AppDataSource } from "../utils/data-source.util";
import { MovieWriters } from "../entities/movie-writters.entity";
import { MovieWriterInput } from "../schemas/movie-writer.schema";
import Movie from "../entities/movie.entity";
import { Writer } from "../entities/writer.entity";

const movieWriterRepo = AppDataSource.getRepository(MovieWriters);

export const createMovieWriterService = async (
  input: MovieWriterInput
): Promise<MovieWriters> => {
  const { movie, writer } = input;
  const movieWriter = AppDataSource.manager.create(MovieWriters, {
    movieId: AppDataSource.manager.create(Movie, movie),
    writerId: AppDataSource.manager.create(Writer, writer),
  });
  return (await AppDataSource.manager.save(
    MovieWriters,
    movieWriter
  )) as MovieWriters;
};
