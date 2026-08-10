import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import usePortfolio from "./hooks/usePortfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Education from "./components/Education";




function App() {
  const {
    data,
    loading,
    error
  } = usePortfolio();

  if (loading) {
    return (
      <div className="loading-screen">
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        Failed to load portfolio.
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero hero={data.hero} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Achievements achievements={data.achievements} />
        <Certificates certificates={data.certificates} />
        <Education education={data.education} />
      </main>
    </>
  );
}

export default App;