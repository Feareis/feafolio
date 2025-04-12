import React from "react";
import mailAnimation from "../../../assets/mail_animation.mp4";

// Contact section with animated visual and email call-to-action
const Contact = () => {
  return (
    <section
      id="contact-section"
      className="relative flex flex-row items-center justify-center gap-12 py-16"
    >
      {/* Animated video on the left */}
      <div className="flex h-full w-[180px] justify-center">
        <div className="border border-lime-600/10 rounded-2xl p-[0.35rem]">
          <div className="w-[200px] h-[200px] border border-lime-600/10 rounded-xl overflow-hidden">
            <video
              src={mailAnimation}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
              onEnded={(e) => e.currentTarget.pause()} // Pause when animation ends
            />
          </div>
        </div>
      </div>

      {/* Right side: Text & CTA */}
      <div className="flex flex-col w-full px-4">
        <h1 className="text-4xl leading-snug text-lime-600 font-extrabold mb-5">
          Eureka 💡 !
        </h1>

        <h2 className="text-base text-gray-400 leading-relaxed tracking-normal font-semibold">
          Tu as une question, une idée de projet ou juste envie de dire bonjour ?{" "}
          <a
            className="underline underline-offset-4 text-lime-600 hover:text-lime-500"
            href="mailto:v.reisse@protonmail.com?subject=Hello%20Valentin&body=Salut%20Valentin,%20je%20voudrais%20échanger%20avec%20toi%20au%20sujet%20d’un%20projet."
          >
            Envoie-moi un mail
          </a>{" "}
          !
        </h2>
      </div>
    </section>
  );
};

export default Contact;
