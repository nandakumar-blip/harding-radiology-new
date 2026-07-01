// Schedule.tsx — scheduling CTA card at the bottom of the Whole-Body MRI page.
// Sits inside a white outer section for padding, with an inner rounded card
// that uses the light sky-blue (#b8dff0) brand colour as its background.
// The card is a two-column grid: text + CTA on the left, an image on the right.
import { Phone } from "lucide-react";
import scheduleImage from "../../assets/ultrasound/6.png";
import { DotGrid, Rings } from "./Decorations";

const Schedule = () => {
  return (
    // White outer section provides breathing room around the rounded card without
    // requiring negative margins or z-index adjustments.
    <section className="relative z-20 bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 py-16">
      {/* Inner card: overflow-hidden clips the Rings decoration that bleeds
          past the bottom-right corner of the rounded rectangle. */}
      <div className="relative w-full grid overflow-hidden rounded-xl bg-[#b8dff0] shadow-xl md:grid-cols-[1fr_1.05fr]">
        {/* DotGrid anchored to the left side of the card interior so it frames
            the text column without overlapping the heading. */}
        <DotGrid className="absolute left-5 top-20 opacity-40" rows={4} cols={2} />
        {/* Rings bleed past the card edge (bottom-right) and are clipped by
            overflow-hidden on the parent — this creates a "partial ring" that
            draws the eye toward the image without needing a full SVG. */}
        <Rings className="absolute -bottom-10 -right-8 opacity-80" size={110} />

        {/* Text + CTA column: z-10 keeps content above the absolute decorations. */}
        <div className="relative z-10 px-8 py-9 md:px-16">
          <h2 className="text-2xl font-bold text-[#1a2b5e] sm:text-2xl">
            Ready to Schedule Your Ultrasound?
          </h2>
          <p className="mt-6 text-md text-[#2a4a6e]">Our team can typically accommodate prompt scheduling for most ultrasound referrals. Walk-ins welcome based on availability. Call us now to speak with our team or book your appointment online by clicking the Appointment button.</p>
          <button className="mt-5 inline-flex items-center gap-4 rounded-full bg-[#00c2c7] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
            <Phone size={20} />
            Call Now
          </button>
        </div>

        {/* Image column: absolute fill so it stretches to whatever height the
            text column reaches, keeping the card's two halves vertically aligned
            regardless of copy length. */}
        <div className="relative min-h-55">
          <img
            src={scheduleImage}
            alt="Doctor ready to schedule an X-ray"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
          {/* Left-side fade: bg-linear-to-r from the card background colour to
              transparent. This blends the image edge into the text column so the
              two halves feel connected rather than separated by a hard seam. */}
          <div className="absolute inset-y-0 left-0 w-28 bg-linear-to-r from-[#b8dff0] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
