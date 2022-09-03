import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { HerculesService } from './hercules.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { AccessTokenGuard } from './common/guards';

@Controller()
export class HerculesController {
  constructor(
    private readonly herculesService: HerculesService,
    @Inject('APOLLO') private apolloClient: ClientProxy,
  ) {}

  @Get()
  @UseGuards(AccessTokenGuard)
  getHello(): string {
    return this.herculesService.getHello();
  }

  @Get('/test')
  async testRmq() {
    try {
      console.log(
        await lastValueFrom(
          this.apolloClient.emit('test', { message: 'hello world' }),
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }
}
