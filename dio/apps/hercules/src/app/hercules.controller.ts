import { Controller, Get, Inject, UseGuards } from '@nestjs/common';

import { HerculesService } from './hercules.service';
import { ClientProxy } from '@nestjs/microservices';
import { AccessTokenGuard } from './common/guards';
import { lastValueFrom } from 'rxjs';

@Controller()
export class HerculesController {
  constructor(
    private readonly herculesService: HerculesService,
    @Inject('APOLLO') private apolloClient: ClientProxy
  ) {}

  @Get()
  @UseGuards(AccessTokenGuard)
  getHello(): { message: string } {
    return this.herculesService.getData();
  }

  @Get('/test')
  async testRmq() {
    try {
      console.log(
        await lastValueFrom(
          this.apolloClient.emit('test', { message: 'hello world' })
        )
      );
    } catch (error) {
      console.log(error);
    }
  }
}
