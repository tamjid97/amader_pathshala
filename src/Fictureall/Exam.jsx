import React from "react";
import bgImage from "../assets/eam.jpg";

const Exam = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay for better contrast */}
      <div className="absolute inse" />

      {/* Optional: Centered content placeholder */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* যদি text বা button রাখতে চাও এখানে দিতে পারো */}
      </div>
    </div>
  );
};

export default Exam;
