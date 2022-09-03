// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

const arr = [
  "https://apollo-olx.cdnvideo.ru/v1/files/3ry3yyoat5av1-UZ/image;s=1000x700",
  "https://apollo-olx.cdnvideo.ru/v1/files/od3kt39i9kk8-UZ/image;s=1000x700",
  "https://apollo-olx.cdnvideo.ru/v1/files/qsk9mmuq2hrs1-UZ/image;s=1000x700",
  "https://apollo-olx.cdnvideo.ru/v1/files/ebbl8th7q8yb2-UZ/image;s=1000x700",
  "https://apollo-olx.cdnvideo.ru/v1/files/g3lyfxyo78t73-UZ/image;s=1000x700",
];
function MySlider() {
  return (
    <div className="slider-box">
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr.map((item, index) => (
          <SwiperSlide key={index} data-hash={`slide${++index}`}>
            <img src={item} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MySlider;
