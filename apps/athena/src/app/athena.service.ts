import { Injectable } from '@nestjs/common';

@Injectable()
export class AthenaService {
  getData(): { message: string } {
    return { message: 'Welcome to athena!' };
  }
}
