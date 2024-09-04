import React, { useState } from "react";
import Card from "./Card";
import "./Carousel.css";

/** Carousel: displays a carousel of images.
 *
 * Props:
 * - photos: array of {src, caption} objects describing images
 * - title: string describing the collection
 *
 * State:
 * - currImg: integer for the current image index
 *
 * App --> Carousel --> Card
 */

function Carousel({ photos, title }) {
  const [currImg, setCurrImg] = useState(0);
  const totalImgs = photos.length;

  const goForward = () => {
    setCurrImg(currImg + 1);
  };

  const goBackward = () => {
    setCurrImg(currImg - 1);
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currImg > 0 && <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
          data-testid="left-arrow"
        />}
        <Card
          caption={photos[currImg].caption}
          src={photos[currImg].src}
          currNum={currImg + 1}
          totalNum={totalImgs}
        />
        {currImg < totalImgs - 1 && <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          data-testid="right-arrow"
        />}
      </div>
    </div>
  );
}

export default Carousel;
