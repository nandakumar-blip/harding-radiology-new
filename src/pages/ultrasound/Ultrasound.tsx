import Hero from "./Hero";
import Experience from "./Experience";
import InfoSection from "./InfoSection";
import Schedule from "./Schedule";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
const XRay = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#1a4d7a]">
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
