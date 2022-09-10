import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from '@prisma/client-apollo';
import { CreateVideoDto } from './dto';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async getVideos(): Promise<Array<Video>> {
    const videos = await this.videoService.getVideosService();
    if (!videos || videos.length === 0) throw new NotFoundException();
    return videos;
  }

  @Post()
  async createVideo(@Body() body: CreateVideoDto) {
    return await this.videoService.createVideoService(body);
  }

  @Get('/:id')
  async getVideoById(@Param('id') id: number) {
    const video = await this.videoService.getVideoById(id);
    if (!video) throw new NotFoundException();
    return video;
  }
}
