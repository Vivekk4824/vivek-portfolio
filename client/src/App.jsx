import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import usePortfolio from "./hooks/usePortfolio";
import About from "./components/About";


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
      </main>
    </>
  );
}

export default App;