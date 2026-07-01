// Experience section for the Lung Cancer Screening (LDCT) page.
// Sits at z-20 with -mt-8 so it visually overlaps and slides over the Hero (z-10).
// Note: uses h-screen (instead of h-auto used on other service pages) to ensure
// this section fills the viewport before the InfoSection scrolls into view —
// preventing an awkward gap on tall displays.
import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/lung-cancer/1.png";
import { DotGrid, Rings } from "./Decorations";

// Bullet points covering the key patient-facing attributes of LDCT screening.
// Focus is on accessibility (no prep, no injections) and clinical effectiveness.
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
    <section
      // wave-top: CSS utility adding the curved top edge for a wave transition from Hero.
      // sticky top-0 z-20: stacks above Hero (z-10) so this section slides over it on scroll.
      // -mt-8: pulls this section up to seamlessly overlap the Hero's wave edge.
      // h-screen (unique to this page): fills the full viewport height to prevent a layout
      // gap between Experience and InfoSection on tall displays.
      className="wave-top -mt-8 sticky top-0 z-20 h-screen overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20"
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
      <div className="relative w-full grid items-center gap-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 md:grid-cols-[0.9fr_1.1fr]">
        {/* anim-slide-left: CSS animation class that slides the image in from the left */}
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-full w-full object-cover object-center  "
          />
        </div>

        {/* anim-slide-right anim-delay-2: enters from right with a stagger delay so
            image and text animate in sequence rather than simultaneously */}
        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">

            {/* Inline teal span highlights the scan type name within the heading,
                drawing the eye to the specific technology being described */}
            <span className="font-semibold text-[#00c2c7]">Low-dose CT Scan</span> — Precision Lung Screening
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
        Low-dose CT or LDCT uses significantly lower radiation than a standard CT scan to produce high-resolution images of the lungs, allowing radiologists to identify small nodules and abnormalities at a stage when treatment is most likely to be effective. Studies have shown that regular CT chest screening in high-risk patients can detect lung cancer when tumors are still at stage 1 – a point at which the cure rate is significantly higher than when diagnosed by X-ray alone. Talk to your doctor first. If screening is right for you, your physician can provide a referral and our team will take care of the rest.
          </p>

          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (
              // text-white/75 keeps list text dimmer than headings for visual hierarchy
              <li className="text-sm leading-6 text-white/75">{body}</li>
            ))}
          </ul>

          {/* Highlighted callout: teal border + semi-transparent bg separates this
              key message from the bullet list without needing a full card background */}
          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
            A 30-minute scan today could mean a very different conversation with your doctor tomorrow. That's what early detection looks like in practice.
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
