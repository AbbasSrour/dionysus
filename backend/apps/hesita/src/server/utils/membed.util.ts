import * as crypto from 'crypto';
import got from 'got';
import * as cheerio from 'cheerio';

export const aes_encrypt = async (
  data: string,
  key: String,
  iv: String,
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
  key: String,
  iv: String,
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

export const GdriveShowId = async (imdbId: string): Promise<string | null> => {
  try {
    const CONTENT_ID_REGEX = /streaming\.php\?id=([^&?/#]+)/g;
    const CONTENT_ID_REGEX2 = /streaming\.php\?id=/g;
    const GDRIVE_PLAYER_ENDPOINT =
      'https://database.gdriveplayer.us/player.php';
    const res = await got(GDRIVE_PLAYER_ENDPOINT, {
      method: 'GET',
      searchParams: {
        imdb: imdbId,
      },
    });
    const $ = await cheerio.load(res.body);
    const line = await $.html().match(CONTENT_ID_REGEX);
    if (!line) return null;

    const id = line[0].replace(CONTENT_ID_REGEX2, '');
    if (!id) return null;
    return id;
  } catch (error) {
    console.error(error);
    return null;
  }
};
