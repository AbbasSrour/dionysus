import { Controller, Get } from '@nestjs/common';
import { CoeusService } from './coeus.service';

@Controller()
export class CoeusController {
  constructor(private readonly coeusService: CoeusService) {}

  @Get()
  getHello(): string {
    return this.coeusService.getHello();
  }
}
