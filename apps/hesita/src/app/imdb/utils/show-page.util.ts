import * as cheerio from 'cheerio';
import { convertRatingCount } from './rating.util';
import { GenreType, LanguageType, StudioType } from '../../scrape/type/insert.types';

export class ShowPageUtil {
  async getName($: cheerio.CheerioAPI): Promise<string> {
    return $('h1[data-testid="hero-title-block__title"]').text();
  }

  async getSummary($: cheerio.CheerioAPI): Promise<string> {
    return $('[data-testid="plot"]').find(':nth-child(3)').text();
  }

  async getPoster($: cheerio.CheerioAPI): Promise<string> {
    return $('div[data-testid="hero-media__poster"] > div')
      .find('img')
      .attr('srcset')
      .split('w,')[2]
      .replace(/\s\d{3}[w]/g, '')
      .replace(/^\s/, '');
  }

  async getRating($: cheerio.CheerioAPI): Promise<number> {
    return parseFloat(
      $(
        "div[data-testid='hero-rating-bar__aggregate-rating__score'] > span:first",
      ).text(),
    );
  }

  async getVoteCount($: cheerio.CheerioAPI): Promise<number> {
    return convertRatingCount(
      $('div[data-testid="hero-rating-bar__aggregate-rating"] > a > div > div > div')
        .find('div:nth-child(3)')
        .html(),
    );
  }

  async getActors(
    $: cheerio.CheerioAPI,
  ): Promise<Array<{ name: string; image: string; role: string }>> {
    const actors = new Array<{ name: string; image: string; role: string }>();
    $('div[data-testid="shoveler"]')
      .find('div[data-testid="shoveler-items-container"]')
      .find('div[data-testid="title-cast-item"]')
      .each((i, elem) => {
        let image: string;
        try {
          image = $(elem)
            .find('div > div > div > img ')
            .attr('srcset')
            .split('w,')[2]
            .replace(/\s\d{3}[w]/g, '')
            .replace(/^\s/, '');
        } catch (e) {
          image = '';
        }
        const name = $(elem).find('div > a:first-of-type').text();
        const role = $(elem)
          .find('div > ul > li > a[data-testid="cast-item-characters-link"] > span')
          .text();
        const actor = { name, image, role };
        actors.push(actor);
      });
    return actors;
  }

  async getGenres($: cheerio.CheerioAPI): Promise<Array<GenreType>> {
    const genres = new Array<GenreType>();
    $('div[data-testid="genres"]:nth-child(1) > div')
      .find('a')
      .each((i, elem) => {
        const genre: GenreType = {
          name: $(elem).text(),
        };
        genres.push(genre);
      });
    return genres;
  }

  async getLanguages($: cheerio.CheerioAPI): Promise<Array<LanguageType>> {
    const languages = new Array<LanguageType>();
    $('li[data-testid="title-details-languages"] > div > ul')
      .find('li')
      .each((i, elem) => {
        const language: LanguageType = {
          name: $(elem).find('a').text(),
        };
        languages.push(language);
      });
    return languages;
  }

  async getStudios($: cheerio.CheerioAPI) {
    const StudioArray = new Array<StudioType>();
    let name: string;
    const image = '';
    $('li[data-testid="title-details-companies"] > div > ul > li').each((i, elem) => {
      try {
        name = $(elem).find('a').text();
      } catch (error) {
        name = '';
      }
      const studio: StudioType = { name, image };
      StudioArray.push(studio);
    });
    return StudioArray;
  }
}
