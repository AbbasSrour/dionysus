import { Controller, Get } from '@nestjs/common';

import { AthenaService } from './athena.service';

@Controller()
export class AthenaController {
  constructor(private readonly appService: AthenaService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
