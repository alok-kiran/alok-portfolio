"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

function Header() {
  const [active, setActive] = React.useState("#home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
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

  const handleScroll = () => {
    const sections = ["#home", "#projects", "#testimonials", "#about", "#contact"];
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollPosition === 0) {
      setActive("#home");
      return;
    }

    if (scrollPosition + windowHeight >= documentHeight) {
      setActive("#contact");
      return;
    }

    for (const sectionId of sections) {
      const section = document.querySelector(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActive(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          className={twMerge("nav-item hover:bg-white/70 hover:text-gray-900", active === "#projects" && "nav-item-active")}
          onClick={(e) => handleClick(e, "#projects")}
        >
          Projects
        </a>
        <a
          href="#testimonials"
          className={twMerge("nav-item hover:bg-white/70 hover:text-gray-900", active === "#testimonials" && "nav-item-active")}
          onClick={(e) => handleClick(e, "#testimonials")}
        >
          Testimonials
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
