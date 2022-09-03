import { Injectable } from '@nestjs/common';
import { aes_decrypt, aes_encrypt, GDriveShowId } from './utils/membed.util';
import got from 'got';

@Injectable()
export class ServerService {
  constructor() {}

  async membedMovieServer(imdbId: string, type: string) {
    const ENCRYPT_AJAX_ENDPOINT = 'https://membed.net/encrypt-ajax.php';
    const SECRET = '25742532592138496744665879883281';
    const IV = '9225679083961858';

    let GDriveId;
    if (type === 'TV Series' || type === 'TV Mini Series') {
      GDriveId = Array();
      for (
        let seasonNum = 1, endOfSeries = false;
        !endOfSeries && seasonNum < 3;
        seasonNum++
      ) {
        for (
          let episodeNum = 1, endOfSeason = false;
          !endOfSeason;
          episodeNum++
        ) {
          try {
            const url = await GDriveShowId(imdbId, seasonNum, episodeNum);
            if (!url) throw new Error();
            let episodeData = {
              season: seasonNum,
              episode: episodeNum,
              url,
            };
            console.log(episodeData);
            GDriveId.push(episodeData);
          } catch (error) {
            if (episodeNum === 1) {
              endOfSeries = true;
            } else endOfSeason = true;
          }
        }
      }

      const episodeArray = [];
      for (const episodeData of GDriveId) {
        const res = await got(ENCRYPT_AJAX_ENDPOINT, {
          method: 'GET',
          headers: { 'x-requested-with': 'XMLHttpRequest' },
          searchParams: {
            id: await aes_encrypt(episodeData.url, SECRET, IV),
          },
        });
        const resJson = JSON.parse(res.body)['data'];
        episodeArray.push({
          name: 'membed',
          url: ENCRYPT_AJAX_ENDPOINT,
          movieUrl: await JSON.parse(await aes_decrypt(resJson, SECRET, IV))
            .linkiframe,
        });
      }
      console.log(episodeArray);
      return episodeArray;
    } else {
      GDriveId = await GDriveShowId(imdbId);
      if (!GDriveId) throw Error;

      const res = await got(ENCRYPT_AJAX_ENDPOINT, {
        method: 'GET',
        headers: { 'x-requested-with': 'XMLHttpRequest' },
        searchParams: {
          id: await aes_encrypt(GDriveId, SECRET, IV),
        },
      });
      const resJson = JSON.parse(res.body)['data'];
      return {
        name: 'membed',
        url: ENCRYPT_AJAX_ENDPOINT,
        movieUrl: await JSON.parse(await aes_decrypt(resJson, SECRET, IV))
          .linkiframe,
      };
    }
  }
}
