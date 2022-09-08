import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Episode } from '@prisma/client-apollo';
import { CreateEpisodeDto } from './dto';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  async getEpisodes(): Promise<Array<Episode>> {
    try {
      const episodes = await this.episodeService.getEpisodes();
      if (!episodes || episodes.length === 0) throw new NotFoundException();
      return episodes;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createEpisode(@Body() body: CreateEpisodeDto) {
    try {
      const episode = await this.episodeService.createEpisode(body);
      return episode;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getEpisodeById(@Param('id') id: number) {
    try {
      const episode = await this.episodeService.getEpisodeById(id);
      if (!episode || episode.length === 0) throw new NotFoundException();
      return episode;
    } catch (error) {
      throw error;
    }
  }
}
