import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShowCard = styled((props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div></div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
})`
  div {
    position: relative;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 160%;
    background-image: url(${bg});
    border-radius: $border-radius;
    margin-bottom: 1rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: $black;
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: $border-radius;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover::before {
        opacity: 0.8;
      }
    }
  }
`;
