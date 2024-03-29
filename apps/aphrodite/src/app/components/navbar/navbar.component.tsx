import React, { useEffect, useRef, useState } from 'react';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import darth from '../../../assets/darth.png';
import { SearchButton } from '../search-button/search-button.compnent';
import pages from '../../data/pages.data';

const Navbar: React.FC = () => {
  const [accountPage, setAccountPage] = useState<boolean>(true);
  const [mobile, setMobile] = useState<boolean>(false);

  const { pathname } = useLocation();

  // To hide and un-hide components base on screen size
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1000) setMobile(true);
      else setMobile(false);
    };
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  // Hide Buttons on account page
  useEffect(() => {
    if (pathname !== '/account') setAccountPage(false);
    else setAccountPage(true);
  }, [pathname]);

  const headerRef = useRef<HTMLDivElement>(null);
  const active = pages.findIndex((element) => element.path === pathname);

  // Change the style on scroll
  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current!.classList.add('shrink');
      } else {
        headerRef.current!.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className='navbar'>
      <div className='navbar__logo'>
        <Link
          to={accountPage ? '/account' : '/'}
          style={mobile && accountPage ? { display: 'none' } : {}}
        >
          Dionysus
        </Link>
      </div>
      {!accountPage ? (
        <ul className='navbar__nav'>
          {pages.map((element, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link to={element.path} className={'Links'}>
                <div className={'icon-wrapper'}>
                  {i === active ? element.activeIcon : element.icon}
                </div>
                <span>{element.display}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {!accountPage && !mobile ? <SearchButton /> : null}
      {/*{!accountPage && !mobile ? <AnimatedSearchButton /> : null}*/}
      {!accountPage ? (
        <div className={'navbar__user'}>
          <img src={darth} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
