// Experience section for the DEXA Scan page.
// Sits at z-20 with -mt-8 so it visually overlaps and slides over the Hero (z-10)
// during scroll, creating the layered page-stack reveal pattern used across all service pages.
import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/dexa-scan/1.png";
import { DotGrid, Rings } from "./Decorations";

// Bullet points summarising the clinical use cases for a bone density test.
// Each entry only needs a body string — no icon or title at this density level.
const items = [
  {

    body: "Screens for osteoporosis and bone thinning before fractures occur.",
  },
  {
    body: "Assesses fracture risk as bones naturally weaken with age. Helps physicians decide whether treatment or medicines are needed.",
  },
  {
    body: "Monitors patients on Calcium and Vitamin D supplements or osteoporosis medications.",
  },
];

const Experience = () => {
  return (
    <section
      // wave-top: CSS utility that adds the curved top edge for a wave transition from Hero.
      // sticky top-0 z-20: stacks above Hero (z-10) so this section slides over it on scroll.
      // -mt-8: pulls this section up to seamlessly overlap the Hero's wave edge.
      className="wave-top sticky top-0 -mt-8 z-20 h-auto overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20"
    >
      {/* SVG noise texture overlay: fractalNoise at 6% opacity adds subtle surface grain
          to the flat dark background. pointer-events-none prevents it intercepting clicks. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      {/* Decorative rings bleed off the left edge; teal contrasts with the dark navy bg */}
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
        {/* anim-slide-left: CSS animation class that slides the image in from the left on load */}
        <div className=" overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-100 w-full object-contain object-center"
          />
        </div>

        {/* anim-slide-right anim-delay-2: enters from right with a delay so image and
            text animate in sequence rather than simultaneously */}
        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">

          What Is a Bone Density Test?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
          A DEXA scan measures the calcium and mineral content in your bones to determine how strong and dense they are. It is typically performed on the lumbar spine and hip and on the forearm when those sites cannot be evaluated, such as in patients with metal rods in the spine or a hip replacement. As we age, bones naturally lose density and become more susceptible to fractures. A DEXA scan detects that loss early, giving your physician the information needed to decide whether treatment or preventive measures are appropriate.
          </p>

          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (
              // text-white/75 keeps list text dimmer than headings for visual hierarchy
              <li className="text-sm leading-6 text-white/75">{body}</li>
            ))}
          </ul>

          {/* Highlighted callout: teal border + semi-transparent bg visually separates
              this key message from the bullet list without needing a full card */}
          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
                Bone density testing is one of the most straightforward steps you can take toward protecting your long-term bone health.
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
