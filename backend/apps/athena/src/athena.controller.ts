import { Controller, Get } from '@nestjs/common';
import { AthenaService } from './athena.service';

@Controller()
export class AthenaController {
  constructor(private readonly athenaService: AthenaService) {}

  @Get()
  getHello(): string {
    return this.athenaService.getHello();
  }
}
