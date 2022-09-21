import { Logger, Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [LanguageController],
  providers: [LanguageService, Logger],
})
export class LanguageModule {}
