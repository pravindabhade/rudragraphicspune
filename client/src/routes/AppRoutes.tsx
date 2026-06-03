import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import ServiceDetails from "../pages/ServiceDetails";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/services/:slug" element={<ServiceDetails />}/>
    </Routes>
  );
}