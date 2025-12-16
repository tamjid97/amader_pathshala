import React from "react";
import videoSrc from "../../assets/WhatsApp Video 2025-12-15 at 10.29.05 PM.mp4";

const ClassRum = () => {
  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-20 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-12 leading-tight">
        আমাদের ক্লাস রুম
      </h1>

      {/* Video Card */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <video
            src={videoSrc}
            autoPlay
            controls
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            আপনার ব্রাউজার ভিডিও ট্যাগ সমর্থন করছে না।
          </video>
        </div>
      </div>
    </div>
  );
};

export default ClassRum;
