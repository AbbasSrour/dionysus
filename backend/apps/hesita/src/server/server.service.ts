import { Injectable } from '@nestjs/common';
import { aes_decrypt, aes_encrypt, GdriveShowId } from './utils/membed.util';
import got from 'got';

@Injectable()
export class ServerService {
  constructor() {}

  async membedServer(imdbId: string) {
    const ENCRYPT_AJAX_ENDPOINT = 'https://membed.net/encrypt-ajax.php';
    const SECRET = '25742532592138496744665879883281';
    const IV = '9225679083961858';

    const GDriveId = await GdriveShowId(imdbId);
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
