import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateEpisodeDto } from './dto';
import { Episode } from '@prisma/client-apollo';
import { UpdateEpisodeDto } from './dto/update.dto';

@Injectable()
export class EpisodeService {
  constructor(private readonly client: PrismaService) {}

  async getEpisodes(): Promise<Array<Episode>> {
    return this.client.episode.findMany();
  }

  async createEpisode(input: CreateEpisodeDto): Promise<Episode> {
    return this.client.episode.create({ data: input });
  }

  async getEpisodeById(id: number): Promise<Episode> {
    return this.client.episode.findUniqueOrThrow({ where: { episodeId: id } });
  }

  async getEpisode(
    episodeNumber: number,
    showId: number,
    season: number
  ): Promise<Episode> {
    return this.client.episode.findUniqueOrThrow({
      where: {
        number_season_showId: {
          showId,
          season,
          number: episodeNumber,
        },
      },
    });
  }

  async updateEpisode(episodeId: number, data: UpdateEpisodeDto) {
    return this.client.episode.update({
      where: { episodeId: episodeId },
      data,
    });
  }
}
