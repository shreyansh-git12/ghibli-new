import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "About", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="flex md:justify-center justify-between  items-center px-8 py-4 bg-card rounded-b-2xl fixed top-0 w-full z-50 gap-7">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-primary hover:scale-105 transition-transform"
      >
        ME.
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex md:space-x-10 ">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-lg font-medium ${
              location.pathname === link.path
                ? "text-primary"
                : "text-muted-foreground"
            } hover:text-primary transition-colors`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2 rounded-md text-[#4a7052] hover:bg-[#e5edd8]">
            <FiMenu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="">
            <div className="flex flex-col gap-6 mt-10 text-lg text-[#4a7052] items-center">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/resume">Resume</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
