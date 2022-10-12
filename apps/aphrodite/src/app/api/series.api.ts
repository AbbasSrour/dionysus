import BaseApi from './base.api'
import { SeriesSchema } from '../schema/series.schema'

export default class SeriesApi {
  private readonly api = new BaseApi('/series').getApi()

  async getSeries(id: number): Promise<SeriesSchema> {
    return this.api.get(`${id}`).json<SeriesSchema>()
  }

  async getSeriesArr(searchParams: {
    page?: number
    genreId?: number
  }): Promise<Array<SeriesSchema>> {
    let shows = await new BaseApi('')
      .getApi()
      .get('series', {
        searchParams,
      })
      .json<Array<SeriesSchema>>()
    for (let show of shows) {
      if (show.backdrop == null) {
        shows.splice(shows.indexOf(show), 1)
      }
    }
    return shows
  }

  async getTrendingSeries(): Promise<Array<SeriesSchema>> {
    let shows = await this.api.get(`trending`).json<Array<SeriesSchema>>()
    for (let show of shows) {
      if (show.backdrop == null) {
        shows.splice(shows.indexOf(show), 1)
      }
    }
    return shows
  }

  async getTopSeries(page: number): Promise<Array<SeriesSchema>> {
    let shows = await this.api
      .get('top', { searchParams: { page } })
      .json<Array<SeriesSchema>>()
    for (let show of shows) {
      if (show.backdrop == null) {
        shows.splice(shows.indexOf(show), 1)
      }
    }
    return shows
  }
}
