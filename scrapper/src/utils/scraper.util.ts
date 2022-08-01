import crypto from "crypto";
import got from "got";
import { MovieInput } from "../schemas/movie.schema";
import log from "./logger.util";
import { DirectorInput } from "../schemas/director.schema";
import { ActorInput } from "../schemas/actor.schema";
import { ProductionCompanyInput } from "../schemas/production-company.schema";
import { WriterInput } from "../schemas/writer.schema";
import { ImdbInput } from "../schemas/imdb.schema";
import { LanguageInput } from "../schemas/language.schema";
import { GenreInput } from "../schemas/genre.schema";

const cheerio = require("cheerio");

const aes_encrypt = (data: string, key: String, iv: String): string => {
  const keyBinary = Buffer.from(key);
  const ivBinary = Buffer.from(iv);
  const cipher = crypto.createCipheriv("AES-256-CBC", keyBinary, ivBinary);
  cipher.setAutoPadding(true);
  const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
  return encryptedData.toString("base64");
};

const aes_decrypt = (encrypted: string, key: String, iv: String): string => {
  const data = Buffer.from(encrypted, "base64");
  const keyBinary = Buffer.from(key);
  const ivBinary = Buffer.from(iv);
  const decipher = crypto.createDecipheriv("AES-256-CBC", keyBinary, ivBinary);
  decipher.setAutoPadding(true);
  const decryptedData = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ]);
  return decryptedData.toString("utf8");
};

export const map_shows = async (query: string): Promise<Array<string>> => {
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
  const shows = [];
  for (let i = 0; i < td.length; i++) {
    if (!regex.test(td[i])) {
      td.splice(i, 1);
      i--;
    } else {
      const show = td[i].replace(idRegex, "");
      shows.push(show);
    }
  }
  return shows;
};

export const content_id = async (show: any): Promise<string | any> => {
  try {
    const CONTENT_ID_REGEX = /streaming\.php\?id=([^&?/#]+)/g;
    const CONTENT_ID_REGEX2 = /streaming\.php\?id=/g;
    const GDRIVE_PLAYER_ENDPOINT =
      "https://database.gdriveplayer.us/player.php";
    const res = await got(GDRIVE_PLAYER_ENDPOINT, {
      method: "GET",
      searchParams: {
        imdb: show,
      },
    });
    const $ = await cheerio.load(res.body);
    const line = await $.html().match(CONTENT_ID_REGEX);
    if (!line) return "No Server Id Found";

    const id = await line![0].replace(CONTENT_ID_REGEX2, "");
    return id;
  } catch (e) {
    return e;
  }
};

export const content = async (content_id: string) => {
  const ENCRYPT_AJAX_ENDPOINT = "https://membed.net/encrypt-ajax.php";
  const SECRET = "25742532592138496744665879883281";
  const IV = "9225679083961858";

  const res = await got(ENCRYPT_AJAX_ENDPOINT, {
    method: "GET",
    headers: { "x-requested-with": "XMLHttpRequest" },
    searchParams: {
      id: aes_encrypt(content_id, SECRET, IV),
    },
  });
  const resJson = JSON.parse(res.body)["data"];
  return {
    name: "membed",
    url: ENCRYPT_AJAX_ENDPOINT,
    movieUrl: await JSON.parse(aes_decrypt(resJson, SECRET, IV)).linkiframe,
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ratingCount = (ratingString: string): number => {
  let rating = 0;
  let aux = 1;
  let multiplier = "t";
  let float = false;
  for (let i = 0; i < ratingString.length; i++) {
    let x = ratingString.charAt(ratingString.length - (i + 1));
    if (x === "M" || x === "K") {
      multiplier = x;
      continue;
    } else if (x !== "M" && x !== "K" && x !== "." && !float) {
      rating += parseInt(x) * aux;
    } else if (x === ".") {
      float = true;
      continue;
    } else if (float && x !== "M" && x !== "K") {
      rating += parseInt(x) * aux;
    }
    aux *= 10;
  }
  if (multiplier === "M" && float) rating *= 100000;
  else if (multiplier === "M" && !float) rating *= 1000000;
  else if (multiplier === "K" && float) rating *= 100;
  else if (multiplier === "K" && !float) rating *= 1000;

  return rating;
};

const convertTimeInt = (timeString: string): number => {
  let len = 0;
  let m = false;
  let h = false;
  let minMulti = 1;
  let hourMulti = 60;
  for (let i = 0; i < timeString.length; i++) {
    let x = timeString.charAt(timeString.length - i - 1);
    if (x === " ") continue;
    if (x === "m") {
      m = true;
      h = false;
      continue;
    }
    if (x === "h") {
      m = false;
      h = true;
      continue;
    }
    if (m) {
      len += parseInt(x) * minMulti;
      minMulti *= 10;
    } else if (h) {
      len += parseInt(x) * hourMulti;
      hourMulti *= 10;
    }
  }
  return len;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getImdbPage = async (imdbId: string): Promise<cheerio.Root> => {
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

export const getMovieData = async ($: cheerio.Root) => {
  const hero = await $('ul[data-testid="hero-title-block__metadata"]');

  const name = await $('h1[data-testid="hero-title-block__title"]').text();
  const releaseYear = parseInt(await hero.find("li:first-child > a").text());
  const pgRating = await hero.find("li:nth-child(2) > a").text();
  const movieLength = convertTimeInt(await hero.find("li:nth-child(3)").text());
  const summary = await $('[data-testid="plot"]').find(":nth-child(3)").text();
  let poster: string;
  try {
    // @ts-ignore
    poster = await $('div[data-testid="hero-media__poster"] > div')
      .find("img")
      .attr("srcset")
      .split("w,")[2]
      .replace(/\s\d{3}[w]/g, "")
      .replace(/^\s/, "");
  } catch (e) {
    log.error(e);
    poster = "";
  }
  const budget =
    parseInt(
      $('li[data-testid="title-boxoffice-budget"] > div > ul > li > span')
        .text()
        .replace("$", "")
        .replace(/,/g, "")
    ) | 0;
  const revenue =
    parseInt(
      $(
        'li[data-testid="title-boxoffice-cumulativeworldwidegross"] > div > ul > li > span '
      )
        .text()
        .replace("$", "")
        .replace(/,/g, "")
    ) | 0;
  const trailer = "none";
  const cover = "none";

  let data: MovieInput = {
    name,
    releaseYear,
    poster,
    cover,
    summary,
    trailer,
    pgRating,
    movieLength,
    budget,
    revenue,
  };
  return data;
};

export const getDirectors = async (
  $: cheerio.Root
): Promise<Array<DirectorInput>> => {
  const directors = new Array<DirectorInput>();
  // await $('li[data-testid="title-pc-principal-credit"]')
  //   .first()
  //   .find("div > ul > li ")
  //   .each((i, elem) => {
  //     directors[i] = $(elem).find("a").attr("href");
  //   });
  await $('li[data-testid="title-pc-principal-credit"]')
    .first()
    .find("div > ul > li ")
    .each((i, elem) => {
      directors[i] = { name: $(elem).find("a").text(), image: "" };
    });
  return directors;
};

export const getActors = async ($: cheerio.Root) => {
  const actors = new Array<ActorInput>();
  $(
    'div[data-testid="shoveler"] > div[data-testid="shoveler-items-container"] > div[data-testid="title-cast-item"]'
  ).each((i, elem) => {
    let image: string;
    try {
      // @ts-ignore
      image = $(elem)
        .find("div > div > div > img ")
        .attr("srcset")
        .split("w,")[2]
        .replace(/\s\d{3}[w]/g, "")
        .replace(/^\s/, "");
    } catch (e) {
      image = "";
    }
    const name = $(elem).find("div > a").text();
    const role = $(elem)
      .find('div > ul > li > a[data-testid="cast-item-characters-link"] > span')
      .text();
    let actor: ActorInput = { name, image, role };
    actors.push(actor);
  });
  return actors;
};

export const getProductionCompanies = async ($: cheerio.Root) => {
  const ProductionCompaniesArray = new Array<ProductionCompanyInput>();
  let name: string;
  let image = "";
  $('li[data-testid="title-details-companies"] > div > ul > li').each(
    (i, elem) => {
      try {
        name = $(elem).find("a").text();
      } catch (e) {
        name = "";
      }
      let productionCompany: ProductionCompanyInput = { name, image };
      ProductionCompaniesArray.push(productionCompany);
    }
  );
  return ProductionCompaniesArray;
};

export const getWriters = async ($: cheerio.Root) => {
  const writers = new Array<WriterInput>();
  // $('li[data-testid="title-pc-principal-credit"]:nth-of-type(1)')
  //   .find("div > ul > li")
  //   .each((i, elem) => {
  //     writers[i] = $(elem).find("a").attr("href");
  //   });
  $('li[data-testid="title-pc-principal-credit"]:nth-of-type(2)')
    .first()
    .find("div > ul > li > a")
    .each((i, elem) => {
      writers[i] = { name: $(elem).text(), image: "" };
    });
  return writers;
};

export const getImdbData = async ($: cheerio.Root, imdbId: string) => {
  const rating = parseFloat(
    $(
      "div[data-testid='hero-rating-bar__aggregate-rating__score'] > span:first"
    ).text()
  );

  // @ts-ignore
  const voteCount = ratingCount(
    // @ts-ignore
    $(
      'div[data-testid="hero-rating-bar__aggregate-rating"] > a > div > div > div'
    )
      .find("div:nth-child(3)")
      .html()
  );
  const imdbRating: ImdbInput = { imdbId, rating, voteCount };
  return imdbRating;
};

export const getLanguages = async ($: cheerio.Root) => {
  const languages = new Array<LanguageInput>();
  $('li[data-testid="title-details-languages"] > div > ul')
    .find("li")
    .each((i, elem) => {
      let language: LanguageInput = {
        name: $(elem).find("a").text(),
      };
      languages.push(language);
    });
  return languages;
};

export const getGenres = async ($: cheerio.Root) => {
  const genres = new Array<GenreInput>();
  $('div[data-testid="genres"]:nth-child(1) > div')
    .find("a")
    .each((i, elem) => {
      let genre: GenreInput = {
        name: $(elem).text(),
      };
      genres.push(genre);
    });
  return genres;
};
