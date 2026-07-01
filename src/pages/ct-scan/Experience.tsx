// Experience section for the CT Scan page.
// Sits at z-20 with -mt-8 so it visually overlaps and slides over the Hero (z-10)
// during scroll, producing the layered page-stack reveal used across all service pages.
import { ShieldCheck } from "lucide-react";
import experienceImage from "../../assets/ct-scan/1.png";
import { DotGrid, Rings } from "./Decorations";

// Bullet points summarising the CT scanner's capabilities and service scope.
// Each entry has only a body string — no icon or title needed at this density level.
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
    <section
      // wave-top: CSS utility that adds the curved top edge, creating a wave transition from Hero.
      // sticky top-0 z-20: stacks above Hero (z-10) so this section slides over it on scroll.
      // -mt-8: pulls this section up to seamlessly overlap the Hero's wave edge.
      className="wave-top sticky top-0 -mt-8 z-20 h-auto overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20"
    >
      {/* SVG noise texture overlay: fractalNoise at 6% opacity adds subtle surface grain
          to break up the flat dark navy background. pointer-events-none prevents click interception. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      {/* Teal rings bleed off the left edge; the color contrasts with the dark navy bg */}
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

         GE Optima — A New Standard in CT Imaging
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
         At the Radiology Center at Harding, our GE Optima CT Scanner delivers high-quality, cross-sectional imaging across all major body regions. As hardware and software continue to advance, our ability to perform increasingly precise, non-invasive evaluations continues to improve alongside them. Beyond diagnostic exams, we offer preventive screenings, such as Cardiac Calcium Scoring, Lung Screening, and Virtual Colonoscopy, for patients who want a clearer picture of their internal health before symptoms arise.
          </p>

          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (
              // text-white/75 keeps list text dimmer than headings for clear visual hierarchy
              <li className="text-sm leading-6 text-white/75">{body}</li>
            ))}
          </ul>

          {/* Highlighted callout: teal border + semi-transparent bg separates this
              key statement from the bullet list without needing a full card background */}
          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
               Whether you're here for a diagnostic referral or a preventive screening, you leave with clarity – and your physician receives the information they need to act.
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
