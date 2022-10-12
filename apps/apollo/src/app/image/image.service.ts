import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Image } from '@prisma/client-apollo';
import { CreateImageDto, UpdateImageDto } from './dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class ImageService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

  async createImage(input: CreateImageDto): Promise<Image> {
    return this.client.image.create({ data: input });
  }

  async getImages(page: number, distinct: boolean): Promise<Array<Image>> {
    const take = page * 10;
    const images = new Array<Image>();
    if (distinct) {
      const ids = await this.client.image.findMany({
        take,
        select: {
          showId: true,
        },
        distinct: ['showId'],
      });
      for (const id of ids) {
        await this.client.image
          .findFirst({
            where: {
              showId: id.showId,
            },
          })
          .then((image) => {
            images.push(image);
          });
      }
      return images;
    }
    return await this.client.image.findMany({ take });
  }

  async getImageById(id: number): Promise<Image> {
    return this.client.image.findUniqueOrThrow({ where: { imageId: id } });
  }

  async getImageByUrlService(url: string): Promise<Image> {
    return this.client.image.findUniqueOrThrow({ where: { url } });
  }

  async updateImageService(imageId: number, data: UpdateImageDto) {
    return this.client.image.update({ data, where: { imageId } });
  }

  async insertImage(data: CreateImageDto) {
    return await this.createImage(data).catch(() => {
      return this.getImageByUrlService(data.url)
        .then((image) => {
          if (
            image.createdAt !== image.updatedAt &&
            dateDifferenceUtil(image.createdAt) >= 15
          )
            return this.updateImageService(image.imageId, data);
          return null;
        })
        .catch(() => {
          return null;
        });
    });
  }
}
