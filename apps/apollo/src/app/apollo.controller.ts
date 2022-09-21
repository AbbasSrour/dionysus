import { Controller, Logger } from '@nestjs/common';

import { ApolloService } from './apollo.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@dio/common';
import { InsertDto } from './insert.dto';

@Controller()
export class ApolloController {
  constructor(
    private readonly apolloService: ApolloService,
    private readonly logger: Logger,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('insert')
  async insert(@Payload() payload: InsertDto, @Ctx() ctx: RmqContext) {
    this.logger.log(payload);
    // await this.apolloService.insert();
    // this.rmqService.ack(ctx);
  }
}
