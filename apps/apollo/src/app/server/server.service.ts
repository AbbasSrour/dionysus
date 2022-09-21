import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import {
  CreateEpisodeServerDto,
  CreateMovieServerDto,
  CreateServerDto,
} from './dto';
import { EpisodeServer, MovieServer, Server } from '@prisma/client-apollo';
import { UpdateServerDto } from './dto/update-language.dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class ServerService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
  ) {}

  async getServers(): Promise<Array<Server>> {
    return this.client.server.findMany();
  }

  async createServer(input: CreateServerDto): Promise<Server> {
    return this.client.server.create({ data: input });
  }

  async getServerById(serverId: number): Promise<Server> {
    return this.client.server.findUniqueOrThrow({
      where: {
        serverId,
      },
    });
  }

  async getServerByName(serverName: string): Promise<Server> {
    return this.client.server.findUniqueOrThrow({
      where: { name: serverName },
    });
  }

  async updateServer(serverId: number, data: UpdateServerDto) {
    return this.client.server.update({
      where: { serverId },
      data,
    });
  }

  async createMovieServer(input: CreateMovieServerDto): Promise<MovieServer> {
    return this.client.movieServer.create({ data: input });
  }

  async createEpisodeServer(
    input: CreateEpisodeServerDto,
  ): Promise<EpisodeServer> {
    return this.client.episodeServer.create({ data: input });
  }

  async insertServer(data: CreateServerDto) {
    return await this.createServer(data).catch((error) => {
      this.logger.log(error);
      return this.getServerByName(data.name)
        .then((server) => {
          if (
            server.createdAt !== server.updatedAt &&
            dateDifferenceUtil(server.createdAt) >= 15
          )
            return this.updateServer(server.serverId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }
}
