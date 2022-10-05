import BaseApi from './base.api';
import { SeriesSchema } from '../schema/series.schema';

export default class SeriesApi {
  private readonly api = new BaseApi('/series').getApi();

  async getSeries(id: number): Promise<SeriesSchema> {
    return this.api.get(`${id}`).json<SeriesSchema>();
  }

  async getSeriesArr(page: number): Promise<Array<SeriesSchema>> {
    return new BaseApi('')
      .getApi()
      .get('series', {
        searchParams: {
          page,
        },
      })
      .json<Array<SeriesSchema>>();
  }

  async getTrendingSeries(): Promise<Array<SeriesSchema>> {
    return this.api.get(`trending`).json<Array<SeriesSchema>>();
  }

  async getTopSeries(page: number): Promise<Array<SeriesSchema>> {
    return this.api.get('top', { searchParams: { page } }).json<Array<SeriesSchema>>();
  }
}
