import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/lung-cancer/1.png";
import { DotGrid, Rings } from "./Decorations";

const items = [
  {
    
    body: "Quick, painless, and non-invasive – no injections or special preparation required.",
  },
  {
    body: "Low-radiation CT imaging that detects small lung nodules at their earliest, most treatable stage.",
  },
  {
    body: "Results reviewed and reported by our board-certified radiologists to guide follow-up care.",
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

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-full w-full object-cover object-center  "
          />
        </div>

        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">
           
 <span className="font-semibold text-[#00c2c7]">Low-dose CT Scan</span> — Precision Lung Screening
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
        Low-dose CT or LDCT uses significantly lower radiation than a standard CT scan to produce high-resolution images of the lungs, allowing radiologists to identify small nodules and abnormalities at a stage when treatment is most likely to be effective. Studies have shown that regular CT chest screening in high-risk patients can detect lung cancer when tumors are still at stage 1 – a point at which the cure rate is significantly higher than when diagnosed by X-ray alone. Talk to your doctor first. If screening is right for you, your physician can provide a referral and our team will take care of the rest.
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
            A 30-minute scan today could mean a very different conversation with your doctor tomorrow. That’s what early detection looks like in practice.
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
