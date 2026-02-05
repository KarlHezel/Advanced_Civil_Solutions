import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

export default function App() {
  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="app">
      <Navbar links={links} />

      <main>
        <section id="home" className="section">
          <Home />
        </section>

        <section id="services" className="section sectionAlt">
          <Services />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="contact" className="section sectionAlt">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}