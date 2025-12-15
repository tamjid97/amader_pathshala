// src/components/ExtraSection/Extrasection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from '../../assets/480474256_1136920151244826_4635648587296402787_n.jpg';
import img2 from '../../assets/480518840_1136917997911708_8878810972449778311_n.jpg';
import img3 from '../../assets/WhatsApp Image 2025-12-15 at 1.22.52 PM.jpeg';
import img4 from '../../assets/WhatsApp Image 2025-12-15 at 1.25.49 PM.jpeg';
import img5 from '../../assets/WhatsApp Image 2025-12-15 at 1.25.50 PM.jpeg';
import img6 from '../../assets/WhatsApp Image 2025-12-15 at 1.25.51 PM.jpeg';
import img7 from '../../assets/WhatsApp Image 2025-12-15 at 1.25.52 PM.jpeg';
import img8 from '../../assets/WhatsApp Image 2025-12-15 at 1.25.58 PM.jpeg';

const extraImages = [
  img1,img2,img3,img4,img5,img6,img7,img8
];

const Extrasection = () => {
  return (
    <section className=" py-16 px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center  text-green-900 mb-12 leading-snug">
        সমাজের জন্য আমাদের উদ্যোগ
      </h2>

      {/* Top Row - Right to Left */}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true, // right to left
        }}
        speed={4000} // scroll speed
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        className="mb-10"
      >
        {extraImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt={`Extra ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Row - Left to Right */}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // scroll speed
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
      >
        {extraImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt={`Extra ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="mt-12 text-center  text-green-700 max-w-2xl mx-auto">
        আমাদের বিশ্বাস, ভালো ফলাফলের পাশাপাশি ভালো মানুষ হওয়াটাই প্রকৃত শিক্ষা।
      </p>
    </section>
  );
};

export default Extrasection;
