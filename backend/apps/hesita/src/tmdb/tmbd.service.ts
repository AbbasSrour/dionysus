import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';

export interface tmdbImageObject {
  aspect_ratio: number | null;
  height: number | null;
  iso_639_1: string | null;
  file_path: string | null;
  vote_average: number | null;
  vote_count: number | null;
  width: number | null;
}

export interface tmdbImageResponse {
  id: number;
  backdrops: Array<tmdbImageObject>;
  logos: Array<tmdbImageObject>;
  posters: Array<tmdbImageObject>;
}

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
  constructor(private readonly config: ConfigService) {}

  async getTmdbIdUsingImdbId(imdbId: string) {
    const show = await got.get(
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
    return await JSON.parse(show.body).movie_results[0].id;
  }

  async scrapeImagesFromTmdb(tmdbId: string): Promise<tmdbImageResponse> {
    const show = await got.get(
      `${this.config.get<string>('tmdb.address')}/movie/${tmdbId}/images`,
      {
        searchParams: {
          api_key: this.config.get('tmdb.apiKey'),
          include_image_language: 'en,null',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return await JSON.parse(show.body);
  }

  async scrapeVideosFromTmdb(tmdbId: string): Promise<tmdbVideoResponse> {
    const videos = await got.get(
      `${this.config.get<string>('tmdb.address')}/movie/${tmdbId}/videos`,
      {
        searchParams: {
          api_key: this.config.get('tmdb.apiKey'),
          include_video_language: 'en,null',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return await JSON.parse(videos.body);
  }
}
