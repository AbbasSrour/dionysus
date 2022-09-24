import * as cheerio from 'cheerio';

export class SeasonPageUtil {
  async getNumberOfSeasons($: cheerio.CheerioAPI): Promise<number> {
    return $('#bySeason').children().length;
  }

  async getNumberOfEpisodes($: cheerio.CheerioAPI): Promise<number> {
    return $(
      'div[itemtype="http://schema.org/TVSeason"] > div.list.detail.eplist',
    ).children().length;
  }

  async getEpisodePoster($: cheerio.CheerioAPI, episode: number) {
    return $(`div#episodes_content > div[itemtype="http://schema.org/TVSeason"]`)
      .find('div.list.detail.eplist')
      .find(`div:nth-of-type(${episode})`)
      .find('div.image > a > div > img')
      .attr('src');
  }

  async getEpisodeName($: cheerio.CheerioAPI, episode: number) {
    return $(`div#episodes_content > div[itemtype="http://schema.org/TVSeason"]`)
      .find('div.list.detail.eplist')
      .find(`div:nth-of-type(${episode})`)
      .find('div[itemtype="http://schema.org/TVEpisode"]')
      .find('strong > a')
      .text();
  }

  async getEpisodeReleaseDate($: cheerio.CheerioAPI, episode: number): Promise<string> {
    return $(`div#episodes_content > div[itemtype="http://schema.org/TVSeason"]`)
      .find('div.list.detail.eplist')
      .find(`div:nth-of-type(${episode})`)
      .find('div[itemtype="http://schema.org/TVEpisode"]')
      .find('div.airdate')
      .text()
      .replace(/^\s+|\s+$/g, '');
  }

  async getEpisodeRating($: cheerio.CheerioAPI, episode: number): Promise<number> {
    return parseInt(
      $(`div#episodes_content > div[itemtype="http://schema.org/TVSeason"]`)
        .find('div.list.detail.eplist')
        .find(`div:nth-of-type(${episode})`)
        .find('div[itemtype="http://schema.org/TVEpisode"]')
        .find('div.ipl-rating-widget > div.ipl-rating-star.small:first-of-type')
        .find('span.ipl-rating-star__rating')
        .text(),
    );
  }

  async getEpisodeVoteCount($: cheerio.CheerioAPI, episode: number): Promise<number> {
    return parseInt(
      $(`div#episodes_content > div[itemtype="http://schema.org/TVSeason"]`)
        .find('div.list.detail.eplist')
        .find(`div:nth-of-type(${episode})`)
        .find('div[itemtype="http://schema.org/TVEpisode"]')
        .find('div.ipl-rating-widget > div.ipl-rating-star.small:first-of-type')
        .find('span.ipl-rating-star__total-votes')
        .text()
        .replace(/([(,)])/g, ''),
    );
  }

  async getEpisodeSummery($: cheerio.CheerioAPI, episode: number) {
    return $(`div#episodes_content > div[itemtype="http://schema.org/TVSeason"]`)
      .find('div.list.detail.eplist')
      .find(`div:nth-of-type(${episode})`)
      .find('div[itemtype="http://schema.org/TVEpisode"]')
      .find('div[itemprop="description"]')
      .text()
      .replace(/^\s+|\s+$/g, '');
  }
}
