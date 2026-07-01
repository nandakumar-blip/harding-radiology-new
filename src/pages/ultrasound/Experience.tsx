import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/ultrasound/1.png";
import { DotGrid, Rings } from "./Decorations";

const items = [
  {
    
    body: "High-frequency sound waves create detailed, real-time images of organs, vessels, and soft tissues.",
  },
  {
    body: "Color-flow Doppler capability allows assessment of blood movement through arteries and veins",
  },
  {
    body: "No radiation, no injections, and no recovery time – a comfortable experience from start to finish.",
  },
];

const Experience = () => {
  return (
    <section className="sticky top-0 wave-top z-20 -mt-8 h-screen overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20">
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

      <div className="relative w-full grid items-center gap-10 pt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-100 w-full object-contain object-center  "
          />
        </div>

        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">
           
No Radiation. No Discomfort. Remarkably Detailed Scans with <span className="font-semibold text-[#00c2c7]">GE LOGIQ Series</span> 
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
          GE LOGIQ Series 

Ultrasound uses high-frequency sound waves, and not radiation, to create real-time images of your internal organs, tissues, and blood flow. It is one of the safest diagnostic tools available, suitable for a wide range of patients and clinical needs. Our GE Logic series unit offers full color Doppler capability, allowing detailed assessment of blood movement through arteries and veins alongside standard organ imaging

GE Logic series ultrasound delivers detailed, real-time images across a wide range of diagnostic applications. Whether your physician has referred you for an abdominal concern, a vascular assessment, or a gynecological evaluation, we provide the clarity they need to guide your care.
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
               Experience a fast, painless exam that gives your physician immediate, actionable insight into what your body is telling them.
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
