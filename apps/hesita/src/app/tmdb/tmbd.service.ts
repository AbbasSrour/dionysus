import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';

//todo fix this
export interface tmdbImageObject {
  aspect_ratio: number | null;
  height: number | null;
  iso_639_1: string | null;
  file_path: string | null;
  vote_average: number | null;
  vote_count: number | null;
  width: number | null;
}

//todo fix this
export interface tmdbImageResponse {
  id: number;
  backdrops: Array<tmdbImageObject>;
  logos: Array<tmdbImageObject>;
  posters: Array<tmdbImageObject>;
}

//todo fix this
export interface tmdbVideoResponse {
  id: number;
  results: Array<{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }>;
}

@Injectable()
export class TmdbService {
  constructor(private readonly config: ConfigService, private readonly logger: Logger) {}

  async getTmdbIdUsingImdbId(imdbId: string, type: string) {
    const res = await got.get(
      `${this.config.getOrThrow<string>('tmdb.address')}/find/${imdbId}`,
      {
        searchParams: {
          api_key: this.config.getOrThrow('tmdb.apiKey'),
          external_source: 'imdb_id',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const resBody = await JSON.parse(res.body);

    if (type === 'Movie') return parseInt(resBody.movie_results[0].id);
    return parseInt(resBody.tv_results[0].id);
  }

  async scrapeImagesFromTmdb(tmdbId: number, type: string): Promise<tmdbImageResponse> {
    let url: string;
    if (type === 'TV Series' || type === 'TV Mini Series')
      url = `${this.config.get<string>('tmdb.address')}/tv/${tmdbId}/images`;
    else url = `${this.config.get<string>('tmdb.address')}/movie/${tmdbId}/images`;
    const show = await got.get(url, {
      searchParams: {
        api_key: this.config.get('tmdb.apiKey'),
        include_image_language: 'en,null',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await JSON.parse(show.body);
  }

  async scrapeVideosFromTmdb(tmdbId: number, type: string): Promise<tmdbVideoResponse> {
    let url: string;
    if (type === 'TV Series' || type === 'TV Mini Series')
      url = `${this.config.get<string>('tmdb.address')}/tv/${tmdbId}/videos`;
    else url = `${this.config.get<string>('tmdb.address')}/movie/${tmdbId}/videos`;
    const videos = await got.get(url, {
      searchParams: {
        api_key: this.config.get('tmdb.apiKey'),
        include_video_language: 'en,null',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await JSON.parse(videos.body);
  }
}
