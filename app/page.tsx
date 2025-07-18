"use client";
import TagManager from 'react-gtm-module';
import Contact from "./sections/contact-new";
import Experience from "./sections/experience-new";
import Footer from "./sections/footer";
import Header from "./components/header";
import SmoothScrollProvider from "./components/smooth-scroll-provider";
import Hero from "./sections/heroes-new";
import Projects from "./sections/projects-new";
import TechArsenal from "./sections/tech-arsenal";
//import TapeSection from "./sections/tapesection";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W22V74NS' });
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="relative">
        <Header />
        <Hero />
        <Projects />
        <TechArsenal />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
