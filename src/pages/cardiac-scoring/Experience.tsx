// Experience section for the Cardiac Calcium Scoring (CAC) page.
// Note: uses z-10 (not z-20 like other service pages) because the Hero here
// is z-0 — the relative stacking order is preserved, just one level lower.
// Also uses -mt-8 with wave-top to slide over the Hero during scroll.
import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/cardiac-scoring/1.png";
import { DotGrid, Rings } from "./Decorations";

// Bullet points describing the three sequential steps of the CAC scoring exam.
// Ordered to reflect the actual procedure: scan → measurement → score output.
const items = [
  {

    body: "The CT scanner captures detailed images of the coronary arteries.",
  },
  {

    body: "A radiologist measures calcified plaque buildup inside the arteries.",
  },
  {

    body: "Results are expressed as a CAC Score to help assess your overall cardiac risk.",
  },
];

const Experience = () => {
  return (
    <section
      // wave-top: CSS utility adding the curved top edge for a wave transition from Hero.
      // sticky top-0 z-10: stacks above Hero (z-0) so this section slides over it on scroll.
      // z-10 is intentionally lower than other service pages (z-20) because the Hero is z-0.
      // -mt-8: pulls this section up to seamlessly overlap the Hero's wave edge.
      className=" sticky top-0 wave-top z-10 -mt-8 overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20"
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
        {/* anim-slide-left: CSS animation class that slides the image in from the left.
            Explicit h-[330px]/h-[445px] heights are set here (unlike other pages that use
            h-full) to prevent the image from over-stretching on ultrawide viewports. */}
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-[330px] w-full rounded-lg object-cover object-center md:h-[445px] "
          />
        </div>

        {/* anim-slide-right anim-delay-2: enters from right with a stagger delay so
            image and text animate in sequence rather than simultaneously */}
        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          {/* sm:text-5xl is larger than other service pages (sm:text-4xl), giving
              the CAC heading extra weight to match the clinical significance of the score */}
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl pt-16">
           What Is a Coronary Artery Calcium Scoring CT ?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
         Calcium is a marker of Coronary Artery Disease. A Coronary Artery Calcium or CAC Scoring CT uses a low-dose CT scanner to detect and measure calcified plaque buildup inside the coronary arteries – producing a single number, your CAC Score, that reflects your overall cardiac risk. The exam is non-invasive, requires no injections, and is completed in minutes. Your score is then reviewed by one of our on-site radiologists and communicated to you and your physician to guide next steps.
          </p>

          {/* list-disc without ml-5 (unlike other pages) — intentional: the cardiac
              page uses default list indentation rather than the extra left margin */}
          <ul className="mt-6 space-y-5 list-disc">
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
               Results are expressed as a CAC Score to help assess your overall cardiac risk.
Experience a quick, reliable screening that gives you and your physician a meaningful, actionable picture of your heart health.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
