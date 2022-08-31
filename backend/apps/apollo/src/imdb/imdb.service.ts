import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateImdbDto } from './dto';
import { Imdb } from '@prisma/client-apollo';

@Injectable()
export class ImdbService {
  constructor(private readonly client: PrismaService) {}

  async createImdbService(input: CreateImdbDto): Promise<Imdb> {
    return this.client.imdb.create({ data: input });
  }

  async getImdbByIdService(id: string): Promise<Imdb> {
    return this.client.imdb.findUniqueOrThrow({ where: { imdbId: id } });
  }
}
