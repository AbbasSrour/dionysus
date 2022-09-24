import React, { useEffect, useState } from 'react';
import './slideshow.scss';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';
import NoTimeToDie from '../../../assets/NoTimeToDie.jpg';
import { ImageApi } from '../../api/image.api';
import { ImageSchema } from '../../schema/image.schema';

interface ElementProps {
  height: number;
  cover?: boolean;
  id: number;
}

const Element: React.FC<ElementProps> = ({ height, cover = true, id }) => {
  return (
    <div
      className={'marquee-elem'}
      key={`marquee-element-${Math.random() * Math.random() * id}`}
      style={{
        backgroundImage: `url(${NoTimeToDie})`,
        width: `${cover ? height * 1.8 : height / 1.5}vh`,
        height: `${height}vh`,
      }}
    ></div>
  );
};

const SlideShow: React.FC = () => {
  const api = new ImageApi();
  const [images, setImages] = useState<Array<ImageSchema>>();
  useEffect(() => {
    api.getImages(6).then((images) => setImages(images));
  });

  return (
    <div className={'slide-show'}>
      <div className={'slide-show__wrapper'}>
        <Marquee
          key={'marqueeOne1'}
          velocity={25}
          direction={'ltr'}
          scatterRandomly={false}
          resetAfterTries={100}
          onInit={() => null}
          onFinish={() => null}
        >
          {times(7, Number).map((id) => (
            <Element id={id} height={15} />
          ))}
        </Marquee>
      </div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Marquee
          key={'marqueeOne2'}
          velocity={20}
          direction={'ltr'}
          scatterRandomly={false}
          resetAfterTries={100}
          onInit={() => null}
          onFinish={() => null}
        >
          {times(7, Number).map((id) => (
            <Element id={id} height={15} />
          ))}
        </Marquee>
      </div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Marquee
          key={'marqueeOne3'}
          velocity={35}
          direction={'ltr'}
          scatterRandomly={false}
          resetAfterTries={100}
          onInit={() => null}
          onFinish={() => null}
        >
          {times(15, Number).map((id) => (
            <Element id={id} height={25} cover={false} />
          ))}
        </Marquee>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Marquee
            key={'marqueeOne4'}
            velocity={30}
            direction={'ltr'}
            scatterRandomly={false}
            resetAfterTries={100}
            onInit={() => null}
            onFinish={() => null}
          >
            {times(7, Number).map((id) => (
              <Element id={id} height={15} />
            ))}
          </Marquee>
        </div>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Marquee
            key={'marqueeOne5'}
            velocity={25}
            direction={'ltr'}
            scatterRandomly={false}
            resetAfterTries={100}
            onInit={() => null}
            onFinish={() => null}
          >
            {times(7, Number).map((id) => (
              <Element id={id} height={15} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
