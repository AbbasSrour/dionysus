import { Controller, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventsService } from './events.service';
import { RmqService } from '@dio/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { InsertDto } from './dto/insert.dto';

@Controller('events')
export class EventsController {
  constructor(
    private readonly logger: Logger,
    private readonly eventService: EventsService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('insert')
  @UsePipes(new ValidationPipe())
  async Insert(@Payload() payload: InsertDto, @Ctx() ctx: RmqContext) {
    await this.eventService.insert(payload);
    // await this.rmqService.ack(ctx);
    return;
  }
}
