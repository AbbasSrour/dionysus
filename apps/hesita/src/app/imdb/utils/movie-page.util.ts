import { ShowPageUtil } from './show-page.util';
import * as cheerio from 'cheerio';
import { convertTimeInt } from './length.util';
import { DirectorInput } from '../../scrape/schemas/director.schema';
import { WriterInput } from '../../scrape/schemas/writer.schema';

export class MoviePageUtil extends ShowPageUtil {
  async getReleaseYear($: cheerio.CheerioAPI): Promise<number> {
    return parseInt(
      $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:first-child > a')
        .text(),
    );
  }

  async getLength($: cheerio.CheerioAPI): Promise<number> {
    return convertTimeInt(
      $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:nth-child(3)')
        .text(),
    );
  }

  async getPGRating($: cheerio.CheerioAPI): Promise<string> {
    return $('ul[data-testid="hero-title-block__metadata"]')
      .find('li:nth-child(2) > a')
      .text();
  }

  async getBudget($: cheerio.CheerioAPI): Promise<number> {
    return (
      parseInt(
        $('li[data-testid="title-boxoffice-budget"] > div > ul > li > span')
          .text()
          .replace('$', '')
          .replace(/,/g, ''),
      ) | 0
    );
  }

  async getRevenue($: cheerio.CheerioAPI): Promise<number> {
    return (
      parseInt(
        $(
          'li[data-testid="title-boxoffice-cumulativeworldwidegross"] > div > ul > li > span ',
        )
          .text()
          .replace('$', '')
          .replace(/,/g, ''),
      ) | 0
    );
  }

  async getDirectors($: cheerio.CheerioAPI): Promise<Array<DirectorInput>> {
    const directors = new Array<DirectorInput>();
    await $('li[data-testid="title-pc-principal-credit"]')
      .first()
      .find('div > ul > li ')
      .each((i, elem) => {
        directors[i] = { name: $(elem).find('a').text(), image: 'default.png' };
      });
    return directors;
  }

  async getWriters($: cheerio.CheerioAPI): Promise<Array<WriterInput>> {
    const writers = new Array<WriterInput>();
    $('li[data-testid="title-pc-principal-credit"]:nth-of-type(2)')
      .first()
      .find('div > ul > li > a')
      .each((i, elem) => {
        writers[i] = { name: $(elem).text(), image: 'default.png' };
      });
    return writers;
  }
}
