import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { MovieServer, SeriesServer, Server } from '../../prisma/client';
import { ServerService } from './server.service';
import {
  CreateEpisodeServerDto,
  CreateMovieServerDto,
  CreateServerDto,
} from './dto';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  async getServers(): Promise<Array<Server>> {
    try {
      const servers = await this.serverService.getServersService();
      if (!servers || servers.length === 0) throw new NotFoundException();
      return servers;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createServer(@Body() body: CreateServerDto): Promise<Server> {
    try {
      const server = await this.serverService.createServerService(body);
      return server;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getServerById(@Param('id') id: number): Promise<Server> {
    try {
      const server = await this.serverService.getServerByIdService(id);
      if (!server) throw new NotFoundException();
      return server;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name')
  async getServerByName(@Param('name') name: string): Promise<Server> {
    try {
      const server = await this.serverService.getServerByNameService(name);
      if (!server) throw new NotFoundException();
      return server;
    } catch (error) {
      throw error;
    }
  }

  @Post('/movie')
  async createMovieServer(
    @Body() body: CreateMovieServerDto,
  ): Promise<MovieServer> {
    try {
      const movieServer = await this.serverService.createMovieServerService(
        body,
      );
      return movieServer;
    } catch (error) {
      throw error;
    }
  }

  @Post('/episode')
  async createEpisodeServer(
    @Body() body: CreateEpisodeServerDto,
  ): Promise<SeriesServer> {
    try {
      const episodeServer = await this.serverService.createEpisodeServerService(
        body,
      );
      return episodeServer;
    } catch (error) {
      throw error;
    }
  }
}
