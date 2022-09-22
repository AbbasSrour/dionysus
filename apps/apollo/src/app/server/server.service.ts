import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateEpisodeServerDto, CreateMovieServerDto, CreateServerDto } from './dto';
import { EpisodeServer, MovieServer, Server } from '@prisma/client-apollo';
import { UpdateServerDto } from './dto/update-language.dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class ServerService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

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

  async findServer(serverName: string): Promise<Server> {
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

  async getMovieServer(movieId: number, serverId: number) {
    return this.client.movieServer.findUniqueOrThrow({
      where: {
        movieId_serverId: {
          movieId,
          serverId,
        },
      },
    });
  }

  async createEpisodeServer(input: CreateEpisodeServerDto): Promise<EpisodeServer> {
    return this.client.episodeServer.create({ data: input });
  }

  async getEpisodeServer(episodeId: number, serverId: number) {
    return this.client.episodeServer.findUniqueOrThrow({
      where: {
        serverId_episodeId: {
          episodeId,
          serverId,
        },
      },
    });
  }

  async insertServer(data: CreateServerDto) {
    return await this.createServer(data).catch(() => {
      return this.findServer(data.name)
        .then((server) => {
          if (
            server.createdAt !== server.updatedAt &&
            dateDifferenceUtil(server.createdAt) >= 15
          )
            return this.updateServer(server.serverId, data);
          return null;
        })
        .catch(() => {
          return null;
        });
    });
  }

  async insertEpisodeServer(input: CreateEpisodeServerDto) {
    return this.createEpisodeServer(input).catch(() =>
      this.getEpisodeServer(input.episodeId, input.serverId),
    );
  }

  async insertMovieServer(input: CreateMovieServerDto) {
    return this.createMovieServer(input).catch(() =>
      this.getEpisodeServer(input.movieId, input.serverId),
    );
  }
}
