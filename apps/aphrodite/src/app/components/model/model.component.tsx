import React, { useEffect, useState } from 'react';
import { MovieSchema } from '../../schema/movie.schema';
import { Button, OutlinedButton } from '../button/button.component';
import './model.scss';
import { FaImdb as ImdbIcon } from 'react-icons/fa';

interface Props {
  show: MovieSchema;
}

const Model: React.FC<Props> = ({ show }) => {
  const timeConvert = (n: number) => {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'm';
  };

  return (
    <div className={'model'}>
      <div
        className={'model__banner'}
        style={{ backgroundImage: `url(${show?.backdrop?.url})` }}
      />
      <div className={'model__content'}>
        <div
          className={'model__content__poster'}
          style={{ backgroundImage: `url(${show?.poster?.url})` }}
        />
        <div className="model__content__info">
          <div className="title">
            {show?.logo ? <img src={`${show.logo.url}`} /> : <h2>{show?.name}</h2>}
          </div>
          <ul className={'list info'}>
            <li>
              <ImdbIcon />
              <p>{show.Imdb.rating}</p>
            </li>
            <li>
              <p>{show.pgRating}</p>
            </li>
            <li>
              <p>{timeConvert((show as MovieSchema).length | 0)}</p>
            </li>
          </ul>
          <div className={'genres'}>
            {show.genres.map((genre) => (
              <span className="genres__item">{genre.genre.name}</span>
            ))}
          </div>
          <p className="overview">{show?.summary}</p>
          <div className={'btns'}>
            <Button link={''} clean={false} circular={true}>
              Play
            </Button>
            <OutlinedButton>Trailer</OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
