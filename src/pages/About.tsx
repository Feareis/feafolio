import React from "react";
import { motion } from "framer-motion";
import About1 from "../assets/about_1.png";
import About2 from "../assets/about_2.png";
import About3 from "../assets/about_3.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
}

const About = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-between py-16 gap-18">
      <section className="w-full flex flex-row items-center gap-10">
        <div className="w-2/3 space-y-6 text-base text-gray-500/70">
          <motion.h2
            className="font-extrabold text-gray-400/80 uppercase mb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Qui suis-je...
          </motion.h2>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0.1}>Je m'appelle Valentin, un passionné d'informatique depuis toujours ; et comme beaucoup, tout a commencé avec des jeux vidéo.</motion.p>
            <motion.p variants={fadeInUp} custom={0.2}>
              En grandissant entre les univers de{" "}
              <span className="font-bold text-gray-500">Minecraft</span> et <span className="font-bold text-gray-500">GTA V</span>, j’ai très vite été fasciné par{" "}
              <span className="font-bold text-lime-500/50">comment ça marche derrière</span>.
            </motion.p>
            <motion.p variants={fadeInUp} custom={0.3}>
              Ça m’a donné envie de <span className="font-bold text-lime-500/50">d’aller plus loin</span>.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0.4}>
              Côté études, j’ai suivi un{" "}
              <span className="text-lime-500/70 font-extrabold bg-[#1a1b1e] px-2 py-0.5 rounded-md border border-gray-700/40">Bac STI2D option SIN</span>, puis un{" "}
              <span className="text-lime-500/70 font-extrabold bg-[#1a1b1e] px-2 py-0.5 rounded-md border border-gray-700/40">DUT Réseaux & Télécommunications</span>.
            </motion.p>
            <motion.p variants={fadeInUp} custom={0.5}>
              Cela m’a permis de consolider ma base technique et glisser petit à petit vers le développement.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0.6}>
              J’ai ensuite commencé une licence pour devenir{" "}
              <span className="text-lime-500/70 font-extrabold bg-[#1a1b1e] px-2 py-0.5 rounded-md border border-gray-700/40">Développeur en Intelligence Artificielle</span>, mais je n’ai pas pu aller au bout.
            </motion.p>
            <motion.p variants={fadeInUp} custom={0.7}>
              Malgré tout, cette phase m’a permis de renforcer{" "}
              <span className="font-bold text-lime-500/50">ma volonté de créer des outils intelligents et utiles</span>.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="border border-lime-600/10 rounded-2xl p-[0.20rem] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <div className="w-[300px] border border-lime-600/10 rounded-xl relative">
            <img
              src={About1}
              className="w-[300px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="w-full flex flex-row-reverse items-center justify-evenly">
        <div className="w-2/3 space-y-6 text-base text-gray-500/70">
          <motion.h2
            className="font-extrabold text-gray-400/80 uppercase mb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1.1}
          >
            Ce que je cherche à construire
          </motion.h2>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={1.2}>
              À côté de ça, j’ai un vrai attrait pour la{" "}
              <span className="font-bold text-lime-500/70">cybersécurité</span> et{" "}
              <span className="font-bold text-lime-500/70">l’OSINT</span>, non pas en tant qu’expert, mais par{" "}
              <span className="font-semibold text-gray-400">curiosité technique</span>.
            </motion.p>
            <motion.p variants={fadeInUp} custom={1.3}>
              J’aime comprendre{" "}
              <span className="font-semibold text-gray-400">comment les choses fonctionnent</span>,{" "}
              comment elles peuvent être détournées, ou exploitées.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={1.4}>
              Même si je ne suis pas toujours à jour sur les dernières actualités, je garde un œil sur ce qui se fait :{" "}
              <span className="font-semibold text-gray-400">je teste, je lis, j’explore</span> — simplement pour le{" "}
              <span className="font-bold text-lime-500/70">plaisir d’apprendre</span>.
            </motion.p>
            <motion.p variants={fadeInUp} custom={1.5}>
              Je reste attentif aux{" "}
              <span className="font-semibold text-gray-400">vulnérabilités, techniques émergentes</span>{" "}
              et nouveaux outils.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={1.6}>
              Comprendre les mécanismes, observer les comportements anormaux,{" "}
              <span className="font-semibold text-gray-400">automatiser certaines tâches</span> ou{" "}
              <span className="font-semibold text-gray-400">visualiser les systèmes</span> via des{" "}
              scripts ou dashboards...
            </motion.p>
            <motion.p variants={fadeInUp} custom={1.7}>
              C’est ce mix entre{" "}
              <span className="font-bold text-lime-500/60">réseau</span>,{" "}
              <span className="font-bold text-lime-500/60">dev</span> et{" "}
              <span className="font-bold text-lime-500/60">logique</span>{" "}
              qui me stimule au quotidien.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="border border-lime-600/10 rounded-2xl p-[0.20rem] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1.9}
        >
          <div className="w-[300px] border border-lime-600/10 rounded-xl relative">
            <img
              src={About2}
              className="w-[300px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="w-full flex flex-row items-center justify-around">
        <div className="w-2/3 space-y-6 text-base text-gray-500/70">
          <motion.h2
            className="font-extrabold text-gray-400/80 uppercase mb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Comment j'occupe mon temps libre
          </motion.h2>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={2.1}>
              Quand je ne suis pas en train d’apprendre ou d’explorer des sujets techniques, je prends plaisir à{" "}
              <span className="font-bold text-lime-500/70">développer des outils personnalisés</span>{" "}
              pour des communautés.
            </motion.p>
            <motion.p variants={fadeInUp} custom={2.2}>
              J’y conçois des{" "}
              <span className="font-semibold text-gray-400">dashboards</span>, des{" "}
              <span className="font-semibold text-gray-400">interfaces de gestion</span> ou des{" "}
              <span className="font-semibold text-gray-400">systèmes de suivi</span> adaptés aux besoins réels des joueurs et admins.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={2.3}>
              En parallèle, je m’intéresse de près aux outils en lien avec{" "}
              <span className="font-bold text-lime-500/70">l’OSINT</span>, je les teste, les décortique, et imagine{" "}
              <span className="font-semibold text-gray-400">ce que je pourrais créer de mieux</span>.
            </motion.p>
            <motion.p variants={fadeInUp} custom={2.4}>
              Mon objectif à long terme ? Sortir{" "}
              <span className="font-bold text-lime-500/70">mon propre outil OSINT</span> — un projet{" "}
              <span className="italic text-gray-300">utile, affûté, et pourquoi pas viral</span>.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={2.5}>
              En dehors de ça, je développe régulièrement des{" "}
              <span className="font-semibold text-gray-400">dashboards</span>,{" "}
              <span className="font-semibold text-gray-400">portfolios</span> ou autres projets persos pour{" "}
              <span className="font-bold text-lime-500/70">continuer à progresser</span> techniquement.
            </motion.p>
            <motion.p variants={fadeInUp} custom={2.6}>
              J’aime aussi analyser les solutions déjà existantes et chercher{" "}
              <span className="font-bold text-lime-500/70">des pistes d’amélioration</span> :
              une meilleure UX, une interface plus claire, ou simplement un outil plus pratique.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="border border-lime-600/10 rounded-2xl p-[0.20rem] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2.8}
        >
          <div className="w-[300px] border border-lime-600/10 rounded-xl relative">
            <img
              src={About3}
              className="w-[300px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About
