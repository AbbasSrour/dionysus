import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateEpisodeDto } from './dto';
import { Episode } from '@prisma/client-apollo';
import { UpdateEpisodeDto } from './dto/update.dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class EpisodeService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

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
    season: number,
    seriesId: number,
  ): Promise<Episode> {
    return this.client.episode.findUniqueOrThrow({
      where: {
        number_season_seriesId: {
          seriesId,
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

  async insertEpisode(data: CreateEpisodeDto) {
    return await this.createEpisode(data).catch((error) => {
      return this.getEpisode(data.number, data.season, data.seriesId)
        .then((episode) => {
          if (
            episode.createdAt !== episode.updatedAt &&
            dateDifferenceUtil(episode.createdAt) >= 15
          )
            return this.updateEpisode(episode.episodeId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }
}
