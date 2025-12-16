import React from "react";
import cqImg from "../../assets/cq.jpeg";
import mcqImg from "../../assets/Mcq.jpeg";
import qaImg from "../../assets/bord.jpeg";
import boardImg from "../../assets/cq.jpeg";

const ExamSection = () => {
  const sections = [
    { id: 1, title: "CQ", img: cqImg, link: "pactis" },
    { id: 2, title: "MCQ", img: mcqImg, link: "Mcq" },
    { id: 3, title: "Q&A", img: qaImg, link: "qnapdf" },
    { id: 4, title: "Board Question", img: boardImg, link: "bordan" },
  ];

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-12 tracking-tight">
        আমাদের একাডেমিক সেবা
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4">
                {section.title}
              </h3>
              <button
                onClick={() => window.location.href = section.link}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                বিস্তারিত দেখুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamSection;
