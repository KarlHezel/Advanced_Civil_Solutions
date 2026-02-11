import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BookConsultation from "./pages/BookConsultation.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
