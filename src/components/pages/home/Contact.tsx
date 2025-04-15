import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mailAnimation from "../../../assets/mail_animation.mp4";

// Contact component with animated fake terminal output
const Contact = () => {
  const [commandText, setCommandText] = useState(""); // Simulated typed command
  const [showResponse, setShowResponse] = useState(false); // Reveal server response

  const fullCommand = ">  sudo netstat -plnt | grep ':587'"; // Fake CLI command

  // Typing animation logic
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullCommand.length) {
        setCommandText((prev) => prev + fullCommand.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowResponse(true); // Show simulated response after command finishes
        }, 400);
      }
    }, 45);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <section
      id="contact-section"
      className="relative flex flex-row w-full items-center justify-center gap-16 py-16"
    >
      {/* Left side: video animation wrapped in mailto link */}
      <div className="flex h-full flex-col w-[180px] justify-center items-center relative">
        <div className="border border-lime-600/10 rounded-2xl p-[0.35rem] relative">
          <div className="w-[200px] h-[200px] border border-lime-600/10 rounded-xl relative">
            <a
              href="mailto:v.reisse@protonmail.com?subject=Hello%20Valentin&body=Salut%20Valentin,%20je%20voudrais%20échanger%20avec%20toi%20au%20sujet%20d’un%20projet."
              className="block w-full h-full rounded-xl overflow-hidden"
              title="Envoyer un mail à Valentin"
            >
              <video
                src={mailAnimation}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
                onEnded={(e) => e.currentTarget.pause()} // Pause after animation ends
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right side: Fake terminal with command + response */}
      <div className="relative w-[30%] px-6 bg-[#1a1b1e] border border-gray-700/40 rounded-2xl shadow-lg p-6 my-2 font-mono text-sm text-lime-600">
        {/* Invisible line to preserve layout spacing */}
        <div className="invisible">{fullCommand}</div>

        {/* Typing animation displayed here */}
        <div className="absolute top-6 left-6 text-base font-bold">
          {commandText}
          {commandText.length < fullCommand.length && (
            <span className="animate-pulse text-gray-500">_</span>
          )}
        </div>

        {/* Fake response after typing completes */}
        {showResponse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-gray-400"
          >
            <p>
              tcp &nbsp;&nbsp;&nbsp;&nbsp;0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 0.0.0.0:587
              &nbsp;&nbsp;&nbsp;&nbsp;0.0.0.0:* &nbsp;&nbsp;&nbsp;&nbsp;LISTEN
              &nbsp;&nbsp;&nbsp;&nbsp;-
            </p>
            <p className="text-lime-500 mt-1">
              SMTP port is open — ready to receive your mail
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
