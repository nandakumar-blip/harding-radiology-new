import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/x-ray/x-ray.jpg";
import { DotGrid, Rings, SoftCircle } from "./Decorations";

const Hero = () => {
  return (
    <section
      className="wave-bottom relative z-10 overflow-hidden bg-[#b8dff0] pt-20 sm:pt-24 lg:pt-28"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.6) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <DotGrid className="absolute left-4 top-8 opacity-60" rows={5} cols={4} />
      <Rings className="absolute -right-8 top-4 opacity-45" />
      <SoftCircle className="absolute -right-7 top-72 h-16 w-16" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start justify-center gap-6 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 md:gap-8 lg:px-8">
        <div className="max-w-xl w-full sm:max-w-2xl">
          <span className="inline-flex rounded-full border border-[#00c2c7] bg-white/35 px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#1a2b5e]">
            X-Ray Imaging
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#1a2b5e] sm:mt-7 sm:text-4xl lg:text-5xl">
            Precision Digital X-Ray
            <br />
            Imaging For
            <br />
            <span className="font-semibold text-[#00c2c7]">Confident Diagnosis</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#2a4a6e] sm:mt-6 sm:text-lg">
            High-resolution digital imaging that helps physicians evaluate
            injuries and conditions quickly.
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
