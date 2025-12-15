// src/components/Feedback/RvCard.jsx
import React from "react";
import icon from "../../assets/icons8-double-quotes-48.png";

const RvCard = ({ fidbac }) => {
  const { name, role, feedback, img } = fidbac;

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform duration-500 transform hover:-translate-y-2 p-6 flex flex-col h-full">
      
      {/* Quote Icon */}
      <div className="mb-4">
        <img src={icon} alt="quote" className="w-10 h-10 opacity-30" />
      </div>

      {/* Feedback Text */}
      <p className="text-gray-700 text-base leading-relaxed flex-1 mb-6">
        {feedback}
      </p>

      {/* Profile Section */}
      <div className="flex items-center mt-auto space-x-4">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 text-lg">{name}</span>
          <span className="text-gray-500 text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default RvCard;
