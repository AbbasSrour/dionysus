import { Injectable } from '@nestjs/common';
import { GDriveShowId, ShowUrl } from './utils/membed.util';
import { ServerType } from '../scrape/type/insert.types';

@Injectable()
export class ServerService {
  async membedShowExists(imdbId: string, type: string): Promise<boolean> {
    if (type === 'Movie') return !!(await GDriveShowId(imdbId));
    else return !!(await GDriveShowId(imdbId, 1, 1));
  }

  membedServer(): ServerType {
    const ENCRYPT_AJAX_ENDPOINT = 'https://membed.net/encrypt-ajax.php';
    return { name: 'membed', url: ENCRYPT_AJAX_ENDPOINT };
  }

  async membedSeriesServer(
    imdbId: string,
    season: number,
    episode: number,
  ): Promise<string> {
    const id = await GDriveShowId(imdbId, season, episode);
    if (!id) throw Error;
    return ShowUrl(id);
  }

  async membedMovieServer(imdbId: string): Promise<string> {
    const id = await GDriveShowId(imdbId);
    if (!id) throw Error;
    return ShowUrl(id);
  }
}
