import { Injectable } from '@nestjs/common';
import { GDriveShowId, ShowUrl } from './utils/membed.util';

@Injectable()
export class ServerService {
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
