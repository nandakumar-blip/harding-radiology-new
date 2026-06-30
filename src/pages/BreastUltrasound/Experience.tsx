import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/breast-ultrasound/1.png";
import { DotGrid, Rings } from "./Decorations";

const items = [
  {

    body: "No compression and no radiation – a comfortable experience from start to finish.",
  },
  {
    body: "Comfortable prone positioning with the patient remaining fully covered throughout the exam.",
  },
  {
    body: "Each breast scanned in 30 seconds, producing detailed 3D volumetric images for radiologist review.",
  },
];

const Experience = () => {
  return (
    <section className="wave-top sticky top-0 -mt-8 z-20 h-auto overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20">
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

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] ">
        <div className=" overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">

       Now in NJ — SOFIA 3D Whole Breast Ultrasound
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
       Harding Radiology was the first facility in New Jersey to offer SOFIA for advanced imaging of dense breast tissue. SOFIA uses ultrasound to scan the entire breast while the patient lies comfortably face-down, with the table acting as the probe. There is no compression and no radiation. Each breast is scanned in just 30 seconds, producing detailed 3D volumetric images for our radiologists to review.</p>
          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (



              <li className="text-sm leading-6 text-white/75">{body}</li>


            ))}
          </ul>

          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
             Designed for women with dense breast tissue and is often used as a supplemental step following a mammogram.
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
