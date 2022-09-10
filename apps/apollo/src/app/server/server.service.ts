import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import {
  CreateEpisodeServerDto,
  CreateMovieServerDto,
  CreateServerDto,
} from './dto';
import { MovieServer, SeriesServer, Server } from '@prisma/client-apollo';
import { UpdateServerDto } from './dto/update-language.dto';

@Injectable()
export class ServerService {
  constructor(private readonly client: PrismaService) {}

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
    input: CreateEpisodeServerDto
  ): Promise<SeriesServer> {
    return this.client.seriesServer.create({ data: input });
  }
}
