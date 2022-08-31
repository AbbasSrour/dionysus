import { Injectable } from '@nestjs/common';

@Injectable()
export class CoeusService {
  getHello(): string {
    return 'Hello World!';
  }
}
