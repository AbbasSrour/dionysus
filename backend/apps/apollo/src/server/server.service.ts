import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
  CreateEpisodeServerDto,
  CreateMovieServerDto,
  CreateServerDto,
} from './dto';
import { MovieServer, SeriesServer, Server } from '@prisma/client-apollo';

@Injectable()
export class ServerService {
  constructor(private readonly client: PrismaService) {}

  async getServersService(): Promise<Array<Server>> {
    return this.client.server.findMany();
  }

  async createServerService(input: CreateServerDto): Promise<Server> {
    return this.client.server.create({ data: input });
  }

  async getServerByIdService(serverId: number): Promise<Server> {
    return this.client.server.findUniqueOrThrow({
      where: {
        serverId,
      },
    });
  }

  async getServerByNameService(serverName: string): Promise<Server> {
    return this.client.server.findUniqueOrThrow({
      where: { name: serverName },
    });
  }

  async createMovieServerService(
    input: CreateMovieServerDto,
  ): Promise<MovieServer> {
    return this.client.movieServer.create({ data: input });
  }

  async createEpisodeServerService(
    input: CreateEpisodeServerDto,
  ): Promise<SeriesServer> {
    return this.client.seriesServer.create({ data: input });
  }
}
