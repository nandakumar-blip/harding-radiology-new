// Experience section for the Breast Ultrasound (SOFIA 3D) page.
// Sits at z-20 with -mt-8 so it visually overlaps and slides over the Hero (z-10)
// during scroll, producing the layered page-stack reveal used across all service pages.
import { ShieldCheck } from "lucide-react";
import experienceImage from "../../assets/breast-ultrasound/1.png";
import { DotGrid, Rings } from "./Decorations";

// Bullet points highlighting the SOFIA scan's patient experience advantages.
// These specifically address concerns patients with dense breasts may have
// (compression, radiation, exam duration) that differ from mammography.
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
    <section
      // wave-top: CSS utility adding the curved top edge for a wave transition from Hero.
      // sticky top-0 z-20: stacks above Hero (z-10) so this section slides over it on scroll.
      // -mt-8: pulls this section up to seamlessly overlap the Hero's wave edge.
      className="wave-top sticky top-0 -mt-8 z-20 h-auto overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20"
    >
      {/* SVG noise texture overlay: fractalNoise at 6% opacity adds subtle grain to the
          flat dark background. pointer-events-none prevents it intercepting clicks. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      {/* Teal rings bleed off the left edge; color contrasts with the dark navy bg */}
      <Rings className="absolute -left-16 bottom-6 opacity-35" color="#00c2c7" size={140} />
      {/* DotGrid hidden on small screens (hidden lg:grid) to avoid cluttering mobile layouts */}
      <DotGrid
        className="absolute right-8 top-36 hidden opacity-35 lg:grid"
        color="#00c2c7"
        rows={8}
        cols={4}
      />

      {/* Asymmetric two-column grid: image 0.9fr (slightly narrower), text 1.1fr.
          The ratio keeps visual balance given the image has a decorative border frame. */}
      <div className="relative w-full grid items-center gap-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 md:grid-cols-[0.9fr_1.1fr]">
        {/* anim-slide-left: CSS animation class that slides the image in from the left */}
        <div className=" overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* anim-slide-right anim-delay-2: enters from right with a stagger delay so
            image and text animate in sequence rather than simultaneously */}
        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">

       Now in NJ — SOFIA 3D Whole Breast Ultrasound
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
       Harding Radiology was the first facility in New Jersey to offer SOFIA for advanced imaging of dense breast tissue. SOFIA uses ultrasound to scan the entire breast while the patient lies comfortably face-down, with the table acting as the probe. There is no compression and no radiation. Each breast is scanned in just 30 seconds, producing detailed 3D volumetric images for our radiologists to review.</p>
          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (
              // text-white/75 keeps list text dimmer than headings for visual hierarchy
              <li className="text-sm leading-6 text-white/75">{body}</li>
            ))}
          </ul>

          {/* Highlighted callout: teal border + semi-transparent bg separates this
              key differentiator from the bullet list without needing a full card background */}
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
