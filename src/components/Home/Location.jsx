// src/components/Location/Location.jsx
import React from "react";
import locationImg from "../../assets/adventure-2528477_1280.jpg";

const Location = () => {
  return (
    <section className="py-20 bg-green-50">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-16 tracking-tight">
        আমাদের ঠিকানা
      </h2>

      {/* Image Wrapper */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Image */}
          <img
            src={locationImg}
            alt="Our Location"
            className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-0.5"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

          {/* Address Card */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl px-10 py-6 shadow-xl transition-transform duration-500 group-hover:translate-y-[-5px]">
            <p className="text-white text-lg sm:text-xl font-semibold text-center tracking-wide">
              পাবলা, কবির বটতলা, দৌলতপুর, খুলনা
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
