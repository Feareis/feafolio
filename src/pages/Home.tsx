import React from "react";
import LightResume from "../components/pages/home/LightResume";
import BentoHero from "../components/pages/home/BentoHero";


const Home = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-between py-10 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 z-10 w-[80%]">
        <LightResume />
        <BentoHero />
      </div>
    </section>
  );
}

export default Home
