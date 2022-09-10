import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '@prisma/client-apollo';
import { CreateMovieDto } from './dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies(): Promise<Array<Movie>> {
    const movies = await this.movieService.getMoviesService();
    if (!movies || movies.length === 0) throw new NotFoundException();
    return movies;
  }

  @Post()
  async createMovie(@Body() body: CreateMovieDto): Promise<Movie> {
    return await this.movieService.createMovieService(body);
  }

  @Get('/:id')
  async getMovieById(@Param('id') id: number): Promise<Movie> {
    const movie = await this.movieService.getMovieById(id);
    if (!movie) throw new NotFoundException();
    return movie;
  }
}
