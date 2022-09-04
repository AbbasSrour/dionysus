import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Director, ShowDirector } from '@prisma/client-apollo';
import { CreateDirectorDto, CreateShowDrirectorDto } from './dto';

@Injectable()
export class DirectorService {
  constructor(private readonly client: PrismaService) {}

  async createDirectorService(input: CreateDirectorDto): Promise<Director> {
    return this.client.director.create({ data: input });
  }

  async getDirectorsService(): Promise<Array<Director>> {
    return this.client.director.findMany();
  }

  async getDirectorService(id: number): Promise<Director> {
    return this.client.director.findUniqueOrThrow({
      where: { directorId: id },
    });
  }

  async getDirectorByNameAndImageService(
    name: string,
    image: string
  ): Promise<Director> {
    return this.client.director.findUniqueOrThrow({
      where: {
        name_image: {
          name,
          image,
        },
      },
    });
  }

  async createShowDirectorService(
    input: CreateShowDrirectorDto
  ): Promise<ShowDirector> {
    return this.client.showDirector.create({ data: input });
  }
}
