import React from 'react';
import { MovieSchema } from '../../schema/movie.schema';
import { SeriesSchema } from '../../schema/series.schema';
import ShowBox from '../show-box/show-box.component';
import './show-grid.scss';

interface Props {
  shows: Array<MovieSchema> | Array<SeriesSchema>;
}

const ShowGrid: React.FC<Props> = ({ shows }) => {
  return (
    <div className={'show-grid'}>
      {shows.map((show) => (
        <ShowBox show={show} poster={false} width={'100%'} info={false}/>
      ))}
    </div>
  );
};

export default ShowGrid;
