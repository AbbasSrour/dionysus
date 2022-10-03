import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { Imdb } from '@prisma/client-apollo';
import { CreateImdbDto } from './dto';

@Controller('imdb')
export class ImdbController {
  constructor(private readonly imdbService: ImdbService) {
  }

  @Post()
  async createImdb(@Body() imdbDto: CreateImdbDto): Promise<Imdb> {
    return this.imdbService.createImdb(imdbDto);
  }

  @Get('/:id')
  async getImdbById(@Param('id') id: string): Promise<Imdb> {
    const imdb = this.imdbService.getImdbById(id);
    if (!imdb) throw new NotFoundException();
    return imdb;
  }


}
