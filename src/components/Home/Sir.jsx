import React from "react";
import sirimg from "../../assets/462133254_1046311946972314_2939793844339582756_n.jpg";

const Sir = () => {
  return (
    <div className="mt-5 bg-green-50 flex flex-col items-center justify-center p-6">

      {/* Page Title */}
      <h1 className="text-3xl lg:text-5xl font-bold text-green-800 mb-10 text-center">
        শিক্ষার্থীদের আস্থার নাম
      </h1>

      {/* Card Container */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full transform transition duration-500 hover:scale-105 hover:shadow-3xl">

        {/* Image Section */}
        <div className="relative">
          <img src={sirimg} alt="Founder" className="w-full h-72 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h2 className="text-xl lg:text-2xl font-bold text-white">
              Sarfaraz Islam
            </h2>
            <p className="text-gray-200">Founder: Amader Pathshala</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6 text-center">
          <p className="text-gray-700 text-lg lg:text-xl italic">
            "শিক্ষা হলো আলো, যা অন্ধকারের মধ্যেও পথ দেখায়। আমাদের লক্ষ্য শিক্ষার্থীদের সর্বোত্তম সুযোগ ও জ্ঞান প্রদান করা।"
          </p>

          <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            View Details
          </button>
        </div>

      </div>

    </div>
  );
};

export default Sir;
