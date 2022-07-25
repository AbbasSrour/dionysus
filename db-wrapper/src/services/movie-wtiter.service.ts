import { AppDataSource } from "../utils/data-source.util";
import { MovieWriters } from "../entities/movie-writters.entity";
import { MovieWriterInput } from "../schemas/movie-writer.schema";
import Movie from "../entities/movie.entity";
import { Writer } from "../entities/writer.entity";

const movieWriterRepo = AppDataSource.getRepository(MovieWriters);

export const createMovieWriterService = async (
  input: MovieWriterInput
): Promise<MovieWriters> => {
  const movieWriter = AppDataSource.manager.create(MovieWriters, {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    writerId: AppDataSource.manager.create(Writer, input.writer),
  });
  return await AppDataSource.manager.save(MovieWriters, movieWriter) as MovieWriters;
};
