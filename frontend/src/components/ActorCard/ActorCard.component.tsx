import React from "react";
import "./ActorCard.scss";
import { ActorSchema } from "../../schemas/actor.schema";

interface Props {
  actor: ActorSchema;
  width: string;
  margin: string;
}

const ActorCard: React.FC<Props> = ({ actor, width, margin }) => {
  return (
    <div
      className={"actor-card"}
      style={{ width: `${width}`, marginLeft: `${margin}` }}
    >
      <img src={actor.image} alt={actor.name} className={"actor-card__image"} />
      <div className={"actor-card__info"}>
        <span className={"actor-card__info__name"}>{actor.name}</span>
        <span className={"actor-card__info__role"}>{actor.role}</span>
      </div>
    </div>
  );
};

export default ActorCard;
