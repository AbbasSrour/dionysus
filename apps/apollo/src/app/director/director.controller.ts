import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { DirectorService } from './director.service';
import { Director } from '@prisma/client-apollo';
import { CreateDirectorDto, CreateShowDrirectorDto } from './dto';

@Controller('directors')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  @Get()
  async getDirectors(): Promise<Array<Director>> {
    const director = await this.directorService.getDirectors();
    if (!director || director.length <= 0) throw new NotFoundException();
    return director;
  }

  @Post()
  async createDirector(@Body() body: CreateDirectorDto): Promise<Director> {
    return await this.directorService.createDirector(body);
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
    @Param('image') image: string,
  ): Promise<Director> {
    const director = await this.directorService.findDirector(name, image);
    if (!director) throw new NotFoundException();
    return director;
  }

  @Post('/show')
  async createShowDirectors(@Body() body: CreateShowDrirectorDto) {
    return await this.directorService.createShowDirector(body);
  }
}
