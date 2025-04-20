import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiJsonwebtokens,
  SiSocketdotio,
} from "react-icons/si";
import {
  MdOutlineSportsKabaddi,
  MdTravelExplore,
  MdDraw,
} from "react-icons/md";
import { GiBookshelf, GiFilmProjector, GiTechnoHeart } from "react-icons/gi";

const skills = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
  { name: "RESTful APIs", icon: <FaFigma /> },
  { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },
];

const hobbies = [
  { name: "Exploring new technologies", icon: <GiTechnoHeart /> },
  { name: "Open-source contributions", icon: <FaGithub /> },
  { name: "Sketching and digital art", icon: <MdDraw /> },
  { name: "Swimming & Kho-Kho", icon: <MdOutlineSportsKabaddi /> },
  { name: "Watching Studio Ghibli films", icon: <GiFilmProjector /> },
  { name: "Reading technical blogs", icon: <GiBookshelf /> },
  { name: "Traveling to serene places", icon: <MdTravelExplore /> },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-10 md:py-16 space-y-10 md:-mt-15">
      <h1 className="text-3xl md:text-3xl font-extrabold text-center md:text-left w-full tracking-wider lg:ml-105">
        About Me
      </h1>

      <div className="max-w-4xl text-base md:text-lg leading-relaxed space-y-5 md:space-y-6 text-center md:text-left">
        <p>
          I’m Shreyansh Chaurasia — a Full Stack Web Developer from Noida,
          India. I’m passionate about transforming creative ideas into seamless,
          user-friendly web applications.
        </p>
        <p>
          I specialize in the MERN stack and am always keen to explore new
          frameworks, libraries, and design approaches. Coding is both my
          profession and my art, and I’m constantly learning, evolving, and
          pushing boundaries.
        </p>
        <p>
          Besides tech, I enjoy sports, sketching, and letting nature and
          animations (especially Studio Ghibli) inspire my creativity.
        </p>
      </div>

      <div className="w-full max-w-4xl mt-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 py-4 rounded-2xl shadow-md text-center text-sm md:text-base font-medium hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="text-2xl md:text-3xl mb-2">{skill.icon}</div>
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mt-5 mb-30">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-15">
          Hobbies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl shadow-md text-center text-sm md:text-base font-medium hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="text-2xl md:text-3xl mb-2">{hobby.icon}</div>
              {hobby.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
