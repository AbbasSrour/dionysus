import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Video } from '../../prisma/client';
import { CreateVideoDto } from './dto';

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
}
