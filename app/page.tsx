"use client";
import TagManager from 'react-gtm-module';
import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/heroes";
import Projects from "./sections/projects";
//import TapeSection from "./sections/tapesection";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W22V74NS' });
  }, []);
  return (
    <div >
      <Header />
      <Hero />
      <Projects />
      {/* <TapeSection /> */}
      {/* <Testimonials /> */}
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
