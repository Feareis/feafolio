import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../../assets/profile_pic.jpg";
import { IdCard, ScrollText, UserSearch, Linkedin, Github } from "lucide-react";

// Container animation: applies stagger between children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each item fades and slides in
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Bento-style hero grid with animated cards for profile, links, and socials
const BentoHero = () => {
  return (
    <div className="flex w-1/2 justify-center">
      <motion.div
        className="w-full grid gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-3 gap-4 auto-rows-[120px] text-gray-400">
          {/* Profile picture */}
          <motion.a
            href="/about"
            variants={itemVariants}
            className="rounded-[35px] flex justify-center items-center bg-transparent overflow-visible group cursor-pointer"
          >
            <img
              src={profilePic}
              alt="profile-pic"
              className="w-[95px] h-[95px] lg:w-[120px] lg:h-[120px] rounded-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
          </motion.a>

          {/* Contact link */}
          <motion.a
            href="/contact"
            variants={itemVariants}
            className="row-span-2 gap-1 rounded-tl-[35px] rounded-r-[35px] flex flex-col justify-center items-center bg-[#1a1b1e] border border-gray-700/40 shadow-lg hover:text-lime-500/70 font-semibold cursor-pointer transition-all duration-500 hover:scale-102"
          >
            <UserSearch size={32} />
            <span className="text-base uppercase font-bold">Contact</span>
          </motion.a>

          {/* CV download (external) */}
          <motion.a
            href="/experience"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-1 rounded-br-[35px] rounded-t-[35px] h-full justify-center items-center bg-[#1a1b1e] border border-gray-700/40 shadow-lg hover:text-lime-500/70 cursor-pointer group transition-all duration-500 hover:scale-102">
              <ScrollText size={32} />
              <span className="text-base uppercase font-bold">Mon Experience</span>
            </div>
          </motion.a>

          {/* About / read more */}
          <motion.a
            href="/about"
            variants={itemVariants}
            className="rounded-[35px] flex flex-col gap-1 justify-center items-center bg-[#1a1b1e] border border-gray-700/40 shadow-lg hover:text-lime-500/70 font-bold cursor-pointer transition-all duration-500 hover:scale-102"
          >
            <IdCard size={32} />
            <span className="text-base uppercase">En savoir plus</span>
          </motion.a>

          {/* Side projects link */}
          <motion.a
            href="/work"
            variants={itemVariants}
            className="row-span-2 rounded-tr-[45px] rounded-b-[45px] flex flex-col gap-1 justify-center items-center bg-[#1a1b1e] border border-gray-700/40 shadow-lg hover:text-lime-500/70 font-semibold cursor-pointer transition-all duration-500 hover:scale-102"
          >
            <IdCard size={32} />
            <span className="text-lg font-bold uppercase">Projets</span>
          </motion.a>

          {/* LinkedIn external link */}
          <motion.a
            href="https://www.linkedin.com/in/varei/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="rounded-b-[35px] rounded-l-[35px] flex justify-center items-center bg-[#1a1b1e] border border-gray-700/40 shadow-lg hover:text-lime-500/70 cursor-pointer transition-all duration-500 hover:scale-102"
          >
            <Linkedin size={36} />
          </motion.a>

          {/* GitHub external link */}
          <motion.a
            href="https://github.com/feareis"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="rounded-b-[35px] rounded-r-[35px] flex justify-center items-center bg-[#1a1b1e] border border-gray-700/40 shadow-lg hover:text-lime-500/70 cursor-pointer transition-all duration-500 hover:scale-102"
          >
            <Github size={36} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default BentoHero;
