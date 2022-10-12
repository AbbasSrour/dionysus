import {
  AiFillHome as HomeIconFill,
  AiOutlineHome as HomeIconOutline,
} from 'react-icons/ai';
import {
  MdMovie as MoviesIconFill,
  MdOutlineMovie as MoviesIconOutline,
} from 'react-icons/md';
import {
  RiTvFill as SeriesIconFill,
  RiTvLine as SeriesIconOutline,
} from 'react-icons/ri';
import {
  BsCollection as ListIconOutline,
  BsCollectionFill as ListIconFill,
} from 'react-icons/bs';

export default [
  {
    display: 'Home',
    path: '/',
    icon: <HomeIconOutline className={'icon'} />,
    activeIcon: <HomeIconFill className={'icon'} />,
  },
  {
    display: 'Movies',
    path: '/movies',
    icon: <MoviesIconOutline className={'icon'} />,
    activeIcon: <MoviesIconFill className={'icon'} />,
  },
  {
    display: 'Series',
    path: '/series',
    icon: <SeriesIconOutline className={'icon'} />,
    activeIcon: <SeriesIconFill className={'icon'} />,
  },
  {
    display: 'My List',
    path: '/saved',
    icon: <ListIconOutline className={'icon'} />,
    activeIcon: <ListIconFill className={'icon'} />,
  },
];
