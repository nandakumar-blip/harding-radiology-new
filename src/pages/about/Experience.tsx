// Experience.tsx — "Comprehensive Imaging Services" section for the About page.
// Renders a dark-navy panel (z-20) that stacks over the Hero section on scroll
// via -mt-8 and the wave-top CSS class (which applies a curved top clip-path).
// Displays a heading + CT scan image on the left, then a 3-column service grid below.
import ctImage from "../../assets/about/skull-img.png";

// Each entry in `services` describes one imaging modality offered by the clinic.
// Shape:
//   index       — zero-padded display number ("01"–"09"), shown as a faint label
//                 in the card corner; used as the React list key.
//   name        — full clinical name of the service.
//   description — one-sentence summary of capability / equipment.
//   icon        — inline SVG element; keeping icons inline avoids a separate
//                 icon-font dependency and lets stroke colour be overridden via
//                 Tailwind's `text-[#00c2c7]` on the parent.
const services = [
  {
    index: "01",
    name: "Computed Tomography (CT Scan)",
    description: "Full diagnostic CT capability, including low-dose lung cancer screening and cardiac calcium scoring with our GE Optima Scanner.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="14" /><circle cx="18" cy="18" r="8" /><circle cx="18" cy="18" r="3" />
        <line x1="18" y1="4" x2="18" y2="1" /><line x1="18" y1="32" x2="18" y2="35" />
        <line x1="4" y1="18" x2="1" y2="18" /><line x1="32" y1="18" x2="35" y2="18" />
      </svg>
    ),
  },
  {
    index: "02",
    name: "Magnetic Resonance Imaging (MRI)",
    description: "High-field open MRI using the Hitachi Altaire — clinically rigorous, with a fully open design that eliminates the enclosed tunnel experience.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="13" width="28" height="10" rx="5" /><circle cx="18" cy="18" r="4" />
        <path d="M4 18 H1M32 18 H35" /><path d="M9 8 Q18 4 27 8" /><path d="M9 28 Q18 32 27 28" />
      </svg>
    ),
  },
  {
    index: "03",
    name: "Mammogram & 3D Mammography",
    description: "Conventional and 3D tomosynthesis mammography. The most clinically advanced breast X-ray available for routine and diagnostic screening.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28 C8 16 12 6 18 6 C24 6 28 16 28 28" /><path d="M5 28 H31" />
        <circle cx="18" cy="16" r="2.5" /><path d="M14 22 Q18 19 22 22" />
      </svg>
    ),
  },
  {
    index: "04",
    name: "DEXA & Bone Density Scan",
    description: "Dual-energy X-ray absorptiometry measuring bone mineral density at the lumbar spine and hip. Standard of care for osteoporosis assessment.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4 C14 4 12 7 12 10 C12 13 14 15 14 18 C14 21 12 23 12 26 C12 29 14 32 18 32 C22 32 24 29 24 26 C24 23 22 21 22 18 C22 15 24 13 24 10 C24 7 22 4 18 4Z" />
        <line x1="12" y1="14" x2="8" y2="12" /><line x1="12" y1="22" x2="8" y2="24" />
        <line x1="24" y1="14" x2="28" y2="12" /><line x1="24" y1="22" x2="28" y2="24" />
      </svg>
    ),
  },
  {
    index: "05",
    name: "CT Lung Screening (Low Dose LDCT)",
    description: "Low-dose CT lung screening for early detection of lung cancer in high-risk individuals, in line with current USPSTF guidelines.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8 L18 26" />
        <path d="M18 12 C18 12 10 12 8 17 C6 22 8 28 12 28 C16 28 18 24 18 24" />
        <path d="M18 12 C18 12 26 12 28 17 C30 22 28 28 24 28 C20 28 18 24 18 24" />
        <circle cx="18" cy="7" r="2" />
      </svg>
    ),
  },
  {
    index: "06",
    name: "Breast Ultrasound & 3D Breast Ultrasound",
    description: "Hitachi SOFIA automated whole-breast ultrasound — 30 seconds per breast, radiation-free, and specifically indicated for dense breast tissue.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="10" height="18" rx="3" />
        <path d="M16 12 Q22 10 24 16 Q26 22 22 26 Q18 30 16 26" />
        <path d="M19 14 Q23 14 24 18" strokeDasharray="2 2" /><path d="M19 20 Q23 20 24 22" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    index: "07",
    name: "CT Cardiac Scoring",
    description: "Non-invasive coronary artery calcium (CAC) scoring to assess cardiovascular risk in asymptomatic patients.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 30 C18 30 6 22 6 14 C6 10 9 7 13 7 C15.5 7 17.5 8.5 18 10 C18.5 8.5 20.5 7 23 7 C27 7 30 10 30 14 C30 22 18 30 18 30Z" />
        <circle cx="13" cy="15" r="1.5" fill="currentColor" /><circle cx="20" cy="13" r="1.5" fill="currentColor" /><circle cx="24" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: "08",
    name: "X-Ray",
    description: "Fully computerized digital radiography for bone, chest, abdominal, and spine studies.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="20" height="28" rx="2" />
        <path d="M14 10 C14 10 12 14 14 18 C16 22 14 26 14 26" /><path d="M22 10 C22 10 24 14 22 18 C20 22 22 26 22 26" />
        <path d="M14 18 H22" /><path d="M12 14 H24" /><path d="M12 22 H24" />
      </svg>
    ),
  },
  {
    index: "09",
    name: "Ultrasound",
    description: "GE Logic series with Doppler color capability for abdominal, pelvic, musculoskeletal, and vascular applications.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 28 L14 8 L18 26 L22 14 L26 28" />
        <path d="M4 18 Q6 12 10 18" /><path d="M26 18 Q30 12 32 18" />
      </svg>
    ),
  },
];

const Experience = () => {
  return (
    // z-20 sits above the Hero (z-10); -mt-8 + wave-top together produce the
    // curved overlap that makes this section appear to "rise" over the hero on scroll.
    <section className="relative z-20 -mt-8 overflow-hidden bg-[#1a4d7a] text-white wave-top">
      {/* Noise texture — same inline SVG fractal-noise technique as Hero.tsx,
          applied here to the dark navy background for visual consistency. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      {/* Teal ambient glow — radial gradient anchored off the right edge,
          softening the hard navy-to-nothing boundary. */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] opacity-10"
        style={{ background: "radial-gradient(circle, #00c2c7 0%, transparent 70%)" }}
      />

      <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 pt-20 pb-8">

        {/* ── Top split: Heading + Scan image grid ── */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">

          <div className="flex-1 min-w-0 anim-slide-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00c2c7]/40 bg-[#00c2c7]/10 px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00c2c7]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">What We Offer</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Comprehensive
              <br />
              <span className="text-[#00c2c7]">Imaging Services</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              We offer a full spectrum of outpatient diagnostic imaging, available under one roof,
              reported by the same experienced team, and supported by our fully integrated digital
              imaging system for secure, timely delivery of results to your care provider.
            </p>
          </div>

          <div className="flex-1 min-w-0 anim-slide-right">
            {/* Grayscale + reduced brightness treatment on the CT scan image keeps
                the photo from competing with the white heading text. */}
                  <div  className="overflow-hidden rounded-lg">
                    <img
                      src={ctImage}
                      alt={"skull-img"}
                      className="h-40 w-full object-contain grayscale brightness-90 md:h-48"
                    />
                  </div>


          </div>

        </div>

        {/* Divider: transparent → teal → transparent fade so it doesn't
            create a hard edge across the full viewport width. */}
        <div
          className="my-14 h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,194,199,0.3), transparent)" }}
        />

        {/* ── Services grid ──
            3 columns on lg+, 2 on sm, 1 on mobile.
            Each card uses a radial-gradient hover glow anchored to its own
            top-left corner, revealed only when opacity transitions from 0 → 1,
            so it doesn't leak through to adjacent cards. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pb-16">
          {services.map(({ index, name, description, icon }) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-[#00c2c7]/40 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {/* Per-card hover glow: only rendered inside this card's overflow:hidden
                  boundary, preventing bleed onto neighbouring cards. */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at top left, rgba(0,194,199,0.08), transparent 60%)" }}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#00c2c7] transition-colors duration-300 group-hover:border-[#00c2c7]/30 group-hover:bg-[#00c2c7]/10">
                    {icon}
                  </div>
                  {/* Index number fades from near-invisible to teal on hover,
                      reinforcing interactivity without cluttering the resting state. */}
                  <span className="text-xs font-bold text-white/20 group-hover:text-[#00c2c7]/60 transition-colors">
                    {index}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold leading-snug text-white group-hover:text-[#00c2c7] transition-colors duration-300">
                  {name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{description}</p>
                {/* Animated underline: starts at w-0 and expands to w-full on hover
                    over 500 ms, giving a "reveal" feel without JavaScript. */}
                <div className="mt-4 h-px w-0 bg-[#00c2c7] transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
