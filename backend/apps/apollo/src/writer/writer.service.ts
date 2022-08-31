import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateShowWriterDto, CreateWriterDto } from './dto';
import { ShowWriter, Writer } from '@prisma/client-apollo';

@Injectable()
export class WriterService {
  constructor(private readonly client: PrismaService) {}

  async getWritersService(): Promise<Array<Writer>> {
    return this.client.writer.findMany();
  }

  async createWriterService(input: CreateWriterDto): Promise<Writer> {
    return this.client.writer.create({ data: input });
  }

  async getWriterByIdService(writerId: number): Promise<Writer> {
    return this.client.writer.findUniqueOrThrow({
      where: {
        writerId,
      },
    });
  }

  async getWriterByNameAndImageService(
    name: string,
    image: string,
  ): Promise<Writer> {
    return this.client.writer.findUniqueOrThrow({
      where: { name_image: { name, image } },
    });
  }

  async createShowWriterService(
    input: CreateShowWriterDto,
  ): Promise<ShowWriter> {
    return this.client.showWriter.create({ data: input });
  }
}
