import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import {
  CreateShowWriterDto,
  CreateWriterDto,
  InsertWriterDto,
  UpdateWriterDto,
} from './dto';
import { ShowWriter, Writer } from '@prisma/client-apollo';

@Injectable()
export class WriterService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

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

  async getShowWriters(showId: number): Promise<Array<Writer>> {
    return this.client.writer.findMany({
      where: {
        ShowWriter: {
          some: {
            showId,
          },
        },
      },
    });
  }

  async deleteShowWriter(showId: number, writerId: number): Promise<ShowWriter> {
    return this.client.showWriter.delete({
      where: {
        showId_writerId: {
          writerId,
          showId,
        },
      },
    });
  }

  async insertWriters(showId: number, data: Array<InsertWriterDto>) {
    // BUG: Idk what will happen if their exists two writers with the same name for the same show
    const writers = await this.getShowWriters(showId).catch((error) =>
      this.logger.error(error),
    );

    if (writers && writers.length > 0) {
      // check and remove old writers from show studio list
      writers.forEach((writer) => {
        let deleteWriter = true;
        let index: number;
        data.forEach((scrapedWriter, i) => {
          if (scrapedWriter.name === writer.name) {
            deleteWriter = false;
            index = i;
          }
        });
        if (deleteWriter) {
          this.deleteShowWriter(writer.writerId, showId);
          writers.splice(index, 1);
        }
      });

      // Add new writers
      for (const scrapedWriter of data) {
        let createWriter = true;
        for (const writer of writers) {
          if (scrapedWriter.name === writer.name) createWriter = false;
        }
        if (createWriter) {
          const studio = await this.createWriter(scrapedWriter).then(
            (writer) =>
              this.createShowWriter({
                showId,
                writerId: writer.writerId,
              }),
            (error) => this.logger.error(error),
          );
        }
      }

      // Update old writers
      writers.forEach((writer) => {
        data.forEach((scrapedWriter) => {
          if (
            writer.image !== scrapedWriter.image &&
            writer.name === scrapedWriter.name
          ) {
            this.updateWriter(writer.writerId, {
              image: scrapedWriter.image,
            });
            return;
          }
        });
      });

      return;
    }

    data.forEach((scrapedWriter) => {
      this.createWriter(scrapedWriter)
        .then(
          (writer) =>
            this.createShowWriter({
              writerId: writer.writerId,
              showId,
            }),
          (error) => {
            this.getWriterByNameAndImage(scrapedWriter.name, scrapedWriter.image)
              .then((writer) =>
                this.createShowWriter({
                  writerId: writer.writerId,
                  showId,
                }),
              )
              .catch((error) => this.logger.error(error));
          },
        )
        .catch((error) => this.logger.error(error));
    });
  }
}
