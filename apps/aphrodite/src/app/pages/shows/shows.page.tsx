import React, { ChangeEvent, useEffect, useState } from 'react'
import './shows.scss'
import { GenreSchema } from '../../schema/genre.schema'
import { useLocation } from 'react-router-dom'
import ShowsImage from '../../../assets/shows.jpg'
import ShowGrid from '../../components/show-grid/show-grid.component'
import { MovieSchema } from '../../schema/movie.schema'
import { SeriesSchema } from '../../schema/series.schema'
import MovieApi from '../../api/movie.api'
import { GenreApi } from '../../api/genre.api'
import SeriesApi from '../../api/series.api'

const ShowsPage: React.FC = () => {
  const genreApi = new GenreApi()
  const movieApi = new MovieApi()
  const seriesApi = new SeriesApi()
  const { pathname } = useLocation()

  const [selectedGenreId, setSelectedGenreId] = useState<number>(0)
  const [page, setPage] = useState(2)
  const [genres, setGenres] = useState<Array<GenreSchema>>()
  const [shows, setShows] = useState<Array<MovieSchema> | Array<SeriesSchema>>()

  useEffect(() => {
    if (pathname === '/movies')
      genreApi.getGenres('movie').then((genres) => setGenres(genres))
    else genreApi.getGenres('series').then((genres) => setGenres(genres))
  }, [pathname])

  useEffect(() => {
    setShows(undefined)
    if (selectedGenreId === 0)
      if (pathname === '/movies')
        movieApi.getMovies({ page }).then((movies) => setShows(movies))
      else seriesApi.getSeriesArr({ page }).then((series) => setShows(series))
    else if (selectedGenreId !== 0)
      if (pathname === '/movies')
        movieApi
          .getMovies({ page, genreId: selectedGenreId })
          .then((movies) => setShows(movies))
      else
        seriesApi
          .getSeriesArr({ page, genreId: selectedGenreId })
          .then((series) => setShows(series))
  }, [selectedGenreId, pathname])

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const genreId = parseInt(e?.target.value)
    if (genreId !== 0) setPage(2)

    setSelectedGenreId(genreId)
  }

  return (
    <div className={'shows-page'}>
      <div
        className={'shows-page__header'}
        style={{ backgroundImage: `url(${ShowsImage})` }}
      >
        <h1>{pathname === '/movies' ? 'Movies' : 'TV Series'}</h1>
        <select onChange={handleGenreChange}>
          <option defaultChecked={true} value={0}>
            Featured
          </option>
          {genres
            ? genres.map((genre) => <option value={genre.genreId}>{genre.name}</option>)
            : null}
        </select>
      </div>
      {shows ? <ShowGrid shows={shows} /> : null}
    </div>
  )
}

export default ShowsPage
