import React from "react";
import LightResume from "../components/pages/home/LightResume";
import BentoHero from "../components/pages/home/BentoHero";
import Contact from "../components/pages/home/Contact";

// Home page component assembling hero + contact section
const Home = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-between py-16 gap-28">
      {/* Top section with intro text and bento visual */}
      <div className="flex flex-row items-center justify-evenly gap-12 z-10 w-[85%]">
        <LightResume />
        <BentoHero />
      </div>

      {/* Bottom section with contact block */}
      <div className="flex flex-row items-center justify-evenly gap-12 z-10 w-[85%]">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
