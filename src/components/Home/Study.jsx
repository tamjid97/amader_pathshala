import React from "react";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Study = () => {
  const cards = [
    {
      title: "মুখস্ত নয়, বুঝে পড়া",
      description:
        "এখানে পড়াশোনা মানে শুধু বই পড়া নয়—বুঝে শেখা। প্রতিটি টপিক ধাপে ধাপে ব্যাখ্যা করা হয়, যাতে শিক্ষার্থীরা আত্মবিশ্বাসের সাথে নিজে নিজে চিন্তা করতে পারে।",
      color: "from-green-400 via-green-500 to-green-600",
      icon: BookOpenIcon,
      iconBg: "bg-green-500",
    },
    {
      title: "সাপ্তাহিক পরীক্ষা",
      description:
        "প্রতিটি সপ্তাহে পড়ানো বিষয়ের উপর সাপ্তাহিক পরীক্ষা নেওয়া হয়, যাতে শিক্ষার্থীরা নিজের অগ্রগতি নিজেই বুঝতে পারে এবং ভুলগুলো ঠিক করার সুযোগ পায়।",
      color: "from-blue-400 via-blue-500 to-blue-600",
      icon: CheckCircleIcon,
      iconBg: "bg-blue-500",
    },
    {
      title: "ব্যাকআপ ক্লাস",
      description:
        "ক্লাস মিস মানেই পিছিয়ে পড়া নয়। সপ্তাহে তিন দিন ব্যাকআপ ক্লাসের মাধ্যমে প্রতিটি টপিক আবার বুঝিয়ে দেওয়া হয়।",
      color: "from-purple-400 via-purple-500 to-purple-600",
      icon: ClockIcon,
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-green-50 py-20 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-16"
      >
        আমাদের অধ্যয়ন পদ্ধতি
      </motion.h1>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
      >
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -12,
                boxShadow:
                  "0px 25px 50px -12px rgba(0,0,0,0.25)",
              }}
              className="bg-white rounded-3xl p-10 flex flex-col items-center text-center transition-all"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className={`p-5 rounded-full mb-6 ${card.iconBg} shadow-xl`}
              >
                <Icon className="h-10 w-10 text-white" />
              </motion.div>

              {/* Title */}
              <h2
                className={`text-xl lg:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${card.color}`}
              >
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Study;
