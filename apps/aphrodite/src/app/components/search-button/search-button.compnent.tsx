import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './search-button.scss';
import { RiSearch2Line as SearchIcon } from 'react-icons/ri';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const SearchButton = () => {
  return (
    <Link to={'/search'} className={'search trans-background'}>
      <div className={'search__icon'}>
        <SearchIcon className={'icons'} />
      </div>
    </Link>
  );
};

export const AnimatedSearchButton = () => {
  const [clicked, setCLicked] = useState(false);
  const input = {
    icon: {
      opacity: 0,
      display: 'none',
    },
    bar: {
      x: '20%',
      width: '25rem',
    },
  };
  const button = {
    icon: {
      opacity: 0,
      width: '0',
      display: 'none',
    },
    bar: {
      y: '4%',
      x: '60%',
      width: '3rem',
    },
  };
  const svg = {
    icon: {
      x: '-50%',
      y: '0%',
    },
    bar: {
      x: '-750%',
      y: '3%',
    },
  };
  return (
    <motion.form className="search">
      <motion.input
        type="text"
        placeholder=" "
        layout={true}
        variants={input}
        animate={!clicked ? 'icon' : 'bar'}
        style={{
          width: '0rem',
        }}
      />
      <motion.button
        type="reset"
        className={'search__reset'}
        layout={true}
        variants={button}
        animate={!clicked ? 'icon' : 'bar'}
        style={{
          width: '0rem',
        }}
        onClick={() => setCLicked(false)}
      >
        <CloseIcon className={'icons'} />
      </motion.button>
      <motion.div
        className={'search__icon'}
        onClick={() => setCLicked(true)}
        layout={true}
        variants={svg}
        animate={!clicked ? 'icon' : 'bar'}
        style={{}}
      >
        <SearchIcon className={'icons'} />
      </motion.div>
    </motion.form>
  );
};
