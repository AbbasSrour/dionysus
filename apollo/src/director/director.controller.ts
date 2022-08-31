import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DirectorService } from './director.service';
import { Director } from '../../prisma/client';
import { CreateDirectorDto, CreateShowDrirectorDto } from './dto';

@Controller('directors')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  @Get()
  async getDirectors(): Promise<Array<Director>> {
    let director: Array<Director>;
    try {
      director = await this.directorService.getDirectorsService();
      if (!director || director.length <= 0) throw new NotFoundException();
      return director;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createDirector(@Body() body: CreateDirectorDto): Promise<Director> {
    let director: Director;
    try {
      director = await this.directorService.createDirectorService(body);
      return director;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getDirectorById(@Param('id') id: number): Promise<Director> {
    try {
      const director = await this.directorService.getDirectorService(id);
      if (!director) throw new NotFoundException();
      return director;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name/image/:image')
  async DirectorByNameAndImage(
    @Param('name') name: string,
    @Param('image') image: string,
  ): Promise<Director> {
    try {
      const director =
        await this.directorService.getDirectorByNameAndImageService(
          name,
          image,
        );
      if (!director) throw new NotFoundException();
      return director;
    } catch (error) {
      throw error;
    }
  }

  @Post('/show')
  async createShowDirectors(@Body() body: CreateShowDrirectorDto) {
    try {
      const director = await this.directorService.createShowDirectorService(
        body,
      );
      return director;
    } catch (error) {
      throw error;
    }
  }
}
