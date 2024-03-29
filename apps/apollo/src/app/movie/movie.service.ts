import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateMovieDto, UpdateMovieDto } from './dto';
import { MovieEntity } from './movie.entity';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';
import { MoviePojo } from './pojo/movie.pojo';
import { HesitaConstant } from '../common/constants/hesita-proxy.constant';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
    @Inject(HesitaConstant) private readonly hesitaProxy: ClientProxy,
  ) {}

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
      include: {
        Imdb: true,
        ShowGenre: {
          select: {
            genre: true,
          },
        },
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

    const movieData = { ...moviePojo, genres: moviePojo['ShowGenre'] };

    delete movieData.ShowGenre;
    delete movieData.createdAt;
    delete movieData.updatedAt;
    return movieData;
  }

  async getMovies(page: number, genreId?: number): Promise<Array<MoviePojo>> {
    const take = page * 10;
    const movies = new Array<MoviePojo>();
    let data;

    if (genreId)
      data = await this.client.movie.findMany({
        take,
        where: {
          show: {
            ShowGenre: {
              some: {
                genreId,
              },
            },
          },
        },
      });
    else data = await this.client.movie.findMany({ take });
    for (const elem of data) {
      const movie = await this.getMovie(elem.movieId);
      movies.push(movie);
    }
    return movies;
  }

  // async getTrending(): Promise<Array<MoviePojo>> {}

  async getTop(page: number): Promise<Array<MoviePojo>> {
    const take = page * 10;
    const ids = await this.client.movie.findMany({
      select: {
        movieId: true,
      },
      take,
      orderBy: [
        {
          show: {
            Imdb: {
              voteCount: 'desc',
            },
          },
        },
        {
          show: {
            Imdb: {
              rating: 'desc',
            },
          },
        },
      ],
    });
    const movies = new Array<MoviePojo>();
    for (const id of ids) {
      movies.push(await this.getMovie(id.movieId));
    }
    return movies;
  }

  async getTrending() {
    const imdbIds: Array<string> = await lastValueFrom(
      this.hesitaProxy.send('trending', 'Movie'),
    );
    const movies = new Array<MoviePojo>();
    for (const imdbId of imdbIds) {
      const movie = await this.client.show.findFirst({
        where: {
          Imdb: {
            imdbId,
          },
        },
        include: {
          Movie: {
            select: {
              movieId: true,
            },
          },
        },
      });
      if (!movie) continue;
      movies.push(await this.getMovie(movie.Movie.movieId));
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
