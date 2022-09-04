import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { LanguageService } from './language.service';
import { Language, ShowLanguage } from '@prisma/client-apollo';
import { CreateLanguageDto, CreateShowLanguageDto } from './dto';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  async getLanguages(): Promise<Array<Language>> {
    try {
      const language = await this.languageService.getLanguagesService();
      if (!language || language.length === 0) throw new NotFoundException();
      return language;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createLanugageService(
    @Body() languageDto: CreateLanguageDto
  ): Promise<Language> {
    try {
      const language = this.languageService.createLanguageService(languageDto);
      return language;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getLanguageById(@Param() id: number): Promise<Language> {
    try {
      const language = this.languageService.getLanguageByIdService(id);
      if (!language) throw new NotFoundException();
      return language;
    } catch (error) {
      throw error;
    }
  }

  @Get('/name/:name')
  getLanguageByName(@Param('name') name: string): Promise<Language> {
    try {
      const language = this.languageService.getLanguageByNameService(name);
      if (!language) throw new NotFoundException();
      return language;
    } catch (error) {
      throw error;
    }
  }

  @Post('/show')
  async createShowLanguage(
    @Body() showLanguageDto: CreateShowLanguageDto
  ): Promise<ShowLanguage> {
    try {
      const language = await this.languageService.createShowLanguageService(
        showLanguageDto
      );
      return language;
    } catch (error) {
      throw error;
    }
  }
}
