import { Injectable } from '@nestjs/common';

@Injectable()
export class AthenaService {
  getHello(): string {
    return 'Hello World!';
  }
}
