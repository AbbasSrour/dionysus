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
    const episodes = await this.episodeService.getEpisodes();
    if (!episodes || episodes.length === 0) throw new NotFoundException();
    return episodes;
  }

  @Post()
  async createEpisode(@Body() body: CreateEpisodeDto) {
    return await this.episodeService.createEpisode(body);
  }

  @Get('/:id')
  async getEpisodeById(@Param('id') id: number) {
    const episode = await this.episodeService.getEpisodeById(id);
    if (!episode || episode.length === 0) throw new NotFoundException();
    return episode;
  }
}
