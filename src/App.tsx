// Root of the React application. Owns the client-side route tree and composes
// the HomePage inline so that the landing-page sections never trigger a
// separate chunk or lazy-load delay — they must be visible immediately on first
// paint without any loading state.

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
// Service pages — these are direct imports (not lazy) because the bundle is
// small enough that splitting per-page would add more network round-trips than
// it saves. Revisit with React.lazy if the bundle grows significantly.
import XRay from "./pages/x-ray/XRay";
import Ultrasound from "./pages/ultrasound/Ultrasound"
import Openmri from "./pages/open-mri/Openmri"
import ScrollToTop from "./components/ScrollToTop";
import Mammogram from "./pages/3d-mammogram/Mammogram";
import Dexa from "./pages/dexa-scan/Dexa";
import Ctscan from "./pages/ct-scan/CtScan";
import BreastUltrasound from "./pages/BreastUltrasound/BreastUltrasound";
// Preventive-health pages live under a separate URL segment (/preventive/*)
// to distinguish screening programs from standard imaging services (/services/*).
import LungCancer from "./pages/lung-cancer/LungCancer";
import Cardiac from "./pages/cardiac-scoring/Cardiac";
import About from "./pages/about/About";
import WholeBody from "./pages/whole-body-mri/WholeBody";
import Appointment from "./pages/appointment/Appointment";
import MakePayment from "./pages/make-payment/MakePayment";
import ContactUsPage from "./pages/contact-us/ContactUs";

// Inline component rather than a separate file — the home page is just a
// fixed sequence of full-width sections with no dynamic state of its own.
// Keeping it here avoids an unnecessary file/import indirection and makes the
// overall page composition visible at a glance alongside the route table.
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
    {/* ScrollToTop resets the window scroll position on every route change so
        navigating between pages always starts at the top, not wherever the
        previous page was scrolled to. */}
    <ScrollToTop />
    <Routes>
      {/* Landing page — all sections rendered eagerly (see HomePage above) */}
      <Route path="/" element={<HomePage />} />

      {/* ── Imaging service pages ── */}
      <Route path="/services/xray" element={<XRay />} />
     <Route path="/services/ultrasound" element={<Ultrasound />} />
      <Route path="/services/open-mri" element={<Openmri />} />
       <Route path="/services/3d-mammogram" element={<Mammogram />} />
       <Route path="/services/dexa-scan" element={<Dexa />} />
         <Route path="/services/ct-scans" element={<Ctscan />} />
         <Route path="/services/3d-breast-ultrasound" element={<BreastUltrasound />} />

         {/* ── Preventive screening programs ── */}
         <Route path="/preventive/lung-cancer-screening" element={<LungCancer />} />
          <Route path="/preventive/cardiac-scoring" element={<Cardiac />} />

          {/* ── Standalone pages ── */}
          <Route path="/about" element={<About />} />
             <Route path="/wholebody" element={<WholeBody />} />
             <Route path="/appointment" element={<Appointment />} />
             <Route path="/make-payment" element={<MakePayment />} />
             <Route path="/contact-us" element={<ContactUsPage />} />

    </Routes>
    </>
  )
}

export default App
