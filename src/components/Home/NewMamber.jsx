// src/components/NewMember/NewMember.jsx
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/kaka.jpeg";
import img2 from "../../assets/mama.jpg";
import img3 from "../../assets/WhatsApp Image 2025-12-15 at 11.56.28 PM.jpeg";

const members = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
];

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

const NewMember = () => {
  return (
    <section className="py-20 ">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-green-900 mb-14"
      >
        নতুন সদস্যদের স্বাগতম উপহার
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow:
                  "0px 25px 50px -12px rgba(0,0,0,0.25)",
              }}
              className="relative w-full bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <motion.img
                src={member.img}
                alt="Gift"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-72 object-contain p-6"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default NewMember;
