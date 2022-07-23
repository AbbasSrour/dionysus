import cheerio from "cheerio";
import crypto from "crypto";
import got from "got";
import { MovieSchemaInput } from "../schemas/movie.schema";

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
  $(".result_text").each(function (i, elem) {
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
  return await JSON.parse(aes_decrypt(resJson, SECRET, IV));
};

const ratingCount = (ratingString: string): number => {
  let rating: number = 0;
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

export const ImdbMovieData = async (imdbId: string) => {
  const IMDB_LINK = "https://www.imdb.com/title/" + imdbId;
  const response = await got.get(IMDB_LINK, {
    followRedirect: true,
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
    },
  });
  const $ = await cheerio.load(response.body);

  const directors = new Array<string | undefined>();
  $('li[data-testid="title-pc-principal-credit"]')
    .first()
    .find("div > ul > li ")
    .each((i, elem) => {
      directors[i] = $(elem).find("a").attr("href");
    });

  const writers = new Array<string | undefined>();
  $('li[data-testid="title-pc-principal-credit"]:nth-of-type(1)')
    .find("div > ul > li")
    .each((i, elem) => {
      writers[i] = $(elem).find("a").attr("href");
    });

  type actorSchema = {
    role?: string;
    image?: string;
    name?: string;
  };
  const actors = new Array<Object>();
  $(
    'div[data-testid="shoveler"] > div[data-testid="shoveler-items-container"] > div[data-testid="title-cast-item"]'
  ).each((i, elem) => {
    let actor: actorSchema = {};
    try {
      // @ts-ignore
      actor.image = $(elem)
        .find("div > div > div > img ")
        .attr("srcset")
        .split("w,")[2]
        .replace(/\s\d{3}[w]/g, "")
        .replace(/^\s/, "");
    } catch (e) {
      actor.image = "";
    }
    actor.name = $(elem).find("div > a").text();
    actor.role = $(elem)
      .find('div > ul > li > a[data-testid="cast-item-characters-link"] > span')
      .text();
    actors.push(actor);
  });

  type ProductionCompanySchema = {
    name?: string;
    image?: string;
  };
  const ProductionCompaniesArray = new Array<object>();
  $('li[data-testid="title-details-companies"] > div > ul > li').each(
    (i, elem) => {
      let productionCompany: ProductionCompanySchema = {};
      try {
        productionCompany.name = $(elem).find("a").text();
      } catch (e) {
        console.error(e);
        productionCompany.name = "";
      }
      ProductionCompaniesArray.push(productionCompany);
    }
  );

  type imdbRatingSchema = {
    rating?: number;
    count?: number;
  };
  const imdbRating: imdbRatingSchema = {};
  imdbRating.rating = parseFloat(
    $(
      "div[data-testid='hero-rating-bar__aggregate-rating__score'] > span:first"
    ).text()
  );

  // @ts-ignore
  imdbRating.count = ratingCount(
    // @ts-ignore
    $(
      'div[data-testid="hero-rating-bar__aggregate-rating"] > a > div > div > div'
    )
      .find("div:nth-child(3)")
      .html()
  );

  console.log(imdbRating);

  const name = $('h1[data-testid="hero-title-block__title"]').text();
  const releaseYear = parseInt(
    $('ul[data-testid="hero-title-block__metadata"]')
      .find("li:first-child > a")
      .text()
  );
  const pgRating = $('ul[data-testid="hero-title-block__metadata"]')
    .find("li:nth-child(2) > a")
    .text();
  const movieLength = $('ul[data-testid="hero-title-block__metadata"]')
    .find("li:nth-child(3)")
    .text();
  const summary = $('[data-testid="plot"]').find(":nth-child(3)").text();
  const ogLanguage = $('li[data-testid="title-details-languages"] > div > ul')
    .find(":nth-child(1) > a")
    .text();
  let wallpaper: string;
  try {
    // @ts-ignore
    wallpaper = $('div[data-testid="hero-media__poster"] > div')
      .find("img")
      .attr("srcset")
      .split("w,")[2]
      .replace(/\s\d{3}[w]/g, "")
      .replace(/^\s/, "");
  } catch (e) {
    wallpaper = "";
  }
  const budget = $(
    'li[data-testid="title-boxoffice-budget"] > div > ul > li > span'
  ).text();
  const revenue = $(
    'li[data-testid="title-boxoffice-cumulativeworldwidegross"] > div > ul > li > span '
  ).text();
  const trailer = "none";

  let data: MovieSchemaInput = {
    name: name,
    imdbId: imdbId,
    releaseYear: releaseYear,
    pgRating: pgRating,
    movieLength: movieLength,
    summary: summary,
    ogLanguage: ogLanguage,
    wallpaper: wallpaper,
    budget: budget,
    revenue: revenue,
    trailer: trailer,
  };

  return data;
};
