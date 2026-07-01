// Schedule section for the DEXA Scan page.
// Final content section before the footer. Contains an embedded YouTube explainer
// video and a two-column CTA card prompting the patient to book or call.
import { Phone } from "lucide-react";
import scheduleImage from "../../assets/dexa-scan/5.png";
import { DotGrid, Rings } from "./Decorations";

const Schedule = () => {
  return (
    // relative z-20 ensures this sits above the sticky Hero section (z-10)
    // as the page reaches its bottom; bg-white provides a clean break
    // from the light-blue InfoSection above.
    <section className="relative z-20 bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 py-16">
      {/* YouTube embed: patient-facing explainer video placed above the CTA card
          to provide context before asking for a booking action.
          referrerPolicy / allowFullScreen are the correct camelCase JSX props. */}
      <div className="flex justify-center mb-16">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7aum8ry3y4?si=Wklq7UaLvfAyNlgi" title="YouTube video player" style={{ border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>

      {/* CTA card: two-column grid — text 1fr, image 1.05fr.
          overflow-hidden on the card clips decorations and rounded corners cleanly. */}
      <div className="relative w-full grid overflow-hidden rounded-xl bg-[#b8dff0] shadow-xl md:grid-cols-[1fr_1.05fr]">
        {/* Decorations are absolutely positioned within the card boundary */}
        <DotGrid className="absolute left-5 top-20 opacity-40" rows={4} cols={2} />
        {/* Rings bleed off the bottom-right corner to visually frame the image side */}
        <Rings className="absolute -bottom-10 -right-8 opacity-80" size={110} />

        {/* relative z-10 keeps the text column above the absolute DotGrid overlay */}
        <div className="relative z-10 px-8 py-9 md:px-16">
          <h2 className="text-2xl font-bold text-[#1a2b5e] sm:text-2xl">
           Schedule Your DEXA Scan Appointment
          </h2>
          <p className="mt-6 text-md text-[#2a4a6e]">A short, simple scan that gives you and your physician a clear picture of your bone health. Call our team or book online today.</p>
          <button className="mt-5 inline-flex items-center gap-4 rounded-full bg-[#00c2c7] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
            <Phone size={20} />
            Call Now
          </button>
        </div>

        {/* Image column: absolutely fills its grid cell so the image scales to any
            card height without distorting card dimensions.
            The left-side gradient (from-[#b8dff0] to-transparent) blends the image
            into the text column rather than showing a hard cut. */}
        <div className="relative min-h-[220px]">
          <img
            src={scheduleImage}
            alt="Doctor ready to schedule an X-ray"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
          <div className="absolute inset-y-0 left-0 w-28 bg-linear-to-r from-[#b8dff0] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
