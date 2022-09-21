import { Injectable } from '@nestjs/common';

@Injectable()
export class ApolloService {
  getData(): { message: string } {
    return { message: 'Welcome to apollo!' };
  }

  async insert() {}
}
