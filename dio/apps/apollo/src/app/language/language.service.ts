import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Language, ShowLanguage } from '@prisma/client-apollo';
import { CreateLanguageDto, CreateShowLanguageDto } from './dto';

@Injectable()
export class LanguageService {
  constructor(private readonly client: PrismaService) {}

  async getLanguagesService(): Promise<Array<Language>> {
    return this.client.language.findMany();
  }

  async getLanguageByIdService(id: number): Promise<Language> {
    return this.client.language.findUniqueOrThrow({
      where: { languageId: id },
    });
  }

  async getLanguageByNameService(name: string): Promise<Language> {
    return this.client.language.findUniqueOrThrow({ where: { name } });
  }

  async createLanguageService(input: CreateLanguageDto): Promise<Language> {
    return this.client.language.create({ data: input });
  }

  async createShowLanguageService(
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
