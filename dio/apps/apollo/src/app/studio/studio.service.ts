import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateStudioDto } from './dto';
import { CreateShowStudioDto } from './dto/create-show-studio.dto';
import { ShowStudio, Studio } from '@prisma/client-apollo';
import { UpdateStudioDto } from './dto/update-studio.dto';

@Injectable()
export class StudioService {
  constructor(private readonly client: PrismaService) {}

  async getStudios(): Promise<Array<Studio>> {
    return this.client.studio.findMany();
  }

  async createStudio(input: CreateStudioDto): Promise<Studio> {
    return this.client.studio.create({ data: input });
  }

  async getStudioById(id: number): Promise<Studio> {
    return this.client.studio.findUniqueOrThrow({ where: { studioId: id } });
  }

  async getStudioByName(name: string): Promise<Studio> {
    return this.client.studio.findUniqueOrThrow({ where: { name } });
  }

  async createShowStudio(data: CreateShowStudioDto): Promise<ShowStudio> {
    return this.client.showStudio.create({ data });
  }

  async updateStudio(studioId: number, data: UpdateStudioDto) {
    return this.client.studio.update({
      where: { studioId },
      data,
    });
  }
}
