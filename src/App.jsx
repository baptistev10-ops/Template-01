import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Imports des composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 overflow-hidden font-sans">
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />

        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
