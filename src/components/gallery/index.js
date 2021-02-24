import React from "react";
import * as ReactRedux from "react-redux";
import images from "./images";
import Carousel from "react-elastic-carousel";
import {Link} from "react-router-dom";
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
      <div className="container newsLink">
        <Link to="/newsPage" className="text">
          <p className="text-sm-right text-center">{strings[lang]["news-link"]}</p>
        </Link>
      </div>
      <h3 className="title text-sm-left text-center">{strings[lang]["gallery-title"]}</h3>

      <Carousel breakPoints={breakPoints}>
        {/* <Item className="photo">
          <img src={images.img1} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img2} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img3} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img4} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img5} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img6} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img7} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img8} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img9} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img10} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img11} alt="image-gallery" width="260px" height="180px" />
        </Item> */}
        <Item className="photo">
          <img src={images.img12} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img13} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img14} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img15} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img16} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img17} alt="image-gallery" width="260px" height="180px" />
        </Item>
        <Item className="photo">
          <img src={images.img18} alt="image-gallery" width="260px" height="180px" />
        </Item>
      </Carousel>
    </div>
  );
};
