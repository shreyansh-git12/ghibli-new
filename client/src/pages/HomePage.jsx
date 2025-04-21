import React from "react";
import us from "../assets/me.png";
import { FiPhoneCall } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";


const HomePage = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center text-center gap-8 md:gap-2 lg:px-40 md:-mt-28 mt-25 mb-2">
      <div className="flex justify-center items-center md:w-1/2 w-full md:-ml-5 md:-mr-20">
        <img
          src={us}
          alt="Shreyansh Chaurasia"
          className="rounded-full w-80 h-110 object-cover mb-5"
        />
      </div>
      <div className="md:w-1/2 w-full md:text-left text-center px-4 md:px-8">
        <div className="space-y-2">
          <p className="text-4xl font-extrabold text-[#4a7052] text-center">
            Shreyansh Chaurasia
          </p>
          <p className="text-lg font-medium text-center">
            Full Stack Web Developer
          </p>
          <p className="text-sm text-center">Noida, India</p>
          <p className="text-base leading-relaxed text-center">
            <span className="text-xl">"</span> I am a Full Stack Web Developer
            with a passion for creating dynamic and responsive web applications.
            I have a strong foundation in both front-end and back-end
            technologies. <span className="text-xl">"</span>
          </p>
        </div>
        <div className="pt-4 space-y-2 md:flex md:gap-6 mt-3 justify-center items-center flex gap-4 mb-20 md:-mb-20">
  <a href="tel:+[7800312158]" className="w-fit">
    <Button
      variant="outline"
      className="p-7 rounded-full w-15 h-12 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <FiPhoneCall />
    </Button>
  </a>
  <a href="mailto:[jss.shreyansh@gmail.com]" className="w-fit">
    <Button
      variant="outline"
      className="p-7 rounded-full w-15 h-12 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <MdEmail />
    </Button>
  </a>
  <a href="https://www.linkedin.com/in/shreyansh-chaurasia-739a8b360/" target="_blank" rel="noopener noreferrer" className="w-fit">
    <Button
      variant="outline"
      className="p-7 rounded-full w-15 h-12 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <FaLinkedin />
    </Button>
  </a>
  <a href="https://publuu.com/flip-book/854633/1873641" target="_blank" rel="noopener noreferrer" className="w-fit">
    <Button
      variant="outline"
      className="p-7 rounded-full w-15 h-12 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <AiOutlineFilePdf />
    </Button>
  </a>
</div>
      </div>
    </div>
  );
};

export default HomePage;
