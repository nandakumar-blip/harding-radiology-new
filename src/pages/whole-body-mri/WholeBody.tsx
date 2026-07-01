// WholeBody.tsx — root page component for the Whole-Body MRI route.
// Composes all sections in reading order: hero → scan explanation →
// radiologist insight columns → pricing comparison → scheduling CTA.
// The outer <main> is set to bg-[#1a4d7a] (dark navy) so any momentary
// gap between sticky sections during scroll shows the brand background
// rather than a jarring white flash.
import Hero from "./Hero";
import Experience from "./Experience";
import InfoSection from "./InfoSection";
import Pricing from "./Pricing";
import Schedule from "./Schedule";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const XRay = () => {
  return (
    <main className="min-h-screen bg-[#1a4d7a]">
      <Navbar/>
      <Hero />
      <Experience />
      <InfoSection />
      <Pricing />
      <Schedule />
      <Footer/>
    </main>
  );
};

export default XRay;
