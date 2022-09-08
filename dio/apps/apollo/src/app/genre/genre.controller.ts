import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre, ShowGenre } from '@prisma/client-apollo';
import { CreateGenreDto, CreateShowGenreDto } from './dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getGenres(): Promise<Array<Genre>> {
    const genres = await this.genreService.getGenres();
    if (!genres || genres.length === 0) throw new NotFoundException();
    return genres;
  }

  @Post()
  async createGenre(@Body() genreInput: CreateGenreDto): Promise<Genre> {
    return await this.genreService.createGenre(genreInput);
  }

  @Get('/:id')
  async getGenreById(@Param('id') id: number): Promise<Genre> {
    const genre = await this.genreService.getGenreById(id);
    if (!genre) throw new NotFoundException();
    return genre;
  }

  @Get('/name/:name')
  async getGenreByName(@Param('name') name: string): Promise<Genre> {
    const genre = await this.genreService.getGenreByName(name);
    if (!genre) throw new NotFoundException();
    return genre;
  }

  @Post('/show')
  async createShowGenre(@Body() body: CreateShowGenreDto): Promise<ShowGenre> {
    return await this.genreService.createShowGenre(body);
  }
}
