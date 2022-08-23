import {Injectable} from '@nestjs/common';
import {PrismaClient} from '../../prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://ares:7142@localhost:5432/apollo_db?schema=public',
        },
      },
    });
  }
}
