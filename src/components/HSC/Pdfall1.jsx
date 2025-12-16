import React from "react";
import chapter1Img from "../../assets/cap1-pd1.jpeg";
import chapter2Img from "../../assets/cap1-pd2.jpeg";
import chapter3Img from "../../assets/book2.jpeg";

const Pdfall1 = () => {
  const chapters = [
    { id: 1, title: "অধ্যায় ১", img: chapter1Img, link: "https://drive.google.com/file/d/1lp6SnNPNUKMciEmOtHQ7OQNhPtaRpXM8/view?fbclid=IwY2xjawOt7sZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR67JmxwXhT9eWZPNGnMNg0Zp307XcAGi6VNahvDi4hAA8H9yr-uz5nQx_D_dA_aem_i2fUnJF8EheFczVFNQfEsg" },
    { id: 2, title: "অধ্যায় ২", img: chapter2Img, link: "/pdf/chapter2" },
    { id: 3, title: "অধ্যায় ৩", img: chapter3Img, link: "/pdf/chapter3" },
    { id: 4, title: "অধ্যায় ৪", img: chapter3Img, link: "/pdf/chapter4" },
    { id: 5, title: "অধ্যায় ৫", img: chapter3Img, link: "/pdf/chapter5" },
    { id: 6, title: "অধ্যায় ৬", img: chapter3Img, link: "/pdf/chapter6" },
    { id: 7, title: "অধ্যায় ৭", img: chapter3Img, link: "/pdf/chapter7" },
    { id: 8, title: "অধ্যায় ৮", img: chapter3Img, link: "/pdf/chapter8" },
    { id: 9, title: "অধ্যায় ৯", img: chapter3Img, link: "/pdf/chapter9" },
    { id: 10, title: "অধ্যায় ১০", img: chapter3Img, link: "/pdf/chapter10" },
    { id: 11, title: "অধ্যায় ১১", img: chapter3Img, link: "/pdf/chapter11" },
    { id: 12, title: "অধ্যায় ১২", img: chapter3Img, link: "/pdf/chapter12" },
  ];

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-12 tracking-tight">
        সমস্ত অধ্যায়
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="rounded-3xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image + overlay */}
            <div className="relative">
              <img
                src={chapter.img}
                alt={chapter.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />
              {/* Overlay: chapter name + button */}
              <div className="absolute inset-0 flex flex-col justify-end items-center bg-black/20 p-4">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
                  {chapter.title}
                </h3>
                <button
                  onClick={() => window.location.href = chapter.link}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  PDF দেখুন
                </button>
              </div>
            </div>

            {/* Bottom Title */}
            <h4 className="text-center text-green-900 font-semibold text-lg sm:text-xl mt-3">
              {chapter.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pdfall1;
