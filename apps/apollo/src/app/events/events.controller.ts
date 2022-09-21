import { Controller, Logger } from '@nestjs/common';
import { EventsService } from './events.service';
import { RmqService } from '@dio/common';

@Controller('events')
export class EventsController {
  constructor(
    private readonly logger: Logger,
    private readonly eventService: EventsService,
    private readonly rmqService: RmqService,
  ) {}

  // @EventPattern('insert')
  // async Insert(@Payload() payload: Array<InsertDto>, @Ctx() ctx: RmqContext) {
  //   for (const entry of payload) {
  //     try {
  //       // Show Entry
  //       // const { name, type, releaseYear, summary, length, pgRating } = entry;
  //       // const show = await this.eventService.insertShow({
  //       //   name,
  //       //   type,
  //       //   releaseYear,
  //       //   summary,
  //       //   length,
  //       //   pgRating,
  //       // });
  //       // this.logger.log(show);
  //       // if (!show) continue;
  //       // Movie Or Episode Entry
  //       // Image Entry
  //       /* this.showService.deleteShow(show.showId); */
  //       /* this.rmqService.ack(ctx); */
  //     } catch (error) {
  //       this.logger.error(error);
  //     }
  //   }
  // }
}
