import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Animation variants for container and children elements
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Animate children with delay between them
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// LightResume component used on homepage hero section
const LightResume = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Call-to-action badge linking to contact page */}
      <motion.div variants={itemVariants}>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-white/10 px-3 py-2 rounded-lg cursor-pointer mb-5"
        >
          {/* Animated green dot */}
          <span className="inline-block bg-lime-500/80 w-2 h-2 rounded-full shadow-2xl shadow-lime-500/80 animate-pulse" />
          {/* Label text */}
          <span className="text-lime-500/80 font-bold text-xs uppercase">
            Open to work
          </span>
        </Link>
      </motion.div>

      {/* Main welcome heading */}
      <motion.h1
        className="text-4xl font-extrabold leading-snug text-gray-300/70 mb-8"
        variants={itemVariants}
      >
        Bonjour & Bienvenue sur mon espace!
      </motion.h1>

      {/* Description paragraph with highlighted roles */}
      <div className="flex flex-col text-gray-400">
        <motion.p
          className="text-lg leading-relaxed tracking-normal font-semibold py-1 text-gray-400"
          variants={itemVariants}
        >
          Je m'appelle Valentin et je suis{" "}
          <span className="text-lime-500/70">
            Administrateur Système & Réseaux
          </span>{" "}
          passionné par le{" "}
          <span className="text-lime-500/70">développement</span>.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed tracking-normal font-semibold py-1 text-gray-400"
          variants={itemVariants}
        >
          Je code à mes heures perdues depuis plusieurs années.
        </motion.p>
      </div>

      {/* Additional paragraph about hybrid skills */}
      <motion.p
        className="text-lg leading-relaxed tracking-normal font-semibold py-8 text-gray-400"
        variants={itemVariants}
      >
        Basé à{" "}
        <span className="text-lime-500/70">Grenoble</span> en <span className="text-lime-500/70">France</span>.
      </motion.p>
    </motion.div>
  );
};

export default LightResume;
