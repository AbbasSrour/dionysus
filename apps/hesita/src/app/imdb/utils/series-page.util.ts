import { ShowPageUtil } from './show-page.util';
import * as cheerio from 'cheerio';
import { convertTimeInt } from './length.util';

export class SeriesPageUtil extends ShowPageUtil {
  async getPGRating($: cheerio.CheerioAPI): Promise<string> {
    return $('ul[data-testid="hero-title-block__metadata"]')
      .find('li:nth-child(2) > a')
      .text();
  }

  //todo:
  // this is avg episode length for tv series and the
  // the sum of the length of all episodes in a tv mini series
  async getLength($: cheerio.CheerioAPI): Promise<number> {
    return convertTimeInt(
      $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:nth-child(3)')
        .text(),
    );
  }

  //todo:
  // fix this format is 20xx-20xx || 20xx- for still running series
  // and the 20xx normal form for mini series
  async getReleaseYear($: cheerio.CheerioAPI): Promise<number> {
    return parseInt(
      $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:first-child > a')
        .text(),
    );
  }
}
