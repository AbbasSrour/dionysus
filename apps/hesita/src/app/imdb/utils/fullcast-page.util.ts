import * as cheerio from 'cheerio';
import { DirectorType, WriterType } from '../../scrape/type/insert.types';

export class FullCastPageUtil {
  async getDirectors($: cheerio.CheerioAPI) {
    const directors = new Array<DirectorType>();
    await $('div#fullcredits_content > table:first-of-type > tbody > tr').each(
      (i, elem) => {
        directors[i] = {
          name: $(elem).find('td:first-of-type > a').text(),
          image: 'default.png',
        };
      },
    );
    return directors;
  }

  async getWriters($: cheerio.CheerioAPI) {
    const writers = new Array<WriterType>();
    await $('div#fullcredits_content > table:nth-of-type(2) > tbody > tr').each(
      (i, elem) => {
        writers[i] = {
          name: $(elem).find('td:first-of-type > a').text(),
          image: 'default.png',
        };
      },
    );
    return writers;
  }
}
