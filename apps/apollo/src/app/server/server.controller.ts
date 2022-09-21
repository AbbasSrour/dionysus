import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { EpisodeServer, MovieServer, Server } from '@prisma/client-apollo';
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
    const servers = await this.serverService.getServers();
    if (!servers || servers.length === 0) throw new NotFoundException();
    return servers;
  }

  @Post()
  async createServer(@Body() body: CreateServerDto): Promise<Server> {
    return await this.serverService.createServer(body);
  }

  @Get('/:id')
  async getServerById(@Param('id') id: number): Promise<Server> {
    const server = await this.serverService.getServerById(id);
    if (!server) throw new NotFoundException();
    return server;
  }

  @Get('/name/:name')
  async getServerByName(@Param('name') name: string): Promise<Server> {
    const server = await this.serverService.getServerByName(name);
    if (!server) throw new NotFoundException();
    return server;
  }

  @Post('/movie')
  async createMovieServer(
    @Body() body: CreateMovieServerDto,
  ): Promise<MovieServer> {
    return await this.serverService.createMovieServer(body);
  }

  @Post('/episode')
  async createEpisodeServer(
    @Body() body: CreateEpisodeServerDto,
  ): Promise<EpisodeServer> {
    return await this.serverService.createEpisodeServer(body);
  }
}
