import React from "react";
import { motion } from "framer-motion";

import PicSlider from "./Home/PicSlider";
import SabaHscScs from "./Home/SabaHscScs";
import Sir from "./Home/Sir";
import Study from "./Home/Study";
import ClassRum from "./Home/ClassRum";
import Fidbac from "./Home/Fidbac";
import Extrasection from "./Home/Extrasection";
import NewMember from "./Home/NewMamber";
import Location from "./Home/Location";
import Ficter from "./Home/Ficter";
import Damoclass from "./Home/Damoclass";

/* Reusable animation variant */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const HomeMain = () => {
  return (
    <div className="overflow-hidden">
      {/* Slider */}
      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <PicSlider />
      </motion.div>

      {/* Academic Services */}
      <motion.div
        className="flex justify-center -mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <SabaHscScs />
      </motion.div>

      {/* Feature */}
      <motion.div
        className="-mt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Ficter />
      </motion.div>

      {/* Demo Class */}
      <motion.div
        className="-mt-15"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Damoclass />
      </motion.div>

      {/* Sir */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Sir />
      </motion.div>

      {/* Study System */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Study />
      </motion.div>

      {/* Class Room */}
      <motion.div
        className="-mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <ClassRum />
      </motion.div>

      {/* Feedback */}
      <motion.div
        className="-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Fidbac />
      </motion.div>

      {/* Extra Section */}
      <motion.div
        className="-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Extrasection />
      </motion.div>

      {/* New Member */}
      <motion.div
        className="-mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <NewMember />
      </motion.div>

      {/* Location */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Location />
      </motion.div>
    </div>
  );
};

export default HomeMain;
