import { Logger, Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';

@Module({
  imports: [],
  exports: [LanguageService],
  controllers: [LanguageController],
  providers: [LanguageService, Logger],
})
export class LanguageModule {}
