import React from "react";
import LightResume from "../components/pages/home/LightResume";
import BentoHero from "../components/pages/home/BentoHero";


const Home = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-16">
      <div className="flex flex-row items-center justify-center gap-12 z-10 w-[85%]">
        <LightResume />
        <BentoHero />
      </div>
    </section>
  );
}

export default Home
