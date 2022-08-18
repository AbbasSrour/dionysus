import got from "got";

const cheerio = require("cheerio");

export const SearchImdb = async (query: string): Promise<Array<string>> => {
  const URL: string = "https://imdb.com/find?q=" + query + "&ref_=nv_sr_sm";
  const res = await got(URL, {
    method: "GET",
    followRedirect: true,
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
    },
  });
  const $ = cheerio.load(res.body);
  const td: any = [];
  $(".result_text").each(function (i: number, elem: Element) {
    td[i] = $(elem).html();
  });
  const regex =
    /<a href="\/title\/([a-z0-9]{8,})\/\?ref_=fn_al_tt_[0-9]{1,}"(.*)/;
  const idRegex = /( <a href="\/title\/)|(\/\?ref_=fn_al_tt_[0-9]{1,}"(.*)) /g;
  const titleRegex =
    /(<a href="\/title\/([a-z0-9]{8,})\/\?ref_=fn_al_tt_[0-9]{1,}">)|(<\/a>)/g;
  const shows = new Array<string>();
  for (let i = 0; i < td.length; i++) {
    if (!regex.test(td[i])) {
      td.splice(i, 1);
      i--;
    } else {
      const show: string = td[i].replace(idRegex, "");
      shows.push(show);
    }
  }
  return shows;
};

export const getImdbShowPage = async (
  imdbId: string
): Promise<cheerio.Root> => {
  const IMDB_LINK = "https://www.imdb.com/title/" + imdbId;
  const response = await got.get(IMDB_LINK, {
    followRedirect: true,
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
    },
  });
  return cheerio.load(response.body);
};
