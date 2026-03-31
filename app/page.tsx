"use client";

import TagManager from "react-gtm-module";
import Navigation from "./components/navigation";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Projects from "./sections/projects.new";
import TechMarquee from "./sections/tech-marquee";
import Experience from "./sections/experience.new";
import Contact from "./sections/contact.new";
import Footer from "./sections/footer.new";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W22V74NS" });
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-24 space-y-0">
        <Hero />
        <Skills />
        <Projects />
        <TechMarquee />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
