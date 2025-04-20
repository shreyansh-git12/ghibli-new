import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-6 px-8 text-muted-foreground text-sm md:-mt-15">
      <p className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Shreyansh Chaurasia — All rights
        reserved.
      </p>

      <div className="flex space-x-6 text-xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
