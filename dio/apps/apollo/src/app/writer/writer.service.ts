import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateShowWriterDto, CreateWriterDto, UpdateWriterDto } from './dto';
import { ShowWriter, Writer } from '@prisma/client-apollo';

@Injectable()
export class WriterService {
  constructor(private readonly client: PrismaService) {}

  async getWriters(): Promise<Array<Writer>> {
    return this.client.writer.findMany();
  }

  async createWriter(input: CreateWriterDto): Promise<Writer> {
    return this.client.writer.create({ data: input });
  }

  async getWriterById(writerId: number): Promise<Writer> {
    return this.client.writer.findUniqueOrThrow({
      where: {
        writerId,
      },
    });
  }

  async getWriterByNameAndImage(name: string, image: string): Promise<Writer> {
    return this.client.writer.findUniqueOrThrow({
      where: { name_image: { name, image } },
    });
  }

  async updateWriter(writerId: number, data: UpdateWriterDto) {
    return this.client.writer.update({ where: { writerId }, data });
  }

  async createShowWriter(input: CreateShowWriterDto): Promise<ShowWriter> {
    return this.client.showWriter.create({ data: input });
  }
}
