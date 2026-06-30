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
import Openmri from "./pages/open-mri/Openmri"
import ScrollToTop from "./components/ScrollToTop";
import Mammogram from "./pages/3d-mammogram/Mammogram";
import Dexa from "./pages/dexa-scan/Dexa";
import Ctscan from "./pages/ct-scan/CtScan";
import BreastUltrasound from "./pages/BreastUltrasound/BreastUltrasound";
import LungCancer from "./pages/lung-cancer/LungCancer";
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
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/xray" element={<XRay />} />
     <Route path="/services/ultrasound" element={<Ultrasound />} />
      <Route path="/services/open-mri" element={<Openmri />} />
       <Route path="/services/3d-mammogram" element={<Mammogram />} />
       <Route path="/services/dexa-scan" element={<Dexa />} />
         <Route path="/services/ct-scans" element={<Ctscan />} />
         <Route path="/services/3d-breast-ultrasound" element={<BreastUltrasound />} />
         <Route path="/preventive/lung-cancer-screening" element={<LungCancer />} />
  
    </Routes>
    </>
  )
}

export default App
