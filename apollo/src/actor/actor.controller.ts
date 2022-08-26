import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Actor, ShowCast } from '../../prisma/client';
import { ActorService } from './actor.service';
import { CreateActorDto, CreateShowCastDto } from './dto';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get()
  async getActors(): Promise<Array<Actor>> {
    let actors: Array<Actor>;
    try {
      actors = await this.actorService.getActors();
      if (!actors || actors.length === 0) throw new NotFoundException();
      return actors;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createActor(@Body() dto: CreateActorDto): Promise<Actor> {
    let actor: Actor;
    try {
      actor = await this.actorService.createActor(dto);
      return actor;
    } catch (error: any) {
      throw error;
    }
  }

  @Get('/:id')
  async getActor(@Param('id') id: number) {
    let actor: Actor;
    try {
      actor = await this.actorService.getActor(id);
      if (!actor) throw new NotFoundException();
      return actor;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name/image/:image')
  async getActorNameImage(
    @Param('name') name: string,
    @Param('image') image: string,
  ) {
    let actor: Actor;
    try {
      actor = await this.actorService.getActorByNameAndImage(name, image);
      if (!actor) throw new NotFoundException();
      return actor;
    } catch (error) {
      throw error;
    }
  }

  @Post('/show')
  async createShowCast(@Body() body: CreateShowCastDto) {
    let showCast: ShowCast;
    try {
      showCast = await this.actorService.createShowCast(body);
      return showCast;
    } catch (error: any) {
      throw error;
    }
  }
}
