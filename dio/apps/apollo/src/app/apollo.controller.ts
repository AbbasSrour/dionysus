import { Controller, Get } from '@nestjs/common';

import { ApolloService } from './apollo.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class ApolloController {
  constructor(private readonly appService: ApolloService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('insert')
  async test(@Payload() data: any, @Ctx() ctx: RmqContext) {
    try {
      console.log('hello');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
