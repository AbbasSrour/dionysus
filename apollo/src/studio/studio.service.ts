import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateStudioDto } from './dto';
import { CreateShowStudioDto } from './dto/create-show-studio.dto';
import { ShowStudio, Studio } from '../../prisma/client';

@Injectable()
export class StudioService {
  constructor(private readonly client: PrismaService) {}

  async getStudios(): Promise<Array<Studio>> {
    return this.client.studio.findMany();
  }

  async createStudioService(input: CreateStudioDto): Promise<Studio> {
    return this.client.studio.create({ data: input });
  }

  async getStudioByIdService(id: number): Promise<Studio> {
    return this.client.studio.findUniqueOrThrow({ where: { studioId: id } });
  }

  async getStudioByNameService(name: string): Promise<Studio> {
    return this.client.studio.findUniqueOrThrow({ where: { name } });
  }

  async createShowStudioService(
    input: CreateShowStudioDto,
  ): Promise<ShowStudio> {
    return this.client.showStudio.create({ data: input });
  }
}
