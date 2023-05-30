import React from "react";
import { Container } from "reactstrap";

import UnboxSlider from "../../containers/UnboxSlider/UnboxSlider";

import RecentlyUnboxCard from "../../components/RecentlyUnboxCard/RecentlyUnboxCard";

import "./FreeSpins.scss";
const data = [
  {
    id: 1,
    img: "https://i.ibb.co/82P78y1/5a296123b48f98.png",
    price: 0.6,
  },
  {
    id: 2,
    img: "https://i.ibb.co/tCbW9SK/5a296123b48f98-2.png",
    price: 0.12,
  },
  {
    id: 3,
    img: "https://i.ibb.co/3fw30xs/5a296123b48f98-3.png",
    price: 0.7,
  },
  {
    id: 4,
    img: "https://i.ibb.co/3fw30xs/5a296123b48f98-3.png",
    price: 1.6,
  },
  {
    id: 5,
    img: "https://i.ibb.co/jy5JNjr/5a296123b48f98-1.png",
    price: 2,
  },
  {
    id: 6,
    img: "https://i.ibb.co/S3TTvDz/5a296123b48f98-4.png",
    price: 5.2,
  },
  {
    id: 6,
    img: "https://i.ibb.co/S3TTvDz/5a296123b48f98-4.png",
    price: 5.2,
  },
];
const RecentlyUnbox = () => {
  return (
    <div className="recently-unbox-main">
      <Container>
        <h1>RECENTLY UNBOXED</h1>
        <UnboxSlider>
          {data &&
            data.map((item, i) => <RecentlyUnboxCard data={item} key={i} />)}
        </UnboxSlider>
      </Container>
    </div>
  );
};

export default RecentlyUnbox;
