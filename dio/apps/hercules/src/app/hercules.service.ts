import { Injectable } from '@nestjs/common';

@Injectable()
export class HerculesService {
  getData(): { message: string } {
    return { message: 'Welcome to hercules!' };
  }
}
