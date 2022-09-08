import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateImdbDto, UpdateImdbDto } from './dto';
import { Imdb } from '@prisma/client-apollo';

@Injectable()
export class ImdbService {
  constructor(private readonly client: PrismaService) {}

  async createImdb(input: CreateImdbDto): Promise<Imdb> {
    return this.client.imdb.create({ data: input });
  }

  async getImdbById(imdbId: string): Promise<Imdb> {
    return this.client.imdb.findUniqueOrThrow({ where: { imdbId } });
  }

  async updateImdb(imdbId: string, data: UpdateImdbDto): Promise<Imdb> {
    return this.client.imdb.update({
      where: { imdbId },
      data,
    });
  }
}
