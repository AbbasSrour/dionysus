import BaseApi from './base.api'
import { MovieSchema } from '../schema/movie.schema'

export default class MovieApi {
  private readonly api = new BaseApi('/movie').getApi()

  async getMovie(id: number): Promise<MovieSchema> {
    return this.api.get(`${id}`).json<MovieSchema>()
  }

  async getMovies(searchParams: {
    page?: number
    genreId?: number
  }): Promise<Array<MovieSchema>> {
    const shows = await new BaseApi('')
      .getApi()
      .get('movie', {
        searchParams,
      })
      .json<Array<MovieSchema>>()
    return shows
  }

  async getTrendingMovies(): Promise<Array<MovieSchema>> {
    return this.api.get(`trending`).json<Array<MovieSchema>>()
  }

  async getTopMovies(page: number): Promise<Array<MovieSchema>> {
    return this.api.get('top', { searchParams: { page } }).json<Array<MovieSchema>>()
  }
}
