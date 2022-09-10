import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DirectorService } from './director.service';
import { Director } from '@prisma/client-apollo';
import { CreateDirectorDto, CreateShowDrirectorDto } from './dto';

@Controller('directors')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  @Get()
  async getDirectors(): Promise<Array<Director>> {
    let director: Array<Director>;
    director = await this.directorService.getDirectors();
    if (!director || director.length <= 0) throw new NotFoundException();
    return director;
  }

  @Post()
  async createDirector(@Body() body: CreateDirectorDto): Promise<Director> {
    let director: Director;
    try {
      director = await this.directorService.createDirector(body);
      return director;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getDirectorById(@Param('id') id: number): Promise<Director> {
    const director = await this.directorService.getDirector(id);
    if (!director) throw new NotFoundException();
    return director;
  }

  @Get('/name/:name/image/:image')
  async DirectorByNameAndImage(
    @Param('name') name: string,
    @Param('image') image: string
  ): Promise<Director> {
    const director = await this.directorService.getDirectorByNameAndImage(
      name,
      image
    );
    if (!director) throw new NotFoundException();
    return director;
  }

  @Post('/show')
  async createShowDirectors(@Body() body: CreateShowDrirectorDto) {
    return await this.directorService.createShowDirector(body);
  }
}
