import React from "react";
import * as ReactRedux from "react-redux";
import images from './images'
import Carousel from "react-elastic-carousel";
// import {Link} from 'react-router-dom'
import Item from "./item";
import "./index.scss";

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2, itemsToScroll: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 3},
];

export const Gallery = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="gallery" className="container">
      <div className="container text-left">
      </div>
      <h3 className="title text-left">{strings[lang]["gallery-title"]}</h3>

      <Carousel breakPoints={breakPoints}>
      <Item>
          <img src={images.img1} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img2} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img3} alt="image-gallery" width="260px" height="180px" />
        </Item>        
        <Item>
          <img src={images.img4} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img5} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img6} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img7} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img8} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img9} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img10} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item>
          <img src={images.img11} alt="image-gallery" width="260px" height="180px" />
        </Item>
      </Carousel>
    </div>
  );
};
