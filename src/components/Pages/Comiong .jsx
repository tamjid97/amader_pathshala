import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Coming = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg text-center"
      >
        {/* Emoji Icon */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-7xl mb-6"
        >
          🚀
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          শীঘ্রই আসছে!
        </h1>

        {/* Subtitle / Description */}
        <p className="text-gray-600 text-lg mb-8">
          আমরা নতুন ফিচার নিয়ে আসছি। কিছুদিন অপেক্ষা করুন এবং হোম পেজে ফিরে যান।  
          আপনার শেখার অভিজ্ঞতা আরও রোমাঞ্চকর হবে! ✨📚
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            🏠 হোমে ফিরে যান
          </button>

          <button
            onClick={() => window.location.reload()}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            🔄 রিফ্রেশ করুন
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Coming;
