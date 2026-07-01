// Pricing.tsx — "Whole-Body MRI Pricing & Packages" section.
// Renders on a dark navy background (z-50, highest in the page stack) so it
// fully covers every sticky section below when scrolled into view.
// Structure:
//   1. Section header with badge + headline
//   2. Two glassmorphism pricing cards side-by-side
//   3. A feature comparison table driven by the `features` array

// Each entry in `features` describes one detectable condition or scan benefit.
// Shape:
//   label         — human-readable feature name shown in the table's left column.
//   comprehensive — whether this feature is included in the $1,999 Comprehensive scan.
//   quick         — whether this feature is included in the $999 Quick scan.
// The table renders a <Check /> or <Dash /> component in each plan column based
// on these booleans, making it easy to add or remove features without touching JSX.
const features = [
  {
    label: "Solid tumors (as early as stage 1)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Whole spine including degenerative spine and joint conditions",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Metabolic disorders (fatty liver, hemochromatosis)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Neurological disorders (multiple sclerosis, dementia)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Non-cancerous conditions (cysts, hematomas, hemangiomas)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Aneurysms",
    comprehensive: true,
    quick: true,
  },
  // The three items below have quick: false — they are Comprehensive-only extras
  // that justify the price difference between the two tiers.
  {
    label: "Harding Body Composition analysis",
    comprehensive: true,
    quick: false,
  },
  {
    label: "Advanced brain health assessment including brain volume analysis",
    comprehensive: true,
    quick: false,
  },
  {
    label: "Convenient lab testing",
    comprehensive: true,
    quick: false,
  },
];

// Check — teal filled circle with a checkmark; used in cells where the feature
// is included. The circular border at reduced opacity creates a subtle "badge"
// without requiring an additional background colour utility.
const Check = () => (
  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00c2c7]/15 border border-[#00c2c7]/30">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1.5 6L4.5 9L10.5 3" stroke="#00c2c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

// Dash — muted circle with a horizontal rule; used in cells where the feature
// is not included in the plan. Low-opacity white keeps it readable on navy
// without implying anything negative — it signals "not in this tier" neutrally.
const Dash = () => (
  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
    <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
      <path d="M1 1H9" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </span>
);

const Pricing = () => {
  return (
    // z-50 is the highest z-index on the page — ensures this section completely
    // covers the sticky Experience and InfoSection layers once scrolled into view,
    // preventing any dark-navy bleed-through at the top edge.
    <section className="relative z-50 overflow-hidden bg-[#1a4d7a] py-20 md:py-28">
      {/* Noise texture — same inline SVG fractalNoise as other dark sections,
          opacity slightly lower (0.05 vs 0.06) to stay subtle at large viewport widths. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      {/* Left teal glow — anchored off the left edge at the upper quarter,
          softening the transition from the light InfoSection above. */}
      <div
        className="pointer-events-none absolute -left-60 top-1/4 h-175 w-175 opacity-10"
        style={{ background: "radial-gradient(circle, #00c2c7 0%, transparent 70%)" }}
      />
      {/* Right glow — mirrored at the lower quarter to balance the composition
          and prevent the section from looking top-heavy. */}
      <div
        className="pointer-events-none absolute -right-60 bottom-1/4 h-150 w-150 opacity-8"
        style={{ background: "radial-gradient(circle, #00c2c7 0%, transparent 70%)" }}
      />

      <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center mb-14 anim-slide-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00c2c7]/40 bg-[#00c2c7]/10 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c2c7]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Whole-Body MRI{" "}
            <span className="text-[#00c2c7]">Pricing & Packages</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Two thorough whole-body MRI options — choose the depth that fits your health goals.
            No hidden fees. No referral required.
          </p>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-14 anim-slide-right">

          {/* Comprehensive card — glassmorphism technique:
              rgba background (7% teal tint) + backdropFilter blur(20px) creates
              the frosted-glass look against the dark navy section background.
              boxShadow inset glow reinforces the teal border colour inward
              without requiring an extra wrapper element. */}
          <div className="relative overflow-hidden rounded-3xl border border-[#00c2c7]/40 p-8 flex flex-col"
            style={{ background: "rgba(0,194,199,0.07)", backdropFilter: "blur(20px)" }}>
            {/* Inset glow ring: adds a subtle inner luminance to the card boundary,
                making the teal border appear to "glow" from inside. */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ boxShadow: "inset 0 0 60px rgba(0,194,199,0.08)" }}
            />
            {/* "Most Popular" badge: -right-0 + rounded-l-full makes it look like
                a tab attached to the right edge of the card. */}
            <div className="absolute right-0 top-6">
              <div className="rounded-l-full bg-[#00c2c7] px-5 py-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Most Popular</span>
              </div>
            </div>

            <div className="relative">
              {/* CT scanner icon — concentric circles with cardinal tick marks,
                  visually echoing the CT crosshair motif used in About/Experience.tsx. */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00c2c7]/30 bg-[#00c2c7]/10 mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c2c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  <line x1="12" y1="2" x2="12" y2="0.5" /><line x1="12" y1="22" x2="12" y2="23.5" />
                  <line x1="2" y1="12" x2="0.5" y2="12" /><line x1="22" y1="12" x2="23.5" y2="12" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">Comprehensive<br />Whole Body Scan</h3>
              <p className="mt-2 text-xs font-medium text-white/40 uppercase tracking-widest">45 min session</p>

              {/* Price display: border-t separates it from the session length label
                  so the large number has clear vertical breathing room. */}
              <div className="mt-6 flex items-end gap-2 border-t border-white/10 pt-6">
                <span className="text-5xl font-bold text-white">$1,999</span>
                <span className="mb-2 text-sm text-white/40">USD</span>
              </div>

              <p className="mt-2 text-xs text-white/50 leading-relaxed">
                Full-body scan plus body composition analysis, advanced brain health assessment,
                and convenient lab testing — the most complete picture of your health.
              </p>

              <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#00c2c7] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#00c2c7]/25 transition hover:opacity-90">
                Book Now
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Quick card — subdued glassmorphism: 4% white tint instead of teal,
              matching the un-selected/secondary state visual weight. The button
              uses a border-only style (no fill) to signal secondary action. */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 flex flex-col"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}>

            <div className="relative">
              {/* Lightning bolt icon — conveys speed/efficiency, differentiating
                  the Quick scan concept from the Comprehensive scanner icon. */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">Quick<br />Whole Body Scan</h3>
              <p className="mt-2 text-xs font-medium text-white/40 uppercase tracking-widest">25 min session</p>

              <div className="mt-6 flex items-end gap-2 border-t border-white/10 pt-6">
                <span className="text-5xl font-bold text-white">$999</span>
                <span className="mb-2 text-sm text-white/40">USD</span>
              </div>

              <p className="mt-2 text-xs text-white/50 leading-relaxed">
                A focused whole-body MRI covering the most critical conditions —
                all the essentials in a shorter, convenient session.
              </p>

              <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/8 px-6 py-4 text-sm font-bold text-white transition hover:border-[#00c2c7]/50 hover:bg-[#00c2c7]/10">
                Book Now
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* ── Comparison table ──
            Three-column CSS grid: [feature label | Comprehensive col | Quick col].
            The two plan columns are fixed-width (w-28 each) so check/dash icons
            stay centred regardless of label text length in the first column.
            Alternating row backgrounds (transparent / 2% white) aid scanability
            without a full border-grid, which would feel too clinical. */}
        <div className="overflow-hidden rounded-3xl border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>

          {/* Table header: mirrors the card titles + prices so the column
              mapping is clear even when scrolled past the cards above. */}
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/10 px-6 py-5 md:px-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">What's Covered</span>
            </div>
            <div className="w-28 text-center">
              <p className="text-[11px] font-bold text-white/80 leading-tight">Comprehensive</p>
              <p className="text-[10px] text-white/40">$1,999</p>
            </div>
            <div className="w-28 text-center">
              <p className="text-[11px] font-bold text-white/80 leading-tight">Quick</p>
              <p className="text-[10px] text-white/40">$999</p>
            </div>
          </div>

          {/* Feature rows — rendered from the `features` array.
              Even-indexed rows are fully transparent; odd rows get 2% white tint.
              Using inline style (not Tailwind) because the alternation is dynamic. */}
          {features.map(({ label, comprehensive, quick }, i) => (
            <div
              key={label}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 md:px-8 transition-colors hover:bg-white/3"
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}
            >
              <span className="text-sm leading-snug text-white/70">{label}</span>
              <div className="w-28 flex justify-center">
                {comprehensive ? <Check /> : <Dash />}
              </div>
              <div className="w-28 flex justify-center">
                {quick ? <Check /> : <Dash />}
              </div>
            </div>
          ))}

          {/* Footer note: legal/process disclaimer at lowest visual weight
              (text-white/35) — informative but should not compete with the CTAs. */}
          <div className="border-t border-white/10 px-6 py-5 md:px-8">
            <p className="text-xs text-white/35 leading-relaxed">
              All scans are read by board-certified radiologists on site. Results delivered within 48 hours.
              No physician referral required. Contact us for insurance and FSA/HSA eligibility.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
