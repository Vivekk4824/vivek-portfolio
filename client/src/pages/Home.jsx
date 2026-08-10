// pages/Home.jsx

import Hero from "../components/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Achievements from "../sections/Achievements";
import Education from "../sections/Education";
import ResumeSection from "../sections/ResumeSection";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}