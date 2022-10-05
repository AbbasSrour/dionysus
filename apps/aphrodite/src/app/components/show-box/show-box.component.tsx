import React, { forwardRef, useState } from 'react';
import { MovieSchema } from '../../schema/movie.schema';
import './show-box.scss';
import VideoPlayer from '../player/player.component';
import { FaImdb as ImdbIcon } from 'react-icons/fa';
import { PlayButton } from '../button/play-button.component';

interface ShowBoxProps {
  poster: boolean;
  width: string;
  show: MovieSchema;
}

const ShowBox = forwardRef<HTMLDivElement, ShowBoxProps>(
  ({ width, show, poster }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/;
    let ytId;
    try {
      ytId = regex.exec(show?.trailer?.url || '')![3] || '';
    } catch (error) {
      ytId = ''
    }

    const trailerUrl =
      'https://inv.bp.projectsegfau.lt/latest_version?id=' + ytId + '&itag=22';

    const timeConvert = (n: number) => {
      const num = n;
      const hours = num / 60;
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
      return rhours + 'h ' + rminutes + 'm';
    };

    return (
      <div
        className={poster ? 'show-box poster' : 'show-box backdrop'}
        style={{ width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img
            src={poster ? show?.poster?.url : show.backdrop?.url}
            alt="poster"
            className={'image show trans'}
          />
          <img
            src={poster ? show?.poster?.url : show.backdrop?.url}
            alt="poster"
            className={'image hide'}
          />
          {!poster && <img src={show.logo?.url} className={'logo trans'} alt={'logo'} />}
          {isHovered && <VideoPlayer source={trailerUrl} autoplay={true} />}
        </div>
        {isHovered && (
          <div className={'show-box__data'}>
            <div className={'btns'}>
              <PlayButton />
              {/*<AddButton link={''} />*/}
            </div>
            <h2>{show.name}</h2>
            <ul className={'list info'}>
              <li>
                <ImdbIcon />
                <p>{show.Imdb.rating}</p>
              </li>
              <li>
                <p>{show.pgRating}</p>
              </li>
              <li>
                <p>{timeConvert(show.length)}</p>
              </li>
            </ul>
            <ul className={'list genres'}>
              {show.genres.map((elem) => (
                <li className={'genre'}>{elem.genre.name}</li>
              ))}
            </ul>
            {poster ? <p className={'summary'}>{show.summary}</p> : null}
          </div>
        )}
      </div>
    );
  },
);

export default ShowBox;
