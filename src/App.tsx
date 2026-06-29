import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MriSection } from "./components/MriSection"
import { RadiologyCenter } from "./components/RadiologyCenter"
import { Routes, Route } from "react-router-dom";
import './App.css'
import { Wholebody } from "./components/Wholebody";
import{MriReveal}from "./components/MriReveal"
import { RadiologyServices } from "./components/RadiologyServices";
import { Testimonials } from "./components/Testimonials";
import {ContactUs} from "./components/ContactUs";
import {Footer} from "./components/Footer";
import XRay from "./pages/x-ray/XRay";
import Ultrasound from "./pages/ultrasound/Ultrasound"
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <MriSection />
    <RadiologyCenter />
    <Wholebody />
    <MriReveal/>
    <RadiologyServices/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/xray" element={<XRay />} />
     <Route path="/services/ultrasound" element={<Ultrasound />} />
  
    </Routes>
  )
}

export default App
