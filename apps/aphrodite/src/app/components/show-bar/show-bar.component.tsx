import React, { useEffect, useState } from 'react';
import './show-bar.scss';
import { MovieSchema } from '../../schema/movie.schema';
import MovieApi from '../../api/movie.api';
import Slider from '../slider/slider.component';

interface Props {
  show: MovieSchema;
}

const ShowBarComponent: React.FC<Props> = ({ show }) => {
  const [isMovie, setMovie] = useState(true);
  const [item, setItem] = useState('extras');
  const [extras, setExtras] = useState<MovieSchema[]>();
  const movieApi = new MovieApi();

  useEffect(() => {
    if (item === 'extras')
      movieApi.getMovies({ page: 1 }).then((movies) => setExtras(movies));
  }, [item]);

  return (
    <div className={'show-bar'}>
      <div className={'show-bar__menu'}>
        <ul className={'list'}>
          {isMovie ? null : <li onClick={() => setItem('episodes')}>EPISODES</li>}
          <li
            className={item === 'extras' ? 'active' : 'inactive'}
            onClick={() => setItem('extras')}
          >
            EXTRAS
          </li>
          <li
            className={item === 'suggested' ? 'active' : 'inactive'}
            onClick={() => setItem('suggested')}
          >
            SUGGESTED
          </li>
          <li
            className={item === 'details' ? 'active' : 'inactive'}
            onClick={() => setItem('details')}
          >
            DETAILS
          </li>
        </ul>
        <div className={'border'} />
      </div>
      <div className={'show-bar__content'}>
        {item === 'suggested' && extras ? (
          <Slider data={extras} type={'show'} poster={false} />
        ) : null}
        {item === 'extras' && extras ? (
          <Slider data={extras} type={'show'} poster={false} />
        ) : null}
        {item === 'details' ? (
          <div className={'details'}>
            <div className={'summary'}>
              <div className={'title'}>Summary</div>
              <p>{show.summary}</p>
            </div>
            <div className={'general'}>
              <div className={'title'}>General</div>
              <ul className={'list'}>
                <div className={'item'}>
                  <span>Duration: </span>
                  <li className={'info'}></li>
                </div>
                <div className={'item'}>
                  <span>PG Rating: </span>
                  <li className={'info'}></li>
                </div>
                <div className={'item'}>
                  <span>Languages: </span>
                  <li className={'info'}></li>
                </div>
                <div className={'item'}>
                  <span>Genres: </span>
                  <li className={'info'}></li>
                </div>
              </ul>
            </div>
            <div className={'Cast'}>
              <div className={'title'}>Cast</div>
              {/* <Slider type={"actor-card"} data={dummyActors} padding={"0"} /> */}
            </div>
            <div className={'Crew'}>
              <div className={'title'}>Crew</div>
              <ul className={'list'}>
                <div className={'item'}>
                  <span>Writers: </span>
                  <li className={'info'}></li>
                </div>
                <div className={'item'}>
                  <span>Directors: </span>
                  <li className={'info'}></li>
                </div>
                <div className={'item'}>
                  <span>Studios: </span>
                  <li className={'info'}></li>
                </div>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShowBarComponent;
