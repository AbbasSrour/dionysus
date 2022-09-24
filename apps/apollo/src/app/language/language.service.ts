import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Language, ShowLanguage } from '@prisma/client-apollo';
import {
  CreateLanguageDto,
  CreateShowLanguageDto,
  InsertLanguagesDto,
  UpdateLanguageDto,
} from './dto';

@Injectable()
export class LanguageService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

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

  async updateLanguage(languageId: number, data: UpdateLanguageDto): Promise<Language> {
    return this.client.language.update({ where: { languageId }, data });
  }

  async createShowLanguage(input: CreateShowLanguageDto): Promise<ShowLanguage> {
    return this.client.showLanguage.create({ data: input });
  }

  async getShowLanguages(showId: number): Promise<Array<Language>> {
    return this.client.language.findMany({
      where: {
        ShowLanguage: {
          some: {
            showId,
          },
        },
      },
    });
  }

  async deleteShowLanguage(showId: number, languageId): Promise<ShowLanguage> {
    return this.client.showLanguage.delete({
      where: {
        showId_languageId: {
          showId,
          languageId,
        },
      },
    });
  }

  async insertLanguages(showId: number, data: Array<InsertLanguagesDto>) {
    // BUG: Idk what will happen if their exists two languages with the same name for the same show
    const languages = await this.getShowLanguages(showId).catch((error) =>
      this.logger.error(error),
    );

    if (languages && languages.length > 0) {
      // check and remove old languages from show language list
      languages.forEach((language) => {
        let deleteLanguage = true;
        let index: number;
        data.forEach((scrapedLanguage, i) => {
          if (scrapedLanguage.name === language.name) {
            deleteLanguage = false;
            index = i;
          }
        });
        if (deleteLanguage) {
          this.deleteShowLanguage(language.languageId, showId);
          languages.splice(index, 1);
        }
      });

      // Add new languages
      for (const scrapedLanguage of data) {
        let createLanguage = true;
        for (const language of languages) {
          if (scrapedLanguage.name === language.name) createLanguage = false;
        }
        if (createLanguage) {
          await this.createLanguage(scrapedLanguage).then(
            (language) =>
              this.createShowLanguage({
                showId,
                languageId: language.languageId,
              }),
            (error) => this.logger.error(error),
          );
        }
      }

      return;
    }

    data.forEach((scrapedLanguage) => {
      this.createLanguage(scrapedLanguage)
        .then(
          (language) =>
            this.createShowLanguage({
              languageId: language.languageId,
              showId,
            }),
          (error) => {
            this.getLanguageByName(scrapedLanguage.name)
              .then((language) =>
                this.createShowLanguage({
                  languageId: language.languageId,
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
