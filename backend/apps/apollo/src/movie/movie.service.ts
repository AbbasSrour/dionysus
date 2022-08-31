import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Movie } from '@prisma/client-apollo';
import { CreateMovieDto } from './dto';

@Injectable()
export class MovieService {
  constructor(private readonly client: PrismaService) {}

  async getMoviesService(): Promise<Array<Movie>> {
    return this.client.movie.findMany();
  }

  async createMovieService(input: CreateMovieDto): Promise<Movie> {
    return this.client.movie.create({ data: input });
  }

  async getMovieById(id: number): Promise<Movie> {
    return this.client.movie.findFirstOrThrow({ where: { movieId: id } });
  }
}
