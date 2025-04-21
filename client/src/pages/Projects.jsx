import React from "react";
import img1 from "../assets/chat.webp";
import img2 from "../assets/lib.jpg";
import img3 from "../assets/pet.jpg";
import img4 from "../assets/crypto.jpg";
import img5 from "../assets/train.avif";

const projects = [
  {
    title: "ProCollab",
    description:
      "AI-powered project collaboration platform built with the MERN stack and real-time chat integration.",
    link: "https://procollab-frontend.onrender.com/",
    image: img1,
  },
  {
    title: "BookLot",
    description:
      "A book discovery and bookmarking web app using Google Books API and Firebase authentication.",
    link: "https://booklot.onrender.com/",
    image: img2,
  },
  {
    title: "Furred Babbies",
    description:
      "Pet care appointment platform using MERN stack, JWT authentication, and Cashfree payments.
      Belongs to Company--wait to be live",
    link: "https://your-furred-babbies-link.com",
    image: img3,
  },
  {
    title: "CryptoBillions",
    description:
      "A crypto trading simulation platform for learning and practicing real-time crypto strategies.",
    link: "https://cryptobillons.onrender.com/",
    image: img4,
  },
  {
    title: "Railway Reservation System",
    description:
      "A real-time MERN chat application with AI-powered suggestions and Socket.io support.
      Under Devolopment",
    link: "https://your-pingme-link.com",
    image: img5,
  },
  {
    title: "GhibFolio",
    description:
      "This Project",
    link: "https://ghibli-new.onrender.com/",
    image: img1, 
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-18 py-10 md:-mt-10 mb-25">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-14">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider md:text-left text-center">
          Projects
        </h1>
        <p className="mt-4 md:mt-0 text-xs md:text-sm tracking-widest md:text-right text-center">
          Crafting ideas into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
                {project.title}
              </h2>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <p className="text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm md:text-base font-medium underline"
            >
              Visit Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
