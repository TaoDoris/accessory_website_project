import React from "react";
import CarouselPictures from "./CarouselPictures";
import CarouselStyles from "./Carousel.module.css";

const Carousel = (props) => {
  return (
    <div
      className={`row flex-nowrap overflow-hidden ${CarouselStyles.container}`}
    >
      {/* 跑出3張封面照片，並將其餘2張照片隱藏做輪播 */}
      {props.pictures.map((picture) => (
        <div className="col-12" key={picture.id}>
          <CarouselPictures src={picture.src} />
        </div>
      ))}

      {/* 輪播圖點點 */}
      <div className="d-flex">
        {props.pictures.map(() => (
          <div className={CarouselStyles.dot} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
