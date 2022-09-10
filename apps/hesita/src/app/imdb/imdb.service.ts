import { Injectable } from '@nestjs/common';
import got from 'got';
import * as cheerio from 'cheerio';
import * as Cheerio from 'cheerio';
import { WriterInput } from '../scrape/schemas/writer.schema';
import { StudioInput } from '../scrape/schemas/studio.schema';
import { LanguageInput } from '../scrape/schemas/language.schema';
import { convertTimeInt } from './utils/length.util';
import { ratingCount } from './utils/rating.util';
import { DirectorInput } from '../scrape/schemas/director.schema';
import { GenreInput } from '../scrape/schemas/genre.schema';

@Injectable()
export class ImdbService {
  async searchImdb(query: string): Promise<Array<string>> {
    const URL: string = 'https://imdb.com/find?q=' + query + '&ref_=nv_sr_sm';
    const res = await got(URL, {
      method: 'GET',
      followRedirect: true,
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0',
      },
    });
    const $ = cheerio.load(res.body);
    const td: any = [];
    $('.result_text').each(function (i: number, elem: cheerio.Element) {
      td[i] = $(elem).html();
    });
    const regex =
      /<a href="\/title\/([a-z0-9]{8,})\/\?ref_=fn_al_tt_[0-9]{1,}"(.*)/;
    const idRegex =
      /( <a href="\/title\/)|(\/\?ref_=fn_al_tt_[0-9]{1,}"(.*)) /g;
    const titleRegex =
      /(<a href="\/title\/([a-z0-9]{8,})\/\?ref_=fn_al_tt_[0-9]{1,}">)|(<\/a>)/g;
    const shows = new Array<string>();
    for (let i = 0; i < td.length; i++) {
      if (!regex.test(td[i])) {
        td.splice(i, 1);
        i--;
      } else {
        const show: string = td[i].replace(idRegex, '');
        shows.push(show);
      }
    }
    return shows;
  }

  async getShowPage(imdbId: string): Promise<cheerio.CheerioAPI> {
    const IMDB_LINK = `https://www.imdb.com/title/${imdbId}`;
    const response = await got.get(IMDB_LINK, {
      followRedirect: true,
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0',
      },
    });
    return cheerio.load(response.body);
  }

  async getSeasonPage(imdbId: string, season: number) {
    const res = await got(`https://www.imdb.com/title/${imdbId}/episodes`, {
      method: 'GET',
      followRedirect: true,
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0',
      },
      searchParams: {
        season,
      },
    });
    return cheerio.load(res.body);
  }

  async getNumberOfSeasons($: Cheerio.CheerioAPI) {}

  async getType($: cheerio.CheerioAPI): Promise<string> {
    let num = 0;
    await $('ul[data-testid="hero-title-block__metadata"]')
      .find('li')
      .each((i, elem) => {
        num++;
      });
    if (num === 4)
      return $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:nth-child(1)')
        .text();
    else return 'Movie';
  }

  async getName($: cheerio.CheerioAPI): Promise<string> {
    return $('h1[data-testid="hero-title-block__title"]').text();
  }

  async getPGRating($: cheerio.CheerioAPI): Promise<string> {
    return $('ul[data-testid="hero-title-block__metadata"]')
      .find('li:nth-child(2) > a')
      .text();
  }

  async getLength($: cheerio.CheerioAPI): Promise<number> {
    return convertTimeInt(
      $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:nth-child(3)')
        .text()
    );
  }

  async getReleaseYear($: cheerio.CheerioAPI): Promise<number> {
    return parseInt(
      $('ul[data-testid="hero-title-block__metadata"]')
        .find('li:first-child > a')
        .text()
    );
  }

  async getSummary($: cheerio.CheerioAPI): Promise<string> {
    return $('[data-testid="plot"]').find(':nth-child(3)').text();
  }

  async getBudget($: cheerio.CheerioAPI): Promise<number> {
    return (
      parseInt(
        $('li[data-testid="title-boxoffice-budget"] > div > ul > li > span')
          .text()
          .replace('$', '')
          .replace(/,/g, '')
      ) | 0
    );
  }

  async getRevenue($: cheerio.CheerioAPI): Promise<number> {
    return (
      parseInt(
        $(
          'li[data-testid="title-boxoffice-cumulativeworldwidegross"] > div > ul > li > span '
        )
          .text()
          .replace('$', '')
          .replace(/,/g, '')
      ) | 0
    );
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
        "div[data-testid='hero-rating-bar__aggregate-rating__score'] > span:first"
      ).text()
    );
  }

  async getVoteCount($: cheerio.CheerioAPI): Promise<number> {
    return ratingCount(
      $(
        'div[data-testid="hero-rating-bar__aggregate-rating"] > a > div > div > div'
      )
        .find('div:nth-child(3)')
        .html()
    );
  }

  async getActors(
    $: cheerio.CheerioAPI
  ): Promise<Array<{ name: string; image: string; role: string }>> {
    const actors = new Array<{ name: string; image: string; role: string }>();
    $(
      'div[data-testid="shoveler"] > div[data-testid="shoveler-items-container"] > div[data-testid="title-cast-item"]'
    ).each((i, elem) => {
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
      const name = $(elem).find('div > a').text();
      const role = $(elem)
        .find(
          'div > ul > li > a[data-testid="cast-item-characters-link"] > span'
        )
        .text();
      const actor = { name, image, role };
      actors.push(actor);
    });
    return actors;
  }

  async getDirectors($: cheerio.CheerioAPI): Promise<Array<DirectorInput>> {
    const directors = new Array<DirectorInput>();
    // await $('li[data-testid="title-pc-principal-credit"]')
    //   .first()
    //   .find("div > ul > li ")
    //   .each((i, elem) => {
    //     directors[i] = $(elem).find("a").attr("href");
    //   });
    await $('li[data-testid="title-pc-principal-credit"]')
      .first()
      .find('div > ul > li ')
      .each((i, elem) => {
        directors[i] = { name: $(elem).find('a').text(), image: 'default.png' };
      });
    return directors;
  }

  async getGenres($: cheerio.CheerioAPI): Promise<Array<GenreInput>> {
    const genres = new Array<GenreInput>();
    $('div[data-testid="genres"]:nth-child(1) > div')
      .find('a')
      .each((i, elem) => {
        const genre: GenreInput = {
          name: $(elem).text(),
        };
        genres.push(genre);
      });
    return genres;
  }

  async getLanguages($: cheerio.CheerioAPI): Promise<Array<LanguageInput>> {
    const languages = new Array<LanguageInput>();
    $('li[data-testid="title-details-languages"] > div > ul')
      .find('li')
      .each((i, elem) => {
        const language: LanguageInput = {
          name: $(elem).find('a').text(),
        };
        languages.push(language);
      });
    return languages;
  }

  async getStudios($: cheerio.CheerioAPI) {
    const StudioArray = new Array<StudioInput>();
    let name: string;
    const image = '';
    $('li[data-testid="title-details-companies"] > div > ul > li').each(
      (i, elem) => {
        try {
          name = $(elem).find('a').text();
        } catch (error) {
          name = '';
        }
        const studio: StudioInput = { name, image };
        StudioArray.push(studio);
      }
    );
    return StudioArray;
  }

  async getWriters($: cheerio.CheerioAPI): Promise<Array<WriterInput>> {
    const writers = new Array<WriterInput>();
    // $('li[data-testid="title-pc-principal-credit"]:nth-of-type(1)')
    //   .find("div > ul > li")
    //   .each((i, elem) => {
    //     writers[i] = $(elem).find("a").attr("href");
    //   });
    $('li[data-testid="title-pc-principal-credit"]:nth-of-type(2)')
      .first()
      .find('div > ul > li > a')
      .each((i, elem) => {
        writers[i] = { name: $(elem).text(), image: 'default.png' };
      });
    return writers;
  }
}
