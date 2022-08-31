import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { Imdb } from '../../prisma/client';
import { CreateImdbDto } from './dto';

@Controller('imdb')
export class ImdbController {
  constructor(private readonly imdbService: ImdbService) {}

  @Post()
  async createImdb(@Body() imdbDto: CreateImdbDto): Promise<Imdb> {
    try {
      const imdb = this.imdbService.createImdbService(imdbDto);
      return imdb;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getImdbById(@Param('id') id: string): Promise<Imdb> {
    try {
      const imdb = this.imdbService.getImdbByIdService(id);
      if (!imdb) throw new NotFoundException();
      return imdb;
    } catch (error) {
      throw error;
    }
  }
}
