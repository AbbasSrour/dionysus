import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { RmqModule } from '@app/common';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

@Module({
  imports: [
    RmqModule.register({
      name: 'HESITA',
      queue: 'hesita',
      url: config.getOrThrow('rmqUrl'),
    }),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
