import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { StudioService } from './studio.service';
import { ShowStudio, Studio } from '@prisma/client-apollo';
import { CreateStudioDto } from './dto';
import { CreateShowStudioDto } from './dto/create-show-studio.dto';

@Controller('studio')
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Get()
  async getStudios(): Promise<Array<Studio>> {
    const studio = await this.studioService.getStudios();
    if (!studio || studio.length === 0) throw new NotFoundException();
    return studio;
  }

  @Post()
  async createStudios(@Body() body: CreateStudioDto): Promise<Studio> {
    return await this.studioService.createStudio(body);
  }

  @Get('/:id')
  async getStudioById(@Param('id') id: number): Promise<Studio> {
    const studio = await this.studioService.getStudioById(id);
    if (!studio) throw new NotFoundException();
    return studio;
  }

  @Get('/name/:name')
  async getStudioByName(@Param('name') name: string): Promise<Studio> {
    const studio = await this.studioService.getStudioByName(name);
    if (!studio) throw new NotFoundException();
    return studio;
  }

  @Post('/show')
  async createShowStudio(
    @Body() body: CreateShowStudioDto
  ): Promise<ShowStudio> {
    return await this.studioService.createShowStudio(body);
  }
}
