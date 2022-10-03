import React, { useState } from 'react';
import { MovieSchema } from '../../schema/movie.schema';
import './show-box.scss';
import VideoPlayer from '../player/player.component';

interface ShowBoxProps {
  poster: boolean;
  width: string;
  show: MovieSchema;
}

const ShowBox: React.FC<ShowBoxProps> = ({ width, show, poster }) => {
  const [isHovered, setIsHovered] = useState(false);
  const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/;
  const id = regex.exec(show?.trailer?.url || '')![3];
  const trailerUrl =
    'https://inv.bp.projectsegfau.lt/latest_version?id=' + id + '&itag=22';

  return (
    <div
      className={'show-box'}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
  );
};

export default ShowBox;
