// Root page component for the Cardiac Calcium Scoring (CAC) service page.
// Composes the full page layout by stacking section components in order,
// wrapped in a dark navy background that shows through the sticky-scroll gaps
// between Hero and Experience sections.
import Hero from "./Hero";
import Experience from "./Experience";
import InfoSection from "./InfoSection";
import Schedule from "./Schedule";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
const XRay = () => {
  return (
    // bg-[#1a4d7a] is the deep navy that peeks through when Hero/Experience
    // sections are partially scrolled off-screen during the sticky overlap effect.
    <main className="min-h-screen bg-[#1a4d7a]">
      <Navbar/>
      <Hero />
      <Experience />
      <InfoSection />
      <Schedule />
      <Footer/>
    </main>
  );
};

export default XRay;
