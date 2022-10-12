import React, { useEffect, useState } from 'react';
import './title.scss';
import { useParams } from 'react-router-dom';
import MovieApi from '../../api/movie.api';
import { MovieSchema } from '../../schema/movie.schema';
import Model from '../../components/model/model.component';
import ShowBar from '../../components/show-bar/show-bar.component';

const TitlePage = () => {
  // const { id, type } = useParams()
  // if (!id || !type) throw new Error()

  const [show, setShow] = useState<MovieSchema>();

  useEffect(() => {
    const api = new MovieApi();
    api.getMovie(2).then((movie) => setShow(movie));
  }, []);

  return (
    <div className={'title-page page'}>
      {!show ? null : <Model show={show} />}
      {show ? <ShowBar show={show} /> : null}
    </div>
  );
};

export default TitlePage;
