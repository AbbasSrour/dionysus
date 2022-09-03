import { Injectable } from '@nestjs/common';

@Injectable()
export class HesitaService {
  getHello(): string {
    return 'Hello World!';
  }
}
