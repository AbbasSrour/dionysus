import React from 'react';
import './home.scss';
import SlideShow from '../../components/slideshow/slide-show.component';

const HomePage = () => {
  return (
    <div className={'home-page'}>
      <SlideShow />
    </div>
  );
};

export default HomePage;
