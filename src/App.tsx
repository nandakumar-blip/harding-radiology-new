import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MriSection } from "./components/MriSection"
import { RadiologyCenter } from "./components/RadiologyCenter"
import './App.css'
import { Wholebody } from "./components/Wholebody";
import{MriReveal}from "./components/MriReveal"
import { RadiologyServices } from "./components/RadiologyServices";
import { Testimonials } from "./components/Testimonials";
import {ContactUs} from "./components/ContactUs";
import {Footer} from "./components/Footer";

function App() {


  return (
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
  )
}

export default App
