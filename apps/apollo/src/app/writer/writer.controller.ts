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
    const writers = await this.writerService.getWriters();
    if (!writers || writers.length === 0) throw new NotFoundException();
    return writers;
  }

  @Post()
  async createWriter(@Body() body: CreateWriterDto): Promise<Writer> {
    return await this.writerService.createWriter(body);
  }

  @Get('/:id')
  async getWriterById(@Param('id') id: number): Promise<Writer> {
    const writer = await this.writerService.getWriterById(id);
    if (!writer) throw new NotFoundException();
    return writer;
  }

  @Get('/name/:name/image/:image')
  async getWriterByNameAndImage(
    @Param('name') name: string,
    @Param('image') image: string
  ): Promise<Writer> {
    const writer = await this.writerService.getWriterByNameAndImage(
      name,
      image
    );
    if (!writer) throw new NotFoundException();
    return writer;
  }

  @Post('/show')
  async createShowWriter(
    @Body() body: CreateShowWriterDto
  ): Promise<ShowWriter> {
    return await this.writerService.createShowWriter(body);
  }
}
