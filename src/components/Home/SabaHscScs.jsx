import React from "react";

const SabaHscScs = () => {
  return (
    <div>
  <div className="flex justify-center ">
           {/* Header */}
      <h1 className="text-3xl lg:text-5xl font-bold text-green-800  mb-10 text-center">
        আমাদের একাডেমিক সেবা
      </h1>
      </div>






    <div className="bg-green-50  flex flex-col items-center p-6 -mt-6">
    
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

        {/* HSC Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 text-center">
            <h2 className="text-2xl font-bold text-white">HSC Program</h2>
            <p className="text-white mt-2">2025 Biology Batch</p>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              এই প্রোগ্রামে HSC শিক্ষার্থীদের জন্য একাডেমিক সেবা, পরীক্ষা প্রস্তুতি, এবং রিভিশন মেটেরিয়াল দেওয়া হবে।
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Complete Syllabus Coverage</li>
              <li>Interactive Classes & Notes</li>
              <li>Mock Tests & Practice Questions</li>
            </ul>
            <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300">
              View Program
            </button>
          </div>
        </div>

        {/* SSC Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 text-center">
            <h2 className="text-2xl font-bold text-white">SSC Program</h2>
            <p className="text-white mt-2">2025 Biology Batch</p>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              SSC শিক্ষার্থীদের জন্য এই প্রোগ্রামে বেসিক এবং প্রফেশনাল বায়োলজি সাপোর্ট দেওয়া হবে।
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Basic Concepts Coverage</li>
              <li>Interactive Classes & Notes</li>
              <li>Weekly Quizzes & Practice</li>
            </ul>
            <button className="w-full bg-purple-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-purple-600 hover:shadow-lg transition duration-300">
              View Program
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default SabaHscScs;
