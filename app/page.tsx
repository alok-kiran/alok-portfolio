import About from "./sections/about";
import ContactUs from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/heroes";
import Projects from "./sections/projects";
import TapeSection from "./sections/tapesection";
//import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Projects />
      <TapeSection />
      {/* <Testimonials /> */}
      <Experience />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}
