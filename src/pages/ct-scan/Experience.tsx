import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/ct-scan/1.png";
import { DotGrid, Rings } from "./Decorations";

const items = [
  {

    body: "Comprehensive CT imaging across all major body areas referred by physicians.",
  },
  {
    body: "Preventive screenings including Cardiac Scoring, Lung Screening, and Virtual Colonoscopy.",
  },
  {
    body: "Multi-slice spiral technology for faster scan times and greater image accuracy.",
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

         GE Optima — A New Standard in CT Imaging
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
         At the Radiology Center at Harding, our GE Optima CT Scanner delivers high-quality, cross-sectional imaging across all major body regions. As hardware and software continue to advance, our ability to perform increasingly precise, non-invasive evaluations continues to improve alongside them. Beyond diagnostic exams, we offer preventive screenings, such as Cardiac Calcium Scoring, Lung Screening, and Virtual Colonoscopy, for patients who want a clearer picture of their internal health before symptoms arise.
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
               Whether you’re here for a diagnostic referral or a preventive screening, you leave with clarity – and your physician receives the information they need to act.
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
