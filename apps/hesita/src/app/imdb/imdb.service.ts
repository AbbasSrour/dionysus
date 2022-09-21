import { Injectable } from '@nestjs/common';
import got from 'got';
import * as cheerio from 'cheerio';
import { ShowPageUtil } from './utils/show-page.util';
import { MoviePageUtil } from './utils/movie-page.util';
import { SeriesPageUtil } from './utils/series-page.util';
import { FullCastPageUtil } from './utils/fullcast-page.util';
import { SeasonPageUtil } from './utils/season-page.util';

@Injectable()
export class ImdbService {
  public ShowPage = new ShowPageUtil();
  public MoviePage = new MoviePageUtil();
  public SeriesPage = new SeriesPageUtil();
  public FullCastPage = new FullCastPageUtil();
  public SeasonPage = new SeasonPageUtil();

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

  async getSeasonPage(
    imdbId: string,
    season: number,
  ): Promise<cheerio.CheerioAPI> {
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

  async getFullCastPage(imdbId: string): Promise<cheerio.CheerioAPI> {
    const res = await got(`https://www.imdb.com/title/${imdbId}/fullcredits`, {
      method: 'GET',
      followRedirect: true,
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0',
      },
    });
    return cheerio.load(res.body);
  }

  async getType($: cheerio.CheerioAPI): Promise<string> {
    const count: number = $(
      'ul[data-testid="hero-title-block__metadata"]',
    ).children().length;
    if (count === 4)
      return $(
        'ul[data-testid="hero-title-block__metadata"] :nth-child(4)',
      ).text();
    else return 'Movie';
  }
}
