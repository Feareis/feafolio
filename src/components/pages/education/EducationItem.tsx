import React from "react";
import { motion } from "framer-motion";

type EducationItemProps = {
  img: string;
  title: string;
  date: string;
  school: string;
  location: string;
  description?: string;
  index: number;
  current?: boolean;
};

// Container animation (staggered with index)
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Content fade-in animation
const contentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
};

// Single education timeline item with animation
const EducationItem = ({
  img,
  title,
  date,
  school,
  location,
  description = "",
  index,
}: EducationItemProps) => {
  return (
    <motion.div
      className="relative flex gap-4 items-center gap-8 p-3 bg-[#1a1b1e] border border-gray-700/40 rounded-xl shadow-xl"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      custom={index} // used for staggered animation
    >
      {/* Left: image/logo */}
      <motion.div
        className="flex-shrink-0 flex ml-4 py-2 items-center justify-center"
        variants={contentVariant}
      >
        <img
          src={img}
          alt={school}
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      {/* Right: education content */}
      <motion.div
        className="flex flex-col text-lg text-gray-300"
        variants={contentVariant}
      >
        <p className="font-bold text-gray-300/80">{title}</p>
        <p className="text-base text-gray-400 italic mb-1">{date}</p>

        <p className="text-gray-500">
          <span className="text-lime-500/70">{school}</span>,{" "}
          <span>{location}</span>
        </p>

        <p className="mt-1 text-gray-500">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default EducationItem;
