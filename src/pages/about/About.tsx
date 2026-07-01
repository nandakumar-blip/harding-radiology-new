// About page — composes the full About Us route by stacking section components
// in reading order: hero banner → services list → team + referral partner.
import Hero from "./Hero";
import Experience from "./Experience";
import InfoSection from "./InfoSection";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const XRay = () => {
  return (
    // min-h-screen keeps the footer pinned to the bottom on short content
    <main className="min-h-screen">
      <Navbar/>
      <Hero />
      <Experience />
      <InfoSection />
      <Footer/>
    </main>
  );
};

export default XRay;
