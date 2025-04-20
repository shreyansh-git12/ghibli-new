import React from "react";
import resume from "../assets/resume.png";

const ResumePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-18 py-10 md:-mt-31 mb-8">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider md:text-left text-center">
          Resume
        </h1>
        <p className="mt-4 md:mt-0 text-xs md:text-sm tracking-widest md:text-right text-center">
          🎴 Simplified & Story-like.
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              Shreyansh Chaurasia
            </h2>
            <p className="text-sm md:text-base">Full Stack Web Developer</p>
            <p className="text-sm">📍 Noida, India</p>
            <p className="text-sm">
              📧 shreyanshchaurasia@gmail.com | 📞 7800312158
            </p>
          </div>

          <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Experience
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>MERN Stack Developer Intern — XYZ Company (2024)</li>
              <li>Freelance Full Stack Projects — Self-Employed</li>
            </ul>
          </div>

          <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Education</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>Bachelor of Technology (B.Tech) — Computer Science</li>
              <li>JSS Academy of Technical Education, Noida</li>
            </ul>
          </div>

          <div className="rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Skills</h2>
            <p className="text-sm md:text-base">
              MongoDB, Express.js, React.js, Node.js, JavaScript, HTML5, CSS3,
              Tailwind, Redux, Firebase, GitHub, REST APIs, JWT, Socket.io.
            </p>
          </div>
        </div>

        {/* Right Side Image + Download */}
        <div className="flex flex-col items-center gap-6 flex-shrink-0">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm md:text-base"
          >
            📄 View My Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
