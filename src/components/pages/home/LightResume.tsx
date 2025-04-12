import React from "react";
import { Link } from "react-router-dom";

const HighLeftSection = () => {
  return (
    <div className="w-full lg:w-1/2 px-4">
      <div>
        {/* Open to Work */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-white/10 px-3 py-2 rounded-lg cursor-pointer mb-5"
        >
          <span className="inline-block bg-lime-500/80 w-2 h-2 rounded-full shadow-2xl shadow-lime-500/80 animate-pulse" />
          <span className="text-lime-500/80 font-bold text-xs uppercase">Open to work</span>
        </Link>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold leading-snug text-gray-400/70 mb-8">
          Bonjour & Bienvenue sur mon espace!
        </h1>

        {/* Description */}
        <p className="text-lg leading-relaxed tracking-normal font-semibold mb-3 text-gray-400">
          Je m'appelle Valentin et je suis{" "}
          <span className="text-lime-600">Administrateur Système & Réseaux</span> passionné par le{" "}
          <span className="text-lime-600">développement web</span>. Je code à mes heures perdues depuis plusieurs années.
        </p>
        <p className="text-lg leading-relaxed tracking-normal font-semibold text-gray-400">
          Mon background me permet d’aborder les projets avec une vision complète à la fois côté{" "}
          <span className="text-lime-600">Infra</span> & <span className="text-lime-600">Dev</span>.
        </p>
      </div>
    </div>
  );
}

export default HighLeftSection
