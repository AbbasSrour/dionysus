import React, { useEffect, useState } from 'react';
import './home.scss';
import HeroHeader from '../../components/hero/hero.component';
import MovieApi from '../../api/movie.api';
import { MovieSchema } from '../../schema/movie.schema';
import Slider from '../../components/slider/slider.component';
import studioData from '../../data/studios.data';
import SeriesApi from '../../api/series.api';
import { SeriesSchema } from '../../schema/series.schema';

const HomePage = () => {
  // const [color, setColor] = useState<Array<Array<number>> | null>(null);
  // const [header, setHeader] = useState(
  //   'https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_FMjpg_UX1000_.jpg',
  // );
  //
  // useEffect(() => {
  //   prominent(header)
  //     .then((extracted) => setColor(extracted))
  //     .then(() => console.log(color));
  // }, [header]);

  const [shows, setShows] = useState<Array<MovieSchema>>();
  const [topMovies, setTopMovies] = useState<Array<MovieSchema>>();
  const [topSeries, setTopSeries] = useState<Array<SeriesSchema>>();
  const [trendingMovies, setTrendingMovies] = useState<Array<MovieSchema>>();

  const movieApi = new MovieApi();
  const seriesApi = new SeriesApi();

  useEffect(() => {
    movieApi.getMovies(1).then((movies) => setShows(movies));
    movieApi.getTopMovies(2).then((movies) => setTopMovies(movies));
    seriesApi.getTopSeries(2).then((series) => setTopSeries(series));
    movieApi.getTrendingMovies().then((movies) => setTrendingMovies(movies));
  }, []);

  return (
    <div className={'home-page page'}>
      <HeroHeader />
      {shows ? (
        <Slider data={shows} sliderName={'Recommendation'} poster={true} type={'show'} />
      ) : null}
      <Slider
        data={studioData}
        poster={false}
        type={'studio'}
        spacing={5}
        sliderName={'Studios'}
      />
      {shows ? (
        <Slider
          data={shows}
          sliderName={'Trending TV Shows'}
          poster={false}
          type={'show'}
        />
      ) : null}
      {trendingMovies ? (
        <Slider
          data={trendingMovies}
          sliderName={'Trending Movies'}
          poster={false}
          type={'show'}
        />
      ) : null}
      <Slider
        data={studioData}
        poster={false}
        type={'studio'}
        spacing={5}
        sliderName={'Networks'}
      />
      {topSeries ? (
        <Slider
          data={topSeries}
          sliderName={'Top Tv Shows'}
          poster={false}
          type={'show'}
        />
      ) : null}
      {topMovies ? (
        <Slider data={topMovies} sliderName={'Top Movies'} poster={false} type={'show'} />
      ) : null}
    </div>
  );
};

export default HomePage;
