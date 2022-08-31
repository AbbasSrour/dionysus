import { Controller, Get, Inject } from '@nestjs/common';
import { HerculesService } from './hercules.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class HerculesController {
  constructor(
    private readonly herculesService: HerculesService,
    @Inject('APOLLO CLIENT') private apolloClient: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.herculesService.getHello();
  }

  @Get('/test')
  async testRmq() {
    console.log(
      await lastValueFrom(
        this.apolloClient.emit('test', { message: 'hello world' }),
      ),
    );
  }
}