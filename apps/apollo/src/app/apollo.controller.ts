import { Controller, Get } from '@nestjs/common';

import { ApolloService } from './apollo.service';

@Controller()
export class ApolloController {
  constructor(private readonly apolloService: ApolloService) {}

  @Get()
  getData() {
    return this.apolloService.getData();
  }
}
