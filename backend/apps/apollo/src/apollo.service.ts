import { Injectable } from '@nestjs/common';

@Injectable()
export class ApolloService {
  getHello(): string {
    return 'Hello World!';
  }
}
