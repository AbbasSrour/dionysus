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
    try {
      const videos = await this.videoService.getVideosService();
      if (!videos || videos.length === 0) throw new NotFoundException();
      return videos;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createVideo(@Body() body: CreateVideoDto) {
    try {
      const video = await this.videoService.createVideoService(body);
      return video;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getVideoById(@Param('id') id: number) {
    try {
      const video = await this.videoService.getVideoById(id);
      if (!video) throw new NotFoundException();
      return video;
    } catch (error) {
      return error;
    }
  }
}
