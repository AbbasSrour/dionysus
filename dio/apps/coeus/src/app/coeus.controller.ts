import { Controller, Get } from '@nestjs/common';

import { CoeusService } from './coeus.service';

@Controller()
export class CoeusController {
  constructor(private readonly appService: CoeusService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
