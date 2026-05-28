"use client";

import TagManager from "react-gtm-module";
import Navigation from "./components/navigation";
import Hero from "./sections/hero";
import Projects from "./sections/projects.new";
import Skills from "./sections/skills";
import Experience from "./sections/experience.new";
import Contact from "./sections/contact.new";
import Footer from "./sections/footer.new";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W22V74NS" });
  }, []);

  return (
    <div className="terminal-grid-bg min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
