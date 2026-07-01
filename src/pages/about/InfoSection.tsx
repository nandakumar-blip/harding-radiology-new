// InfoSection.tsx — two stacked sections at the bottom of the About page:
// 1. "Our Expert Radiologists" — a responsive grid of doctor cards beside a
//    "Connect With Us" CTA panel that uses a glassmorphism quote card.
// 2. "Trusted Referral Partner" — a highlight box with three key metrics for
//    physicians who refer patients.
import { ArrowRight } from "lucide-react";


// Each entry in `doctors` represents one board-certified radiologist.
// Shape:
//   initials     — two-letter avatar fallback shown in the circular avatar when
//                  no photo is available; keeps the card layout stable.
//   name         — full display name including credentials.
//   specialty    — primary board certification area (used as a muted pill tag).
//   subspecialty — fellowship focus (used as a teal pill tag to signal depth).
//   bio          — one-paragraph career summary; kept under ~200 chars so it
//                  fits the fixed-height card without overflow.
const doctors = [
  {
    initials: "AM",
    name: "Dr. Ann M. Moore, MD",
    specialty: "General Radiology",
    subspecialty: "Nuclear Radiology",
    bio: "Over 30 years of experience. Fellowship in Nuclear Medicine at NYU. Former Chief of Radiology at Hospital Center at Orange. Board-certified with special competence in Nuclear Medicine.",
  },
  {
    initials: "SS",
    name: "Dr. Sheela Sonalkar, MD",
    specialty: "General Radiology",
    subspecialty: "Vascular & Interventional",
    bio: "Over 41 years of clinical experience. Residency at Hackensack University Medical Center. Fellowship in Nuclear Medicine and Diagnostic Imaging at St. Vincent's Hospital, New York.",
  },
  {
    initials: "CB",
    name: "Dr. Christel Bauer, MD",
    specialty: "Diagnostic Radiology",
    subspecialty: "Neuroradiology",
    bio: "Graduate of Cornell University Medical College, 1988. Over 29 years of experience with subspecialty focus in Neuroradiology.",
  },
  {
    initials: "SR",
    name: "Dr. Simon Ryoo, MD",
    specialty: "Diagnostic Radiology",
    subspecialty: "Musculoskeletal Radiology",
    bio: "Graduate of SUNY Upstate Medical University, 2004. Musculoskeletal fellowship at SUNY. Certified by the American Board of Radiology.",
  },
  {
    initials: "ST",
    name: "Dr. Stephen Toder, MD",
    specialty: "General Radiology",
    subspecialty: "Abdominal Radiology",
    bio: "Board-certified since 1980. Trained at NYU Medical Center with additional fellowship in Abdominal Radiology. Extensive experience across hospital and outpatient settings.",
  },
  {
    initials: "AA",
    name: "Dr. Ajay K. Agarwala, MD",
    specialty: "Cardiovascular Disease",
    subspecialty: "Interventional Cardiology",
    bio: "Over 23 years in interventional and general cardiology. Graduate of University of Illinois at Chicago, 1994. Affiliated with Newark Beth Israel Medical Center.",
  },
];

const InfoSection = () => {
  return (
    <>
      {/* ── Our Expert Team + Connect With Us ── */}
      {/* z-30 sits on top of Experience (z-20) so the light background fully
          covers the dark section below when this panel scrolls into view. */}
      <section className="relative z-30 bg-[#f8fafc] py-16 md:py-20">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">

          {/* Section header */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">
              Meet The Team
            </span>
            <h2
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
              style={{ color: "#1a2b5e" }}
            >
              Our Expert Radiologists
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#2a4a6e]">
              Fellowship-trained, board-certified radiologists bringing deep subspecialty
              expertise — with a radiologist on-site throughout all operating hours.
            </p>
          </div>

          {/* Two-column layout: doctor grid gets flex-[2] (⅔ width) so the
              Connect With Us sidebar at flex-1 (⅓) stays a comfortable width
              without being squished on mid-range viewports. */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">

            {/* Doctor grid — 2 columns on sm+, 1 on mobile.
                content-start prevents the grid from stretching to fill the
                flex row height, so cards stay at their natural height. */}
            <div className="flex-[2] grid grid-cols-1 gap-5 sm:grid-cols-2 content-start">
              {doctors.map(({ initials, name, specialty, subspecialty, bio }) => (
                <div
                  key={name}
                  className="group flex flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,194,199,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    {/* Initials avatar: border-2 with reduced opacity creates a
                        subtle "ring" effect without a full outline-ring utility. */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00c2c7]/15 text-sm font-bold text-[#00c2c7] border-2 border-[#00c2c7]/30">
                      {initials}
                    </div>
                    <div>
                      <h3
                        className="text-sm font-bold transition-colors group-hover:text-[#00c2c7]"
                        style={{ color: "#1a2b5e" }}
                      >
                        {name}
                      </h3>
                      {/* Two pill tags: navy-tinted for the broad specialty,
                          teal-tinted for the subspecialty — the colour difference
                          signals hierarchy at a glance. */}
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-[#1a2b5e]/8 px-2 py-0.5 text-[10px] font-semibold text-[#1a2b5e]">
                          {specialty}
                        </span>
                        <span className="rounded-full bg-[#00c2c7]/10 px-2 py-0.5 text-[10px] font-semibold text-[#00c2c7]">
                          {subspecialty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-xs leading-relaxed text-[#2a4a6e]">{bio}</p>
                  {/* Animated underline on hover — same w-0 → w-full pattern used
                      in Experience.tsx for visual consistency across sections. */}
                  <div className="mt-4 h-0.5 w-0 rounded-full bg-[#00c2c7] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* Connect With Us sidebar — full-bleed image background with a
                glassmorphism quote card layered on top.
                The image fills the panel absolutely so the panel height is
                driven by the flex row, not the image's natural dimensions. */}
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-2xl shadow-xl lg:min-w-[280px]">
              <img src="https://devshowcase.io/wp-content/uploads/2026/05/Harding-Radiology-Center-%E2%80%93-Expert-MRI-Imaging.png" alt="MRI Machine" className="absolute inset-0 h-full w-full object-cover" />
              {/* Overlay div left intentionally empty — can be used to add a
                  dark scrim if the background image changes to a lighter photo. */}
              <div
                className="absolute inset-0"
              />
              <div className="relative flex h-full flex-col items-center justify-between p-8 text-center text-white">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#00c2c7]/40 bg-[#00c2c7]/10 px-4 py-1.5 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00c2c7]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00c2c7]">Get In Touch</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight sm:text-3xl">Connect With Us</h3>
                  <p className="mt-2 text-sm text-white/60">Ready to schedule, or have questions?</p>
                </div>

                {/* Glassmorphism quote card: semi-transparent white background +
                    backdrop-blur creates the frosted-glass look against the photo.
                    border-white/10 provides a thin rim to separate card from image. */}
                <div
                  className="my-6 rounded-xl border border-white/10 p-5 w-full"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}
                >
                  <p className="text-sm font-semibold italic leading-relaxed text-white/85">
                    "We Look Forward To Supporting Your Healthcare Journey With Expertise And Care."
                  </p>
                </div>
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#00c2c7] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90">
                  Book an Appointment
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00c2c7]">
                    <ArrowRight size={13} />
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Referral Partner ──
          Targets a physician audience rather than patients — language and
          metrics (Same-Day / STAT / On-Site) are clinical rather than
          patient-facing. Kept in a separate <section> so it can be independently
          hidden or reordered without touching the team grid above. */}
      <section className="relative z-30 bg-white py-16 md:py-20">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
          <div className="rounded-2xl border border-[#e5eff8] bg-[#f8fafc] p-8 md:p-10">
            {/* Teal accent bar — a short decorative rule that anchors the
                heading visually without needing an icon. */}
            <div className="h-1 w-12 rounded-full bg-[#00c2c7] mb-6" />
            <h2
              className="text-2xl font-bold leading-tight sm:text-3xl"
              style={{ color: "#1a2b5e" }}
            >
              A Trusted Referral Partner For Physicians Across The Region
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#2a4a6e]">
              Physicians across Morris and Somerset Counties refer their patients to Harding
              Radiology knowing they will receive prompt scheduling, accurate{" "}
              <span className="font-semibold text-[#00c2c7]">imaging</span>, and{" "}
              <span className="font-semibold text-[#00c2c7]">same-day reports</span> as standard.
              STAT results are available on request.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#2a4a6e]">
              If you are a provider interested in establishing a referral relationship, our team
              is available to assist.
            </p>

            {/* Three-column metric strip: each object provides a headline value
                and a short label. The grid is always 3-wide (no responsive collapse)
                because all three items need to be scannable side-by-side. */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#e5eff8] pt-8">
              {[
                { value: "Same-Day", label: "Reports" },
                { value: "STAT", label: "Results Available" },
                { value: "On-Site", label: "Radiologists" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-lg font-bold text-[#00c2c7]">{value}</p>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-[#2a4a6e]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
