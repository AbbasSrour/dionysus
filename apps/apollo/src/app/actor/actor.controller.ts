import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Actor } from '@prisma/client-apollo';
import { ActorService } from './actor.service';
import { CreateActorDto, CreateShowCastDto } from './dto';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  async createActor(@Body() dto: CreateActorDto): Promise<Actor> {
    return await this.actorService.createActor(dto);
  }

  @Get('/:id')
  async getActor(@Param('id') id: number) {
    const actor = await this.actorService.getActor(id);
    if (!actor) throw new NotFoundException();
    return actor;
  }

  @Get('/name/:name/image/:image')
  async getActorNameImage(@Param('name') name: string, @Param('image') image: string) {
    const actor = await this.actorService.getActorByNameAndImage(name, image);
    if (!actor) throw new NotFoundException();
    return actor;
  }

  @Post('/show')
  async createShowCast(@Body() body: CreateShowCastDto) {
    return await this.actorService.createShowCastMember(body);
  }

  @Get('/show/:showId')
  async getActors(@Param('showId') showId: number): Promise<Array<Actor>> {
    const actors = await this.actorService.getActors(showId);
    if (!actors || actors.length === 0) throw new NotFoundException();
    return actors;
  }
}
