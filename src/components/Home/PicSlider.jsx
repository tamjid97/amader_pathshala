import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/WhatsApp Image 2025-12-15 at 12.39.38 PM.jpeg";
import img2 from "../../assets/480920003_1143441067259401_1219494609421970105_n.jpg";

import img3 from "../../assets/481000743_1143436113926563_8348566584860394779_n.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const brandlogos = [
   { img: img2, className: "img-cover" }, // banner style
  { img: img3, className: "img-contain" }, // full dekha
  { img: img1, className: "img-cover" }, // banner style

];

const PicSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {brandlogos.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.img}
            className={item.className}
            alt={`slide-${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PicSlider;
