import React, { useEffect, useState } from "react";
import Model from "../../components/Model/Model.component";
import { dummyShows } from "../../assets/duumyData";
import "./Show.scss";
import ShowBar from "../../components/ShowBar/ShowBar.component";
import Slider from "../../components/Slider/Slider.component";
import { useParams } from "react-router-dom";
import { Show } from "../../schemas/show.schema";

const ShowPage = () => {
  const { id, type } = useParams();
  const [show, setShow] = useState<Show>();
  // TODO add error routing
  if (!id || !type) throw new Error();
  useEffect(() => {
    const myShow = new Show();
    myShow
      .initWithId(parseInt(id))
      .then(() => myShow.addDefaultImage())
      .then(() => setShow(myShow));
  }, []);

  console.log(show);

  return (
    <div className={"show-page page"}>
      {!show ? null : <Model show={show} />}
      <ShowBar movie={true} />
    </div>
  );
};

export default ShowPage;
