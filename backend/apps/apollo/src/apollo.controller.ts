import { Controller, Get } from '@nestjs/common';
import { ApolloService } from './apollo.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class ApolloController {
  constructor(
    private readonly apolloService: ApolloService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.apolloService.getHello();
  }

  @EventPattern('insert')
  async test(@Payload() data: any, @Ctx() ctx: RmqContext) {
    try {
      console.log('hello');
      console.log(data);
      this.rmqService.ack(ctx);
    } catch (error) {
      console.log(error);
    }
  }
}
