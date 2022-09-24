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

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies(@Query('page') page: number): Promise<Array<MovieEntity>> {
    const movies = await this.movieService.getMovies(page);
    if (!movies || movies.length === 0) throw new NotFoundException();
    return movies;
  }

  @Post()
  async createMovie(@Body() body: CreateMovieDto): Promise<MovieEntity> {
    return await this.movieService.createMovie(body);
  }

  @Get('/:id')
  async getMovieById(@Param('id') id: number): Promise<MovieEntity> {
    const movie = await this.movieService.getMovieById(id);
    if (!movie) throw new NotFoundException();
    return movie;
  }
}
