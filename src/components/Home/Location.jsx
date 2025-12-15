// src/components/Location/Location.jsx
import React from "react";
import locationImg from "../../assets/adventure-2528477_1280.jpg";

const Location = () => {
  return (
    <section className="py-24 ">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-900 mb-14 tracking-wide">
        আমাদের ঠিকানা
      </h2>

      {/* Image Wrapper */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="group relative rounded-3xl overflow-hidden shadow-xl">

          {/* Image */}
          <img
            src={locationImg}
            alt="Our Location"
            className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Address Card */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl px-8 py-5 shadow-2xl">
            <p className="text-white text-lg sm:text-xl font-semibold text-center tracking-wide">
              পাবলা, কোবির বটতলা, দৌলতপুর, খুলনা
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
