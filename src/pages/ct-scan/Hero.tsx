// Hero section for the CT Scan page.
// Uses sticky/z-10 positioning so the Experience section (z-20) slides over it
// during scroll, creating a layered reveal effect without JavaScript.
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/ct-scan/ct-scan.jpg";
import { DotGrid, Rings, SoftCircle } from "./Decorations";

const Hero = () => {
  return (
    <section
      // sticky + z-10: stays pinned while the user scrolls until the next section
      // (z-20) slides on top, producing the card-stack reveal used across all service pages.
      // overflow-hidden prevents absolutely-positioned decorations from widening the page.
      className=" sticky top-0 z-10 overflow-hidden bg-[#b8dff0] pt-20 sm:pt-24 lg:pt-28"
      style={{
        // Left-to-right gradient: near-opaque white on the left keeps text readable
        // while the right side shows the CT scanner background photo at full opacity.
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

      {/* relative z-10 lifts this content above the background decorations */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 pb-16 pt-14 sm:pb-20 md:gap-8">
        <div className="max-w-xl w-full sm:max-w-2xl">


          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#1a2b5e] sm:mt-7 sm:text-4xl lg:text-5xl">



Advanced High-Precision CT Imaging
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#2a4a6e] sm:mt-6 sm:text-lg">
     Fast, cross-sectional imaging of organs, bones, and blood vessels – from our trusted Our GE Optima CT Scanner – that gives your physicians the full picture.
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
