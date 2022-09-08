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
    const language = await this.languageService.getLanguages();
    if (!language || language.length === 0) throw new NotFoundException();
    return language;
  }

  @Post()
  async createLanguageService(
    @Body() languageDto: CreateLanguageDto
  ): Promise<Language> {
    return this.languageService.createLanguage(languageDto);
  }

  @Get('/:id')
  async getLanguageById(@Param() id: number): Promise<Language> {
    const language = this.languageService.getLanguageById(id);
    if (!language) throw new NotFoundException();
    return language;
  }

  @Get('/name/:name')
  getLanguageByName(@Param('name') name: string): Promise<Language> {
    const language = this.languageService.getLanguageByName(name);
    if (!language) throw new NotFoundException();
    return language;
  }

  @Post('/show')
  async createShowLanguage(
    @Body() showLanguageDto: CreateShowLanguageDto
  ): Promise<ShowLanguage> {
    return await this.languageService.createShowLanguage(showLanguageDto);
  }
}
