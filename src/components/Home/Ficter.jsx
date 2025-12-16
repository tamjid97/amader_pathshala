import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    id: "practice",
    title: "অধ্যায়ভিত্তিক",
    subtitle: "Practice Sheet",
    icon: "📝", // 📄 → 📝 প্রফেশনাল লেখা আইকন
  },
  {
    id: "mcq",
    title: "MCQ",
    subtitle: "Master Book",
    icon: "📚", // 📘 → 📚 look more professional
  },
  {
    id: "qa",
    title: "Q&A",
    subtitle: "(জ্ঞানমূলক+অনুধাবন)",
    icon: "🗣️", // 💬 → 🗣️ professional discussion look
  },
  {
    id: "board",
    title: "Board Question",
    subtitle: "Analysis & Suggestion",
    icon: "📈", // 📊 → 📈 look analytical
  },
  {
    id: "course",
    title: "উইকলি ও",
    subtitle: "মেগা এক্সাম",
    icon: "🎓", // 👨‍🏫 → 🎓 professional education icon
  },
  {
    id: "pdf",
    title: "দাগানো বইয়ের",
    subtitle: "PDF",
    icon: "📖", // 📑 → 📖 book icon
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Ficter = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "practice") navigate("pactis");
    else if (id === "board") navigate("bordan");
    else if (id === "mcq") navigate("Mcq");
    else if (id === "qa") navigate("qnapdf");
    else if (id === "course") navigate("Exam");
    else if (id === "pdf") navigate("HSC");
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold text-green-700 mb-1"
        >
          "খুলনায় সবচেয়ে সমৃদ্ধ বায়োলজি,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl font-semibold text-green-700 mb-5"
        >
          লজিক ও বেসিক কনসেপ্ট-এর জগতে স্বাগতম"
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-12"
        >
          ব্যাচ ফিচার
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.button
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(item.id)}
              className="flex items-center gap-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl px-6 py-5 shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <span className="text-4xl text-yellow-800 drop-shadow-md">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-lg">{item.title}</p>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ficter;
