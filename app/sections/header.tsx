"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

function Header() {
  const [active, setActive] = React.useState("#home");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    setActive(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className={twMerge("flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur")}>
        <a
          href="#home"
          className={twMerge("nav-item hover:bg-white/70 hover:text-gray-900", active === "#home" && "nav-item-active")}
          onClick={(e) => handleClick(e, "#home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className= {twMerge("nav-item hover:bg-white/70 hover:text-gray-900", active === "#projects" && "nav-item-active")}
          onClick={(e) => handleClick(e, "#projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={twMerge("nav-item hover:bg-white/70 hover:text-gray-900", active === "#about" && "nav-item-active")}
          onClick={(e) => handleClick(e, "#about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={twMerge("nav-item hover:bg-white/70 hover:text-gray-900", active === "#contact" && "nav-item-active")}
          onClick={(e) => handleClick(e, "#contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
