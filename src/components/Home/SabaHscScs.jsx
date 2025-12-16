import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 🔹 import useNavigate

const programs = [
  {
    id: "hsc26",
    title: "HSC",
    year: "26",
    subtitle: "HSC ২৬",
    gradient: "from-sky-300 via-sky-500 to-indigo-700",
    glow: "shadow-[0_0_45px_rgba(56,189,248,0.45)]",
    icon: "🏆",
    route: "HSC", // 🔹 route যোগ করা
  },
  {
    id: "hsc27",
    title: "HSC",
    year: "27",
    subtitle: "HSC ২৭",
    gradient: "from-sky-300 via-sky-500 to-indigo-700",
    glow: "shadow-[0_0_45px_rgba(56,189,248,0.45)]",
    icon: "🎯",
    route: "HSC",
  },
  {
    id: "ssc26",
    title: "SSC",
    year: "26",
    subtitle: "SSC ২৬",
    gradient: "from-orange-300 via-amber-500 to-orange-600",
    glow: "shadow-[0_0_45px_rgba(251,146,60,0.45)]",
    icon: "🎒",
    route: "/ssc-26",
  },
  {
    id: "ssc27",
    title: "SSC",
    year: "27",
    subtitle: "দশম শ্রেণি",
    gradient: "from-orange-300 via-amber-500 to-orange-600",
    glow: "shadow-[0_0_45px_rgba(251,146,60,0.45)]",
    icon: "📘",
    badge: "২০২৫ সালে ভর্তি চলছে",
    route: "/ssc-27",
  },
  {
    id: "class9",
    title: "CLASS",
    year: "9",
    subtitle: "৯ম শ্রেণি",
    gradient: "from-emerald-300 via-emerald-500 to-teal-700",
    glow: "shadow-[0_0_45px_rgba(16,185,129,0.45)]",
    icon: "📚",
    badge: "২০২৫ সালে ভর্তি চলছে",
    route: "/class-9",
  },
  {
    id: "class678",
    title: "CLASS",
    year: "6–8",
    subtitle: "৬ষ্ঠ–৮ম শ্রেণি",
    gradient: "from-emerald-300 via-emerald-500 to-teal-700",
    glow: "shadow-[0_0_45px_rgba(16,185,129,0.45)]",
    icon: "🚌",
    badge: "২০২৫ সালে ভর্তি চলছে",
    route: "/class-6-8",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const ProgramCard = ({ item, index, onClick }) => {
  return (
    <motion.button
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onClick(item.route)} // 🔹 route দিয়ে navigate
      className="group relative focus:outline-none"
    >
      {/* Outer frame */}
      <div
        className={`relative w-[170px] h-[170px] rounded-[32px] bg-black/60 p-[12px] transition-all duration-700 ease-out ${item.glow}`}
      >
        {/* Inner panel */}
        <div
          className={`relative w-full h-full rounded-[24px] bg-gradient-to-b ${item.gradient} flex flex-col items-center justify-center text-white overflow-hidden`}
        >
          {/* Light sweep effect */}
          <div className="pointer-events-none absolute -top-1/2 left-0 w-full h-full bg-white/20 rotate-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

          <span className="text-xs font-semibold tracking-[0.35em] opacity-90">
            {item.title}
          </span>
          <span className="mt-1 text-[46px] font-extrabold leading-none drop-shadow-lg">
            {item.year}
          </span>
          <span className="mt-2 text-xl">{item.icon}</span>
        </div>
      </div>

      {/* Subtitle & badge */}
      <div className="mt-5 text-center">
        <p className="font-semibold tracking-wide">{item.subtitle}</p>

        {item.badge && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-block mt-3 px-5 py-1.5 text-[11px] rounded-full bg-red-600/90 text-white shadow-xl"
          >
            {item.badge}
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const AcademicProgramsHero = () => {
  const navigate = useNavigate(); // 🔹 useNavigate hook

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          <span className="text-green-800 bg-clip-text">শেখা হোক আনন্দে!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-green-700 mb-20"
        >
          এক জায়গায় স্কুল ও কলেজের সম্পূর্ণ প্রস্তুতি!
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 justify-items-center">
          {programs.map((item, index) => (
            <ProgramCard
              key={item.id}
              item={item}
              index={index}
              onClick={handleNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsHero;
