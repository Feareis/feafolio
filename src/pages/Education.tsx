import React from "react";
import EducationItem from "../components/pages/education/EducationItem";
import B3 from "../assets/bachelor.png";
import DUT from "../assets/dut.png";
import BAC from "../assets/bac.png";

// List of education experiences to display in timeline
const experiences = [
  {
    date: "Septembre 2024 - Janvier 2025",
    title: "Bachelor DevOps & IA",
    school: "EPSI",
    location: "Saint-Martin-d'Hères (38400)",
    description:
      "Formation suivie partiellement, avec acquisition de compétences en développement fullstack et pratiques DevOps.",
    img: B3,
  },
  {
    date: "Septembre 2018 - Juin 2021",
    title: "DUT Réseaux & Télécommunications",
    school: "Université Grenoble Alpes",
    location: "Saint-Martin-d'Hères (38400)",
    img: DUT,
  },
  {
    date: "Septembre 2017 - Juin 2018",
    title: "Bac STI2D – Spécialité SIN",
    school: "Lycée Ferdinand Buisson",
    location: "Voiron (38500)",
    img: BAC,
  },
];

// Education timeline component
const Timeline = () => {
  return (
    <div className="w-1/2 mx-auto py-20">
      {/* Vertical list of education items */}
      <div className="relative flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <EducationItem
            key={i}
            index={i}
            img={exp.img}
            title={exp.title}
            date={exp.date}
            school={exp.school}
            location={exp.location}
            description={exp.description}
            current={exp.current}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
