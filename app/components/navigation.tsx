"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Tech", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl shadow-lg shadow-obsidian/5"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <a
            href="#home"
            className="text-2xl font-black text-foreground tracking-tighter font-heading"
          >
            AK
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-heading font-bold tracking-tight text-sm transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-obsidian border-b-2 border-obsidian pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-border hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-foreground text-xl">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-heading font-bold text-sm hover:bg-obsidian hover:text-white transition-all active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile side drawer — rendered outside nav so it doesn't inherit nav's transparent bg */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-full w-72 bg-background border-l border-border z-[70] flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <span className="material-symbols-outlined text-foreground text-2xl">
                    close
                  </span>
                </button>
              </div>
              <div className="flex flex-col px-8 gap-6 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading font-bold text-lg ${
                      activeSection === item.href.slice(1)
                        ? "text-obsidian"
                        : "text-muted-foreground hover:text-foreground"
                    } transition-colors`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="p-8 space-y-4">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md border border-border font-heading font-bold text-sm hover:bg-accent transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {theme === "dark" ? "light_mode" : "dark_mode"}
                  </span>
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold text-center"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
