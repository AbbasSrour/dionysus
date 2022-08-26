import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre, ShowGenre } from '../../prisma/client';
import { CreateGenreDto, CreateShowGenreDto } from './dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getGenres(): Promise<Array<Genre>> {
    try {
      const genres = await this.genreService.getGenresService();
      if (!genres || genres.length === 0) throw new NotFoundException();
      return genres;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createGenre(@Body() genreInput: CreateGenreDto): Promise<Genre> {
    try {
      const genre = await this.genreService.createGenreService(genreInput);
      return genre;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getGenreById(@Param('id') id: number): Promise<Genre> {
    try {
      const genre = await this.genreService.getGenreByIdService(id);
      if (!genre) throw new NotFoundException();
      return genre;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name')
  async getGenreByName(@Param('name') name: string): Promise<Genre> {
    try {
      const genre = await this.genreService.getGenreByNameService(name);
      if (!genre) throw new NotFoundException();
      return genre;
    } catch (error) {
      throw error;
    }
  }

  @Post('/show')
  async createShowGenre(@Body() body: CreateShowGenreDto): Promise<ShowGenre> {
    try {
      const showGenre = await this.genreService.createShowGenreService(body);
      return showGenre;
    } catch (error) {
      throw error;
    }
  }
}
