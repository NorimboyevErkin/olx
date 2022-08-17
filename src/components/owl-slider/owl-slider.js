import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./owl-slider.styles.scss";
import { Pagination } from "swiper";

const bp = {
  0: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1080: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1320: {
    slidesPerView: 5,
    spaceBetween: 25,
  },
};

function OwlSlider({ breakpoints = bp, pagination = false, children }) {
  return (
    <div className="owl-slider-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        breakpoints={breakpoints}
        modules={[Pagination]}
        pagination={
          pagination
            ? {
                clickable: true,
              }
            : pagination
        }
        className="mySwiper"
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OwlSlider;
