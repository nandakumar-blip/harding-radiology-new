// InfoSection.tsx — "Expert Radiologist Insights" section for the WB-MRI page.
// Transitions from the dark Experience section back to the light sky-blue palette,
// using wave-top to create a curved boundary between the two backgrounds.
// Presents three feature columns explaining the clinical value of the WB-MRI service.
import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/ultrasound/2.png"
import icon2 from "../../assets/ultrasound/3.png"
import icon3 from "../../assets/ultrasound/4.png"
import icon4 from "../../assets/ultrasound/5.png"

// Each entry in `columns` describes one pillar of the Harding WB-MRI value proposition.
// Shape:
//   icon  — imported PNG asset (ultrasound/2–4.png) displayed at 40×40 inside a
//            teal circular badge; all icons share the same badge style so swapping
//            assets only requires changing the import.
//   title — short headline for the pillar (rendered as h3).
//   body  — 2–4 sentence explanatory paragraph.
// Note: "Body" is appended to each title string — this appears to be a placeholder
// artefact from authoring; it does not affect rendering logic.
const columns = [
  {
    icon:icon1,
    title: "The Human Touch Body",
    body: "Most screening tools generate data. At Harding, every whole-body MRI is personally reviewed by a board-certified radiologist who adds meaningful clinical context to your report. Rather than leaving you with a list of findings to decode, our radiologists interpret what they see in relation to your overall health – so your physician has what they need to guide your next steps with clarity and confidence.",
},
  {
    icon: icon2,
    title: "Your Health as a Whole Body",
    body: "A whole-body MRI doesn't just look at one system in isolation – it captures brain, spine, chest, abdomen, pelvis, and vasculature together in a single session. This panoramic view allows our radiologists to identify patterns and findings that might be missed when each organ is evaluated separately, giving you and your physician a far more complete picture of what's happening inside your body."

  },
  {
    icon: icon3,
    title: "Tailored Technology for Accuracy Body",
    body: "Whole-body MRI at Harding is designed to detect conditions at their earliest, most treatable stage, from solid tumors and aneurysms to metabolic disorders and neurological changes. Our imaging protocols are continuously refined to improve sensitivity and reduce the likelihood of missed findings, ensuring that the insights you receive are both accurate and clinically meaningful.",

  },

];

const InfoSection = () => {
  return (
    // wave-top clips this section with a curved top edge that sits over the
    // dark Experience section below (z-20). Both share z-20 because they do
    // not overlap simultaneously — Experience is sticky and already scrolled
    // past before InfoSection enters the viewport.
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
           Expert Radiologist Insights You Can Trust
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
        Whole-body MRI reports reviewed by experienced radiologists for accurate, actionable health insights.
          </p>
        </div>

        {/* Feature column list: md:grid-rows-4 reserves space for up to 4 rows
            even though only 3 columns are rendered — this future-proofs the layout
            if a fourth pillar is added without requiring a grid restructure. */}
        <div className="mt-10 grid gap-8 md:grid-rows-4 md:gap-18 w-full">
          {columns.map(({ icon: Icon, title, body, }, index) => (
            <div
              key={title}
              // index > 0 guard: the first item has no top border;
              // subsequent items declare a border colour but no border-width class,
              // so no visible border is drawn — this appears to be an incomplete
              // styling intention rather than a bug.
              className={`px-0 md:px-0 ${index > 0 ? " md:border-[#7ab8d4]" : ""}`}
            >
              <div className="flex items-start gap-5">
                {/* Teal circular icon badge — consistent size (h-16 w-16) and
                    shadow across all three pillars for visual alignment. */}
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00c2c7] text-white shadow-lg">
                  <img src={Icon} className="h-10 w-10"/>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2b5e]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#2a4a6e]">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-[#00c2c7] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
            Book Appointment
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00c2c7]">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
