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
    try {
      const studio = await this.studioService.getStudios();
      if (!studio || studio.length === 0) throw new NotFoundException();
      return studio;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createStudios(@Body() body: CreateStudioDto): Promise<Studio> {
    try {
      const studio = await this.studioService.createStudioService(body);
      return studio;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getStudioById(@Param('id') id: number): Promise<Studio> {
    try {
      const studio = await this.studioService.getStudioByIdService(id);
      if (!studio) throw new NotFoundException();
      return studio;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name')
  async getStudioByName(@Param('name') name: string): Promise<Studio> {
    try {
      const studio = await this.studioService.getStudioByNameService(name);
      if (!studio) throw new NotFoundException();
      return studio;
    } catch (error) {
      throw error;
    }
  }

  @Post('/show')
  async createShowStudio(
    @Body() body: CreateShowStudioDto,
  ): Promise<ShowStudio> {
    try {
      const showStudio = await this.studioService.createShowStudioService(body);
      return showStudio;
    } catch (error) {
      throw error;
    }
  }
}
