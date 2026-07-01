// Hero.tsx — above-the-fold hero for the Whole-Body MRI page.
// Uses a CSS background-image blend (white gradient over an MRI photo) rather
// than a separate <img> element — this lets the photo serve as pure decoration
// so it doesn't need alt text and doesn't block the LCP image slot.
// The section is `sticky top-0 z-10` so subsequent sections (z-20+) scroll
// over it, creating the layered parallax stacking effect for the whole page.
import { ArrowRight } from "lucide-react";

import { DotGrid, Rings, SoftCircle } from "./Decorations";

const Hero = () => {
  return (
    // sticky + top-0: pins this section at the viewport top while Experience
    // (z-20, -mt-8) slides up over it on scroll, producing a "card lift" effect.
    // overflow-hidden clips the Rings decoration that bleeds past the right edge.
    <section
      className=" sticky top-0 z-10 overflow-hidden bg-[#b8dff0] pt-20 sm:pt-24 lg:pt-38 lg:pb-10 "
      style={{
        // The linear-gradient fades from near-opaque white (left/content side)
        // to semi-transparent (right), revealing the MRI photo underneath on
        // wider screens while keeping the text column fully legible.
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.6) 100%), url(${"https://devshowcase.io/wp-content/uploads/2026/01/doctor-examining-brain-mri-scan-on-white-backgroun-2026-01-09-10-00-07-utc-Photoroom-1-1-1.png"})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",

      }}
    >
      {/* Decorative elements positioned absolutely over the gradient background.
          DotGrid (top-left) and Rings (top-right) create depth without competing
          with the headline. SoftCircle is a small filled blob at mid-right that
          visually anchors the Rings group. All three are aria-hidden. */}
      <DotGrid className="absolute left-4 top-8 opacity-60" rows={5} cols={4} />
      <Rings className="absolute -right-8 top-4 opacity-45" />
      <SoftCircle className="absolute -right-7 top-72 h-16 w-16" />

      {/* z-10 keeps this content block above the absolute background decorations. */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 pb-16 pt-14 sm:pb-20 md:gap-8">
        <div className="max-w-xl w-full sm:max-w-2xl">


          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#1a2b5e] sm:mt-7 sm:text-4xl lg:text-5xl">


Whole-Body MRI for Preventive Insight
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#2a4a6e] sm:mt-6 sm:text-lg">
          Radiation-free, high-resolution imaging designed to assess your health with greater comfort and clarity.
          </p>

          <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#00c2c7] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90 sm:w-auto sm:px-8 sm:py-4">
            Book Appointment
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
