import React, { useEffect, useState } from 'react';
import './hero.scss';
import { Button, OutlinedButton } from '../button/button.component';
import { MovieSchema } from '../../schema/movie.schema';
import MovieApi from '../../api/movie.api';
import { SeriesSchema } from '../../schema/series.schema';

const HeroHeader: React.FC = () => {
  const [mobile, setMobile] = useState(false);
  const [heroShow, setHeroShow] = useState<MovieSchema | SeriesSchema>();

  const api = new MovieApi();

  useEffect(() => {
    api.getMovie(1).then((movie) => setHeroShow(movie));
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1000) setMobile(true);
      else setMobile(false);
    };
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [window.innerWidth]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${
          mobile ? heroShow?.poster?.url : heroShow?.backdrop?.url
        })`,
      }}
    >
      <div className="hero-section__container">
        <div className="hero-section__container__info">
          <div className="title">
            {heroShow?.logo ? (
              <img src={`${heroShow?.logo.url}`} />
            ) : (
              <h2>{heroShow?.name}</h2>
            )}
          </div>
          <div className="overview">{heroShow?.summary}</div>
          <div className="btns">
            <Button circular={true} clean={false}>
              Play
            </Button>
            <OutlinedButton>Trailer</OutlinedButton>
          </div>
        </div>
        <div className="hero-section__container__poster">
          <img src={heroShow?.poster?.url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
