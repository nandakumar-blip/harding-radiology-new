// Hero section for the Breast Ultrasound (SOFIA 3D) page.
// Uses sticky/z-10 positioning so the Experience section (z-20) slides over it
// during scroll, creating a layered reveal effect without JavaScript.
// Note: lg:pt-48 is taller than other hero sections (lg:pt-28) because the
// SOFIA positioning image is taller and needs more vertical breathing room.
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/breast-ultrasound/3d-ultrasound.jpg";
import { DotGrid, Rings, SoftCircle } from "./Decorations";

const Hero = () => {
  return (
    <section
      // sticky + z-10: stays pinned while the user scrolls until the Experience section
      // (z-20) slides on top, producing the card-stack reveal used across all service pages.
      // lg:pt-48 is larger than the other heroes to accommodate the taller ultrasound image.
      className=" sticky top-0 z-10 overflow-hidden bg-[#b8dff0] pt-20 sm:pt-24 lg:pt-48"
      style={{
        // Left-to-right gradient keeps the left (text) side near-opaque white while
        // the right side shows the background photo at increasing visibility.
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.6) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Purely decorative background elements — aria-hidden in each component */}
      <DotGrid className="absolute left-4 top-8 opacity-60" rows={5} cols={4} />
      <Rings className="absolute -right-8 top-4 opacity-45" />
      {/* SoftCircle bleeds off the right edge to suggest depth without full visibility */}
      <SoftCircle className="absolute -right-7 top-72 h-16 w-16" />

      {/* sm:pb-40 is larger than other heroes (sm:pb-20) to compensate for the extra
          lg:pt-48 top padding and keep the text block vertically centred */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 pb-16 sm:pb-40 md:gap-8">
        <div className="max-w-xl w-full sm:max-w-2xl">


          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#1a2b5e] sm:mt-7 sm:text-4xl lg:text-5xl">




Advanced 3D Breast Ultrasound
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#2a4a6e] sm:mt-6 sm:text-lg">
   Introducing advanced breast imaging for women with dense breast tissue powered by Hitachi's SOFIA for a 30-second scan. No compression. No radiation.
          </p>

          {/* CTA button: full-width on mobile, auto-width on sm+ to avoid
              stretching across large screens */}
          <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#00c2c7] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90 sm:w-auto sm:px-8 sm:py-4">
            Book Appointment
            {/* Inverted circle icon: white circle with teal arrow, matching the teal button */}
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00c2c7]">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
