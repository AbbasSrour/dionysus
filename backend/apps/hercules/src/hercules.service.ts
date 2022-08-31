import { Injectable } from '@nestjs/common';

@Injectable()
export class HerculesService {
  getHello(): string {
    return 'Hello World!';
  }
}
