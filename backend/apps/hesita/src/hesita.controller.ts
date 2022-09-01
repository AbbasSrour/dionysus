import { Controller } from '@nestjs/common';
import { HesitaService } from './hesita.service';

@Controller()
export class HesitaController {
  constructor(private readonly hesitaService: HesitaService) {}

  scrapeShow() {}
}
