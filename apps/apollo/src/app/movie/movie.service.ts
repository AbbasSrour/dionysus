import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateMovieDto, UpdateMovieDto } from './dto';
import { MovieEntity } from './movie.entity';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';
import { MoviePojo } from './pojo/movie.pojo';

@Injectable()
export class MovieService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

  async getMovie(movieId: number): Promise<MoviePojo> {
    const movie = await this.client.movie.findUniqueOrThrow({
      where: {
        movieId,
      },
      select: {
        movieId: true,
        showId: true,
        budget: true,
        revenue: true,
      },
    });
    const show = await this.client.show.findUniqueOrThrow({
      where: {
        showId: movie.showId,
      },
    });

    const poster = this.client.image.findFirst({
      where: {
        isDefault: true,
        showId: show.showId,
        type: 'poster',
      },
      take: 1,
    });
    const backdrop = this.client.image.findFirst({
      where: {
        showId: show.showId,
        type: 'backdrop',
      },
      take: 1,
    });
    const logo = this.client.image.findFirst({
      where: {
        showId: show.showId,
        type: 'logo',
      },
      take: 1,
    });
    const trailer = this.client.video.findFirst({
      where: {
        showId: show.showId,
        type: 'Trailer',
      },
    });

    const data = await Promise.all([poster, backdrop, logo, trailer]);

    const moviePojo = {
      ...show,
      ...movie,
      poster: data[0],
      backdrop: data[1],
      logo: data[2],
      trailer: data[3],
    };

    console.log(moviePojo);

    delete moviePojo.createdAt;
    delete moviePojo.updatedAt;
    return moviePojo;
  }

  async getMovies(page: number): Promise<Array<MoviePojo>> {
    const take = page * 10;
    const movies = new Array<MoviePojo>();

    const data = await this.client.movie.findMany({ take });
    for (const elem of data) {
      const movie = await this.getMovie(elem.movieId);
      movies.push(movie);
    }
    return movies;
  }

  async findMovie(name: string, releaseYear: number): Promise<MovieEntity> {
    const show = await this.client.show.findUniqueOrThrow({
      where: {
        name_releaseYear: {
          name,
          releaseYear,
        },
      },
    });
    const movie = await this.client.movie.findUniqueOrThrow({
      where: {
        showId: show.showId,
      },
    });

    return await this.getMovie(movie.movieId);
  }

  async createMovie(input: CreateMovieDto): Promise<MovieEntity> {
    const show = await this.client.show.create({
      data: {
        name: input.name,
        releaseYear: input.releaseYear,
        summary: input.summary,
        pgRating: input.pgRating,
        length: input.length,
      },
    });

    const movie = await this.client.movie.create({
      data: {
        showId: show.showId,
        budget: input.budget,
        revenue: input.revenue,
      },
    });

    const data = {
      ...show,
      ...movie,
    };

    const { createdAt, updatedAt, ...movieEntity } = data;
    return movieEntity;
  }

  async updateMovie(input: UpdateMovieDto): Promise<MovieEntity> {
    const { movieId, revenue, budget, ...rest } = input;
    const movie = await this.client.movie.update({
      where: {
        movieId,
      },
      data: {
        revenue,
        budget,
      },
    });
    const show = await this.client.show.update({
      where: {
        showId: movie.showId,
      },
      data: {
        ...rest,
      },
    });
    const data = { ...show, ...movie };
    const { createdAt, updatedAt, ...movieEntity } = data;
    return movieEntity;
  }

  async shouldUpdate(movieId: number) {
    const movie = await this.client.movie.findUniqueOrThrow({
      where: {
        movieId,
      },
    });
    const show = await this.client.show.findUniqueOrThrow({
      where: {
        showId: movie.showId,
      },
    });

    return !(
      show.createdAt !== show.updatedAt &&
      dateDifferenceUtil(show.createdAt) >= 15 &&
      movie.createdAt !== show.updatedAt &&
      dateDifferenceUtil(show.createdAt) >= 15
    );
  }

  async insertMovie(data: CreateMovieDto): Promise<MovieEntity> {
    return await this.createMovie(data).catch(() => {
      return this.findMovie(data.name, data.releaseYear)
        .then((movie) => {
          if (this.shouldUpdate(movie.movieId))
            return this.updateMovie(data && { movieId: movie.movieId });
          return movie;
        })
        .catch(() => {
          return null;
        });
    });
  }
}
