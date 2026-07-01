// Experience.tsx — "Advanced Whole-Body MRI" detail section for the WB-MRI page.
// Sits at z-20 with sticky top-0 and -mt-8, so it scrolls up over Hero (z-10)
// and is itself later covered by InfoSection (z-20 wave-top) — the stacking
// layers create a layered-cards scroll narrative across the full page.
import { ShieldCheck } from "lucide-react";
import { DotGrid, Rings } from "./Decorations";

// Each item in `items` provides one bullet point for the "what makes our MRI
// different" list. Only `body` is used; the lack of a `title` field is intentional
// — the bullets are meant to read as a tight list, not as separate sub-headings.
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
    // h-screen + overflow-hidden: the section occupies exactly one viewport height.
    // Combined with sticky positioning, this makes the section "stick" while the
    // user scrolls through it before the next sticky layer takes over.
    <section className="sticky top-0 wave-top z-20 -mt-8 h-screen overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20">
      {/* Noise texture overlay — inline SVG fractalNoise tiled at 300×300 px,
          matching the texture applied in the About page for cross-page consistency. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      {/* Teal Rings decoration — bottom-left corner, giving the dark panel
          visual interest without drawing focus away from the image column. */}
      <Rings className="absolute -left-16 bottom-6 opacity-35" color="#00c2c7" size={140} />
      {/* DotGrid — top-right, hidden on small screens (lg:grid) to avoid
          cluttering the single-column mobile layout. */}
      <DotGrid
        className="absolute right-8 top-36 hidden opacity-35 lg:grid"
        color="#00c2c7"
        rows={8}
        cols={4}
      />

      {/* Two-column grid: image (0.9fr) | text (1.1fr).
          Asymmetric columns give the text column slightly more room because the
          image uses object-contain which already leaves whitespace internally. */}
      <div className="relative w-full grid items-center gap-10 pt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 md:grid-cols-[0.9fr_1.1fr]">
        {/* Image card: border-white/50 at 2px gives a bright "screen" frame
            effect without using a coloured border that would fight the photo tones. */}
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={"https://devshowcase.io/wp-content/uploads/2026/01/Pi7_radiologists-consulting-little-girl-before-mri-sca-2026-01-09-09-30-04-utc.jpeg"}
            alt="Modern X-ray experience"
            className="h-100 w-full object-contain object-center  "
          />
        </div>

        {/* anim-delay-2: staggers the text column's entrance animation so it
            appears slightly after the image, creating a left-then-right reveal. */}
        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">
 Advanced Whole-Body MRI with Patient-First Comfort
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
         At Harding Radiology, our whole-body MRI uses high-field imaging hardware and advanced acquisition protocols to capture detailed diagnostic data across your entire body in a single session. Every scan is reviewed by a board-certified radiologist who provides clinical context, not just data, so you and your physician can make informed decisions about your health.
          </p>

          <ul className="mt-6 space-y-5 list-disc ml-5">
            {items.map(({ body }) => (

                <li className="text-sm leading-6 text-white/75">{body}</li>

            ))}
          </ul>

          {/* ShieldCheck callout box: size-48 icon is deliberately large so it
              reads as an authoritative trust signal rather than a decorative
              bullet. border-[#00c2c7] (not white) keeps it on-brand. */}
          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
              Enjoy a spacious, comfortable scan with real-time communication and a care team that's with you every step of the way.
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
