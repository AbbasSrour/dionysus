import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ShowWriter, Writer } from '@prisma/client-apollo';
import { WriterService } from './writer.service';
import { CreateShowWriterDto, CreateWriterDto } from './dto';

@Controller('writer')
export class WriterController {
  constructor(private readonly writerService: WriterService) {}

  @Get()
  async getWriters(): Promise<Array<Writer>> {
    try {
      const writers = await this.writerService.getWritersService();
      if (!writers || writers.length === 0) throw new NotFoundException();
      return writers;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createWriter(@Body() body: CreateWriterDto): Promise<Writer> {
    try {
      const writer = await this.writerService.createWriterService(body);
      return writer;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getWriterById(@Param('id') id: number): Promise<Writer> {
    try {
      const writer = await this.writerService.getWriterByIdService(id);
      if (!writer) throw new NotFoundException();
      return writer;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name/image/:image')
  async getWriterByNameAndImage(
    @Param('name') name: string,
    @Param('image') image: string
  ): Promise<Writer> {
    try {
      const writer = await this.writerService.getWriterByNameAndImageService(
        name,
        image
      );
      if (!writer) throw new NotFoundException();
      return writer;
    } catch (error) {
      throw error;
    }
  }

  @Post('/show')
  async createShowWriter(
    @Body() body: CreateShowWriterDto
  ): Promise<ShowWriter> {
    try {
      const writer = await this.writerService.createShowWriterService(body);
      return writer;
    } catch (error) {
      throw error;
    }
  }
}
