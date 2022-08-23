import {Module} from '@nestjs/common';
import {ShowService} from './show.service';
import {ShowController} from './show.controller';
import {AppLogger} from '../common/logger';

@Module({
  imports: [],
  providers: [ShowService, AppLogger],
  controllers: [ShowController],
})
export class ShowModule {
}
