import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Image } from '@prisma/client-apollo';
import { CreateImageDto } from './dto';

@Injectable()
export class ImageService {
  constructor(private readonly client: PrismaService) {}

  async createImageService(input: CreateImageDto): Promise<Image> {
    return this.client.image.create({ data: input });
  }

  async getImagesService(): Promise<Array<Image>> {
    return this.client.image.findMany();
  }

  async getImageByIdService(id: number): Promise<Image> {
    return this.client.image.findUniqueOrThrow({ where: { imageId: id } });
  }
}
