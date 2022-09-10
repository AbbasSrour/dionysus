import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Video } from '@prisma/client-apollo';
import { CreateVideoDto } from './dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Injectable()
export class VideoService {
  constructor(private readonly client: PrismaService) {}

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
}
