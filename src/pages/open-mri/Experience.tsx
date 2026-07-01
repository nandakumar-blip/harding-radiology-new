import { ShieldCheck } from "lucide-react";
import experienceImage from "../../assets/open-mri/scan-img.png";
import { DotGrid, Rings } from "./Decorations";

const items = [
  {
    
    body: "No enclosed tunnel — open on all four sides with magnets positioned above and below.",
  },
  {
    body: "High-field imaging, delivering clinical-grade diagnostic accuracy equivalent to closed-bore systems.",
  },
  {
    body: "Recently upgraded with advanced software for improved image clarity and diagnostic precision.",
  },
];

const Experience = () => {
  return (
    <section className="wave-top -mt-8 sticky top-0 z-20 h-screen overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      <Rings className="absolute -left-16 bottom-6 opacity-35" color="#00c2c7" size={140} />
      <DotGrid
        className="absolute right-8 top-36 hidden opacity-35 lg:grid"
        color="#00c2c7"
        rows={8}
        cols={4}
      />

      <div className="relative w-full grid items-center gap-10 px-4 pt-26 md:px-8 lg:px-16 xl:px-32 2xl:px-60 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-full w-full object-cover object-center  "
          />
        </div>

        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">
           
 <span className="font-semibold text-[#00c2c7]">Hitachi Altaire</span>— High-Field Open MRI
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
         Our Hitachi Altaire High-Field Open MRI uses magnets positioned above and below the patient while remaining completely open on all sides – no tunnel, no enclosure, no sense of being confined. It is a high-field system, meaning image quality is equivalent to conventional closed-bore MRI scanners, with the added benefit of a design that significantly reduces anxiety and is suitable for patients of all body types and mobility levels.
          </p>

          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (
               
                
                
                  <li className="text-sm leading-6 text-white/75">{body}</li>
              
            
            ))}
          </ul>

          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
             Spacious, calm, and unhurried – because a better experience produces better results.
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
