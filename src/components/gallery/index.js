import React from "react";
import * as Strings from "../../strings/strings";
import photo from "./dety.jpg";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./index.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Gallery = () => {
  return (
    <div id="gallery" className="container">
      <p className="title">{Strings.ru["gallery-title"]}</p>

      <Carousel breakPoints={breakPoints}>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
        <Item>
          <img src={photo} alt="image" width="300px" height="300px"></img>
        </Item>
      </Carousel>
    </div>
  );
};
