import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import M3MTheLineSection from "./components/M3MTheLineSection";
import HighlightsSection from "./components/HighlightsSection";
import AmenitiesSection from "./components/AmenitiesSection";
function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <M3MTheLineSection />
      <HighlightsSection />
      <AmenitiesSection />
      <About />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
