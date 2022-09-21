import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Image } from '@prisma/client-apollo';
import { CreateImageDto, UpdateImageDto } from './dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class ImageService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
  ) {}

  async createImageService(input: CreateImageDto): Promise<Image> {
    return this.client.image.create({ data: input });
  }

  async getImagesService(): Promise<Array<Image>> {
    return this.client.image.findMany();
  }

  async getImageByIdService(id: number): Promise<Image> {
    return this.client.image.findUniqueOrThrow({ where: { imageId: id } });
  }

  async getImageByUrlService(url: string): Promise<Image> {
    return this.client.image.findUniqueOrThrow({ where: { url } });
  }

  async updateImageService(imageId: number, data: UpdateImageDto) {
    return this.client.image.update({ data, where: { imageId } });
  }

  async insertImage(data: CreateImageDto) {
    return await this.createImageService(data).catch((error) => {
      this.logger.log(error);
      return this.getImageByUrlService(data.url)
        .then((image) => {
          if (
            image.createdAt !== image.updatedAt &&
            dateDifferenceUtil(image.createdAt) >= 15
          )
            return this.updateImageService(image.imageId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }
}
