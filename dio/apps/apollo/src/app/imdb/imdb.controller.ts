import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { Imdb } from '@prisma/client-apollo';
import { CreateImdbDto } from './dto';

@Controller('imdb')
export class ImdbController {
  constructor(private readonly imdbService: ImdbService) {}

  @Post()
  async createImdb(@Body() imdbDto: CreateImdbDto): Promise<Imdb> {
    try {
      const imdb = this.imdbService.createImdb(imdbDto);
      return imdb;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getImdbById(@Param('id') id: string): Promise<Imdb> {
    try {
      const imdb = this.imdbService.getImdbById(id);
      if (!imdb) throw new NotFoundException();
      return imdb;
    } catch (error) {
      throw error;
    }
  }
}
