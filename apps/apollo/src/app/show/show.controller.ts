import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto';
import { Image, Show } from '@prisma/client-apollo';

@Controller('show')
export class ShowController {
  constructor(private readonly ShowService: ShowService) {}

  @Get()
  async getAllShows(): Promise<Array<Show>> {
    const shows = await this.ShowService.getAllShows();
    if (!shows || shows.length === 0) throw new NotFoundException();
    return shows;
  }

  @Post()
  async createShow(@Body() body: CreateShowDto): Promise<Show> {
    return await this.ShowService.createShowService(body);
  }

  @Get('/:id')
  async getShow(@Param('id') id: number): Promise<Show> {
    const show = await this.ShowService.getShowByIdService(id);
    if (!show) throw new NotFoundException();
    return show;
  }

  //TODO needs more work
  @Get('/popular')
  async getPopularShows(): Promise<Array<Show>> {
    const shows = await this.ShowService.getPopularShowService();
    if (!shows || shows.length === 0) throw new NotFoundException();
    return shows;
  }

  //TODO needs more work
  @Get('/:id/images')
  async getImages(
    @Param('id', ParseIntPipe) id: number,
    @Query('type') type: string,
    @Query('isDefault') isDefault: boolean
  ): Promise<Array<Image>> {
    const images = await this.ShowService.getImages(id, type, isDefault);
    if (!images || images.length === 0) throw new NotFoundException();
    return images;
  }

  @Get('/name/:name/release-year/:releaseYear')
  async getShowByNameReleaseYear(
    @Param('name') name: string,
    @Param('releaseYear') releaseYear: number
  ): Promise<Show> {
    const show = await this.ShowService.getShowByNameReleaseYearService(
      name,
      releaseYear
    );
    if (!show) throw new NotFoundException();
    return show;
  }
}
