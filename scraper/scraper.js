const cheerio = require("cheerio");
const crypto = require("crypto");
const got = require("got");
const cryptoJS = require("crypto-js");

const DEFAULT_MEDIA_REFERER = "https://membed.net";

const SECRET = "25742532592138496744665879883281";
const SECRETBINARY = Buffer.from(SECRET);
const IV = "9225679083961858";
const IVBINARY = Buffer.from(IV);

const aes_encrypt = (data, key, iv) => {
  const cipher = crypto.createCipheriv("AES-256-CBC", key, iv);
  cipher.setAutoPadding(true);
  const encrypted = cipher.update(data);
  const encryptedData = cipher.final("base64");
  return encryptedData;
};

const aes_decrypt = (encrypted, key, iv) => {
  const data = Buffer.from(encrypted, "base64");
  const decipher = crypto.createDecipheriv("AES-256-CBC", key, iv);
  decipher.setAutoPadding(true);
  const decryptedData = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ]);
  return decryptedData.toString("utf8");
};

const map_shows = async (query) => {
  URL = "https://imdb.com/find?q=" + query + "&ref_=nv_sr_sm";

  const res = await got(URL, {
    method: "GET",
    followRedirect: true,
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
    },
  });
  const $ = cheerio.load(res.body);

  const td = [];
  $(".result_text").each(function (i, elem) {
    td[i] = $(this).html();
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
      const show = {
        name: $(td[i]).text(),
        id: td[i].replace(idRegex, ""),
      };
      shows.push(show);
      console.log(show);
    }
  }
  return shows;
};

const myShow = {
  id: "tt1464335",
  name: "Uncharted (2022)",
};

const content_id = async (show) => {
  CONTENT_ID_REGEX = /streaming\.php\?id=([^&?/#]+)/g;
  CONTENT_ID_REGEX2 = /streaming\.php\?id=/g;
  const GDRIVE_PLAYER_ENDPOINT = "https://database.gdriveplayer.us/player.php";
  const res = await got(GDRIVE_PLAYER_ENDPOINT, {
    method: "GET",
    searchParams: {
      imdb: show["id"],
    },
  });
  const $ = await cheerio.load(res.body);
  const line = await $.html().match(CONTENT_ID_REGEX);
  const id = await line[0].replace(CONTENT_ID_REGEX2, "");
  return id;
};

const content = async (content_id) => {
  const ENCRYPT_AJAX_ENDPOINT = "https://membed.net/encrypt-ajax.php";
  const res = await got(ENCRYPT_AJAX_ENDPOINT, {
    method: "GET",
    headers: { "x-requested-with": "XMLHttpRequest" },
    searchParams: {
      id: aes_encrypt(content_id, SECRETBINARY, IVBINARY),
    },
  });
  const resJson = JSON.parse(res.body)["data"];
  const contentJson = JSON.parse(aes_decrypt(resJson, SECRETBINARY, IVBINARY));
  return contentJson;
};

content("MzU4Njc1");
