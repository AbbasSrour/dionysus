import { Controller, Get, Logger } from '@nestjs/common';

import { ApolloService } from './apollo.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import fs from 'fs';
import { error } from 'console';
import { RmqService } from '@dio/common';

@Controller()
export class ApolloController {
  constructor(
    private readonly apolloService: ApolloService,
    private readonly logger: Logger,
    private readonly rmqService: RmqService
  ) { }

  @Get()
  getData() {
    return this.apolloService.getData();
  }

  @EventPattern('insert')
  async test(@Payload() data: any, @Ctx() ctx: RmqContext) {
    try {
      /* this.rmqService.ack(ctx); */
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
