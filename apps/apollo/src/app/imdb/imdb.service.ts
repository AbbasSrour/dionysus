import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateImdbDto, UpdateImdbDto } from './dto';
import { Imdb } from '@prisma/client-apollo';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class ImdbService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

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

  async insertImdb(data: CreateImdbDto) {
    return await this.createImdb(data).catch(() => {
      return this.getImdbById(data.imdbId)
        .then((imdb) => {
          if (
            imdb.createdAt !== imdb.updatedAt &&
            dateDifferenceUtil(imdb.createdAt) >= 15
          )
            return this.updateImdb(imdb.imdbId, data);
          return imdb;
        })
        .catch(() => {
          return null;
        });
    });
  }
}
