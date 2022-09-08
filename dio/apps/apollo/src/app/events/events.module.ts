import { Logger, Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { RmqService } from '@dio/common';
import { ShowModule } from '../show/show.module';
import { ActorModule } from '../actor/actor.module';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [ShowModule, ActorModule, ImageModule],
  controllers: [EventsController],
  providers: [EventsService, RmqService, Logger],
})
export class EventsModule {}
