// src/components/Feedback/Fidbac.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import RvCard from "./RvCard";
import { feedbackData } from "./data";

const Fidbac = () => {
  return (
    <div className="bg-green-50 py-20 px-6 flex flex-col items-center">
      {/* Section Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-16 text-center leading-tight">
        শিক্ষার্থীদের ফিডব্যাক
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl"
      >
        {feedbackData.map((fb) => (
          <SwiperSlide key={fb.id} className="flex justify-center">
            <RvCard fidbac={fb} />
          </SwiperSlide>
        ))}
      </Swiper>
       {/* Optional Footer Text */}
      <p className="mt-12 text-green-700 text-center max-w-2xl">
        আমাদের শিক্ষার্থীরা যা অভিজ্ঞতা অর্জন করেছে, তা এখানে শেয়ার করেছে। আপনারাও তাদের মতামত দেখে অনুপ্রাণিত হতে পারেন।
      </p>
    </div>
  );
};

export default Fidbac;
