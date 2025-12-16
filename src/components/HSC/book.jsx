import React from "react";
import { Link } from "react-router-dom";
import bio1 from "../../assets/book1.jpeg";
import bio2 from "../../assets/book2.jpeg";

const Book = () => {
  const books = [
    { id: 1, title: "বায়োলজি প্রথম পত্র", img: bio1, link: "/AllpdfPart1" },
    { id: 2, title: "বায়োলজি দ্বিতীয় পত্র", img: bio2, link: "/AllpdfPart2" },
  ];

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-12">
        স্পেশাল দাগানো বই
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-[400px] sm:h-[450px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4">
                {book.title}
              </h3>
              <Link
                to={book.link}  // React Router route ব্যবহার
                className="px-6 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition-colors duration-300"
              >
                সকল অধ্যায় PDF
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Book;
