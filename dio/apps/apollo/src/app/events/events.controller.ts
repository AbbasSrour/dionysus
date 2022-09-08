import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { InsertDto } from './dto/insert.dto';
import { EventsService } from './events.service';
import { RmqService } from '@dio/common';
import { ShowService } from '../show/show.service';

@Controller('events')
export class EventsController {
  constructor(
    private readonly logger: Logger,
    private readonly eventService: EventsService,
    private readonly rmqService: RmqService,
    private readonly showService: ShowService
  ) {}

  @EventPattern('insert')
  async Insert(@Payload() payload: Array<InsertDto>, @Ctx() ctx: RmqContext) {
    payload.forEach(async (entry) => {
      try {
        // Show Entry
        const { name, type, releaseYear, summary, length, pgRating } = entry;
        const show = await this.eventService.insertShow({
          name,
          type,
          releaseYear,
          summary,
          length,
          pgRating,
        });
        this.logger.log(show);
        if (!show) return;

        // Movie Or Episode Entry

        // Image Entry

        /* this.showService.deleteShow(show.showId); */
        /* this.rmqService.ack(ctx); */
      } catch (error) {
        this.logger.error(error);
      }
    });
  }
}
