import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../../assets/profile_pic.jpg";
import { IdCard, ScrollText, Linkedin, Github } from "lucide-react";


const BentoHero = () => {
  return (
    <div className="flex w-full lg:w-1/2 justify-center">
      <div className="w-full lg:w-10/12 grid gap-3">
        <div className="grid grid-cols-3 gap-3 auto-rows-[95px] lg:auto-rows-[120px] text-gray-400">
          {/* Profile Pic */}
          <div className="rounded-[35px] flex justify-center items-center bg-transparent overflow-visible group cursor-pointer">
            <img
              src={profilePic}
              alt="profile-pic"
              className="w-[95px] h-[95px] lg:w-[120px] lg:h-[120px] rounded-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
          </div>

          {/* Experience */}
          <div className="row-span-2 rounded-tl-[35px] rounded-r-[35px] flex flex-col justify-center items-center bg-white/10 hover:text-lime-500/70 font-semibold cursor-pointer transition-all duration-500">
            <span className="text-[20px] lg:text-[30px] font-black">2.0</span>
            <span className="text-base">yr. hands-on</span>
          </div>

          {/* CV */}
          <a href="/doc/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col gap-1 rounded-br-[35px] rounded-t-[35px] flex h-full justify-center items-center bg-white/10 hover:text-lime-500/70 cursor-pointer group transition-all duration-500">
              <ScrollText />
              <span className="text-base uppercase font-bold">Mon CV</span>
            </div>
          </a>

          {/* Read Me */}
          <div className="rounded-[35px] flex flex-col gap-1 justify-center items-center bg-white/10 hover:text-lime-500/70 font-bold cursor-pointer transition-all duration-500">
            <IdCard />
            <span className="text-base uppercase">En savoir plus</span>
          </div>

          {/* Side Projects (vertical) */}
          <div className="row-span-2 rounded-tr-[45px] rounded-b-[45px] flex justify-center items-center bg-white/10 hover:text-lime-500/70 font-semibold cursor-pointer transition-all duration-500">
            <span className="text-base writing-vertical uppercase rotate-270">Projets personnel</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/varei/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-b-[35px] rounded-l-[35px] flex justify-center items-center bg-white/10 hover:text-lime-500/70 cursor-pointer transition-all duration-400"
          >
            <Linkedin size={36} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/feareis"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-b-[35px] rounded-r-[35px] flex justify-center items-center bg-white/10 hover:text-lime-500/70 cursor-pointer transition-all duration-500"
          >
            <Github size={36} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BentoHero
