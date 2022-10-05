import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto';
import { MovieEntity } from './movie.entity';
import { MoviePojo } from './pojo/movie.pojo';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies(@Query('page') page = 1): Promise<Array<MoviePojo>> {
    const movies = await this.movieService.getMovies(page);
    if (!movies || movies.length === 0) throw new NotFoundException();
    return movies;
  }

  @Post()
  async createMovie(@Body() body: CreateMovieDto): Promise<MovieEntity> {
    return await this.movieService.createMovie(body);
  }

  @Get('/top')
  async getTopMovies(@Query('page') page = 1): Promise<Array<MoviePojo>> {
    return await this.movieService.getTop(page);
  }

  @Get('/trending')
  async getTrendingMovies(@Query('page') page = 1): Promise<Array<MoviePojo>> {
    return await this.movieService.getTrending();
  }

  @Get('/:id')
  async getMovieById(@Param('id') id: number): Promise<MoviePojo> {
    const movie = await this.movieService.getMovie(id);
    if (!movie) throw new NotFoundException();
    return movie;
  }
}
