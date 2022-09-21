import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Video } from '@prisma/client-apollo';
import { CreateVideoDto } from './dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class VideoService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
  ) {}

  async getVideosService(): Promise<Array<Video>> {
    return this.client.video.findMany();
  }

  async createVideoService(input: CreateVideoDto): Promise<Video> {
    return this.client.video.create({ data: input });
  }

  async getVideoById(id: number): Promise<Video> {
    return this.client.video.findUniqueOrThrow({ where: { videoId: id } });
  }

  async getVideoByUrlService(url: string) {
    return this.client.video.findUniqueOrThrow({ where: { url: url } });
  }

  async updateVideoService(videoId: number, data: UpdateVideoDto) {
    return this.client.video.update({ where: { videoId }, data });
  }

  async insertVideo(data: CreateVideoDto) {
    return await this.createVideoService(data).catch((error) => {
      this.logger.log(error);
      return this.getVideoByUrlService(data.url)
        .then((video) => {
          if (
            video.createdAt !== video.updatedAt &&
            dateDifferenceUtil(video.createdAt) >= 15
          )
            return this.updateVideoService(video.videoId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }
}
