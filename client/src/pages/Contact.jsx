import React from "react";
import { FaPhone, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-18 py-10 md:-mt-24">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider md:text-left text-center">
          Contact Me
        </h1>
        <p className="mt-4 md:mt-0 text-xs md:text-sm tracking-widest md:text-right text-center">
          🐦 Let’s connect and collaborate!
        </p>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center">
          <p className="text-base md:text-lg font-semibold mb-2 flex items-center justify-center gap-2">
            <FaPhone /> Phone
          </p>
          <p className="text-sm md:text-base">7800312158</p>
        </div>

        <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center">
          <p className="text-base md:text-lg font-semibold mb-2 flex items-center justify-center gap-2">
            <MdEmail /> Email
          </p>
          <p className="text-sm md:text-base">jss.shreyansh@gmail.com</p>
        </div>

        <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center">
          <p className="text-base md:text-lg font-semibold mb-2 flex items-center justify-center gap-2">
            Social Links
          </p>
          <div className="flex justify-center gap-6 text-sm md:text-base">
            <a
              href="https://github.com/shreyansh-git12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shreyansh-chaurasia-739a8b360/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://x.com/ShreyanshC17989"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs md:text-sm tracking-widest text-center">
          Let’s build something magical together.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
