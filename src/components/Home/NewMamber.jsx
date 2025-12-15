// src/components/NewMember/NewMember.jsx
import React from "react";
import img1 from "../../assets/kaka.jpeg";
import img2 from "../../assets/mama.jpg";
import img3 from "../../assets/WhatsApp Image 2025-12-15 at 11.56.28 PM.jpeg";

const members = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
];

const NewMember = () => {
  return (
    <section className="py-16 ">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-900 mb-12">
        নতুন সদস্যদের স্বাগতম উপহার
      </h2>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={member.img}
                alt="Gift"
                className="w-full h-72 object-contain p-4 rounded-xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewMember;
