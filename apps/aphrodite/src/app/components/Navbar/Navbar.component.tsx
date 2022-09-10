import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar.compnent";
import darth from "../../assets/darth.png";
import {
  AiFillHome as HomeIconFill,
  AiOutlineHome as HomeIconOutline,
} from "react-icons/ai";
import {
  MdMovie as MoviesIconFill,
  MdOutlineMovie as MoviesIconOutline,
} from "react-icons/md";
import {
  RiTvFill as SeriesIconFill,
  RiTvLine as SeriesIconOutline,
} from "react-icons/ri";
import {
  BsCollectionFill as ListIconFill,
  BsCollection as ListIconOutline,
} from "react-icons/bs";

const headerNav = [
  {
    display: "Home",
    path: "/",
    icon: <HomeIconOutline className={"icon"} />,
    activeIcon: <HomeIconFill className={"icon"} />,
  },
  {
    display: "Movies",
    path: "/movie",
    icon: <MoviesIconOutline className={"icon"} />,
    activeIcon: <MoviesIconFill className={"icon"} />,
  },
  {
    display: "Series",
    path: "/",
    icon: <SeriesIconOutline className={"icon"} />,
    activeIcon: <SeriesIconFill className={"icon"} />,
  },
  {
    display: "My List",
    path: "/",
    icon: <ListIconOutline className={"icon"} />,
    activeIcon: <ListIconFill className={"icon"} />,
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [accountPage, setAccountPage] = useState<boolean>(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1000) setMobile(true);
      else setMobile(false);
    };
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  useEffect(() => {
    if (pathname !== "/account") setAccountPage(false);
    else setAccountPage(true);
  }, [pathname]);

  const headerRef = useRef<HTMLDivElement>(null);
  const active = headerNav.findIndex((element) => element.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current!.classList.add("shrink");
      } else {
        headerRef.current!.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="navbar">
      <div className="navbar__logo">
        <Link
          to={accountPage ? "/account" : "/"}
          style={mobile && accountPage ? { display: "none" } : {}}
        >
          Dionysus
        </Link>
      </div>
      {!accountPage ? (
        <ul className="navbar__nav">
          {headerNav.map((element, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={element.path} className={"Links"}>
                <div className={"icon-wrapper"}>
                  {i === active ? element.activeIcon : element.icon}
                </div>
                <span>{element.display}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {!accountPage && !mobile ? <SearchBar /> : null}
      {!accountPage ? (
        <div className={"navbar__user"}>
          <img src={darth} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
