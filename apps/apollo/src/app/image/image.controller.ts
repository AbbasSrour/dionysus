import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto';
import { Image } from '@prisma/client-apollo';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async getImages(@Query('page') page = 1): Promise<Array<Image>> {
    const images = await this.imageService.getImages(page);
    if (!images || images.length === 0) throw new NotFoundException();
    return images;
  }

  @Post()
  async createImage(@Body() imageDto: CreateImageDto): Promise<Image> {
    return await this.imageService.createImage(imageDto);
  }

  @Get('/:id')
  async getImageById(@Param('id') id: number): Promise<Image> {
    const image = await this.imageService.getImageById(id);
    if (!image) throw new NotFoundException();
    return image;
  }
}
