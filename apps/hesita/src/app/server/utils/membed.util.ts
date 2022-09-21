import * as crypto from 'crypto';
import got from 'got';
import * as cheerio from 'cheerio';

export const aes_encrypt = async (
  data: string,
  key: string,
  iv: string,
): Promise<string> => {
  const keyBinary = Buffer.from(key);
  const ivBinary = Buffer.from(iv);
  const cipher = crypto.createCipheriv('AES-256-CBC', keyBinary, ivBinary);
  cipher.setAutoPadding(true);
  const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
  return encryptedData.toString('base64');
};

export const aes_decrypt = async (
  encrypted: string,
  key: string,
  iv: string,
): Promise<string> => {
  const data = Buffer.from(encrypted, 'base64');
  const keyBinary = Buffer.from(key);
  const ivBinary = Buffer.from(iv);
  const decipher = crypto.createDecipheriv('AES-256-CBC', keyBinary, ivBinary);
  decipher.setAutoPadding(true);
  const decryptedData = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ]);
  return decryptedData.toString('utf8');
};

export const GDriveShowId = async (
  imdbId: string,
  season?: number,
  episode?: number,
): Promise<string | null> => {
  const CONTENT_ID_REGEX = /streaming\.php\?id=([^&?/#]+)/g;
  const CONTENT_ID_REGEX2 = /streaming\.php\?id=/g;
  const GDRIVE_PLAYER_ENDPOINT = 'https://database.gdriveplayer.us/player.php';
  const GDRIVE_PLAYER_SERIES_ENDPOINT =
    'https://database.gdriveplayer.us/player.php?type=series';

  let res;
  if (season && episode)
    res = await got(GDRIVE_PLAYER_ENDPOINT, {
      method: 'GET',
      searchParams: {
        imdb: imdbId,
        type: 'series',
        season,
        episode,
      },
    });
  else
    res = await got(GDRIVE_PLAYER_ENDPOINT, {
      method: 'GET',
      searchParams: {
        imdb: imdbId,
      },
    });

  const $ = await cheerio.load(res.body);
  const line = await $.html().match(CONTENT_ID_REGEX);
  if (!line) return null;

  return line[0].replace(CONTENT_ID_REGEX2, '');
};

export const ShowUrl = async (GDriveId: string): Promise<string> => {
  const ENCRYPT_AJAX_ENDPOINT = 'https://membed.net/encrypt-ajax.php';
  const SECRET = '25742532592138496744665879883281';
  const IV = '9225679083961858';

  const res = await got(ENCRYPT_AJAX_ENDPOINT, {
    method: 'GET',
    headers: { 'x-requested-with': 'XMLHttpRequest' },
    searchParams: {
      id: await aes_encrypt(GDriveId, SECRET, IV),
    },
  });

  const data = JSON.parse(res.body)['data'];

  return JSON.parse(await aes_decrypt(data, SECRET, IV)).linkiframe;
};
