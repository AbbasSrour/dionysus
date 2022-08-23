import {Body, Controller, Get} from '@nestjs/common';
import {ShowService} from './show.service';
import {ShowDto} from './dto';
import {AppLogger} from '../common/logger';

@Controller('show')
export class ShowController {
  constructor(private showService: ShowService, private logger: AppLogger) {
  }

  @Get('/:id')
  getShow(@Body() dto: ShowDto) {
    this.logger.log('hello world');
    return this.showService.getShow();
  }
}
