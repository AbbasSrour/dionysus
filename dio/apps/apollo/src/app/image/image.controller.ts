import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto';
import { Image } from '@prisma/client-apollo';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async getImages(): Promise<Array<Image>> {
    const images = await this.imageService.getImagesService();
    if (!images || images.length === 0) throw new NotFoundException();
    return images;
  }

  @Post()
  async createImage(@Body() imageDto: CreateImageDto): Promise<Image> {
    const image = await this.imageService.createImageService(imageDto);
    return image;
  }

  @Get('/:id')
  async getImageById(@Param('id') id: number): Promise<Image> {
    try {
      const image = await this.imageService.getImageByIdService(id);
      if (!image) throw new NotFoundException();
      return image;
    } catch (error) {
      throw error;
    }
  }
}
