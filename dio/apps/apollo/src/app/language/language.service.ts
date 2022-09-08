import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Language, ShowLanguage } from '@prisma/client-apollo';
import {
  CreateLanguageDto,
  CreateShowLanguageDto,
  UpdateLanguageDto,
} from './dto';

@Injectable()
export class LanguageService {
  constructor(private readonly client: PrismaService) {}

  async getLanguages(): Promise<Array<Language>> {
    return this.client.language.findMany();
  }

  async getLanguageById(languageId: number): Promise<Language> {
    return this.client.language.findUniqueOrThrow({
      where: { languageId },
    });
  }

  async getLanguageByName(name: string): Promise<Language> {
    return this.client.language.findUniqueOrThrow({ where: { name } });
  }

  async createLanguage(input: CreateLanguageDto): Promise<Language> {
    return this.client.language.create({ data: input });
  }

  async updateLanguage(
    languageId: number,
    data: UpdateLanguageDto
  ): Promise<Language> {
    return this.client.language.update({ where: { languageId }, data });
  }

  async createShowLanguage(
    input: CreateShowLanguageDto
  ): Promise<ShowLanguage> {
    return this.client.showLanguage.create({ data: input });
  }

  async getShowLanguage(
    languageId: number,
    showId: number
  ): Promise<ShowLanguage> {
    return this.client.showLanguage.findUniqueOrThrow({
      where: { showId_languageId: { languageId, showId } },
    });
  }
}
