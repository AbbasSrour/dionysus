import { Injectable } from '@nestjs/common';

@Injectable()
export class CoeusService {
  getData(): { message: string } {
    return { message: 'Welcome to coeus!' };
  }
}
