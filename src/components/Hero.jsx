import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "I am a Developer",
      "I am an Engineer",
      "I am a Designer",
      "I am a Problem Solver",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex min-h-screen bg-[#0C0C0C] text-white">
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h1 className="text-5xl font-bold mt-2">
          HELLO ,{" "}
          <span className="text-gray-300">
            {text}
            <Cursor cursorColor="red" />
          </span>
        </h1>
        <p className="mt-4 text-gray-400 hover:text-white transition">
          I’m Ankit Kumar, a passionate frontend developer specializing in React,
          JavaScript, and Tailwind CSS. I love building clean, modern, and
          responsive web applications that deliver great user experiences.
          Alongside coding, I’m a national-level 400m sprinter, bringing
          discipline, speed, and dedication from the track into my development
          journey.
        </p>

        <div className="mt-6 flex space-x-4">
          <a href="https://drive.google.com/file/d/1lOQjZirGeppZgU3AAqm_4TpQqFsQHYLL/view?usp=drivesdk " className="px-6 py-2 border border-white hover:bg-white hover:text-black transition duration-2000">
            My Resume
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-2 border border-white hover:bg-white hover:text-black transition duration-2000"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1514790193030-c89d266d5a9d"
          alt="hero"
          className="w-full h-screen object-cover"
        />
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg text-center w-80">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-400 mb-4">Choose a way to connect 🔗🔗</p>

            <div className="space-y-3">
              <a
                href="mailto:kumarankit42131@gmail.com"
                className="block w-full px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
              >
                📧 Email Me
              </a>
              <a
                href="https://wa.me/+916203939251"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition"
              >
                 WhatsApp
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
