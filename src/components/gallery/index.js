import React from "react";
import * as ReactRedux from "react-redux";
import photo from "./dety.jpg";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./index.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export const Gallery = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="gallery" className="container">
      <h3 className="title text-left">{strings[lang]["gallery-title"]}</h3>

      <Carousel breakPoints={breakPoints}>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
        <Item>
          <img src={photo} alt="image-gallery" width="260px" height="180px"/>
        </Item>
      </Carousel>
    </div>
  );
};
