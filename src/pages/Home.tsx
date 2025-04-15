import React from "react";
import LightResume from "../components/pages/home/LightResume";
import BentoHero from "../components/pages/home/BentoHero";
import Contact from "../components/pages/home/Contact";

// Home page component assembling hero + contact section
const Home = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-between py-36 gap-32">
      {/* Top section */}
      <div className="flex flex-row justify-between items-center w-full gap-12 z-10">
        <LightResume />
        <BentoHero />
      </div>

      {/* Bottom section */}
      <div className="flex flex-row justify-center items-start w-full gap-12 z-10">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
