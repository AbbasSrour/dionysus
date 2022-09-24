import { Controller, Get } from '@nestjs/common';
import { HesitaService } from './hesita.service';

@Controller()
export class HesitaController {
  constructor(private readonly hesitaService: HesitaService) {}

  @Get()
  getHello(): string {
    return this.hesitaService.getHello();
  }
}
