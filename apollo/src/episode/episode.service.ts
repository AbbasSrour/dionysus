import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateEpisodeDto } from './dto';
import { Episode } from '../../prisma/client';

@Injectable()
export class EpisodeService {
  constructor(private readonly client: PrismaService) {}

  async getEpisodesService(): Promise<Array<Episode>> {
    return this.client.episode.findMany();
  }

  async createEpisodeService(input: CreateEpisodeDto): Promise<Episode> {
    return this.client.episode.create({ data: input });
  }

  async getEpisodeByIdService(id: number): Promise<Episode> {
    return this.client.episode.findUniqueOrThrow({ where: { episodeId: id } });
  }
}
