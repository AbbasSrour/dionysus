import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [LanguageService, PrismaService],
  controllers: [LanguageController],
  imports: [],
})
export class LanguageModule {}
