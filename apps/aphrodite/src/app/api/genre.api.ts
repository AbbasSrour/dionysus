import BaseApi from './base.api';
import { GenreSchema } from '../schema/genre.schema';

export class GenreApi {
  private api = new BaseApi('/genre').getApi();

  async getGenres(type: string): Promise<Array<GenreSchema>> {
    return await this.api
      .get('', {
        searchParams: {
          type,
        },
      })
      .json<Array<GenreSchema>>();
  }
}
