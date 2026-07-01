// Hero.tsx — two-panel hero for the About page.
// Section 1 (dark): brand statement + stats on a deep navy background.
// Section 2 (light): patient-first philosophy copy alongside a patient photo.
// A 1.5px gradient bar between sections acts as a visual "wave" transition,
// blending navy → teal → sky blue → pale blue without an SVG clip-path.
import legacyImg from "../../assets/about/scan-img.jpg";
import happyPatient from "../../assets/about/scan-2-img.png";

const Hero = () => {
  return (
    // z-10 keeps this hero above the page background but below the sticky
    // Experience section (z-20) so scroll-stacking works correctly.
    <section className="relative z-10 overflow-hidden">

      {/* ── SECTION 1: Dark split ── */}
      <div className="relative flex min-h-screen items-center bg-[#1a4d7a] pt-20 sm:pt-24">
        {/* Noise texture overlay: a tiny inline SVG fractal-noise filter tiled
            at 300×300 px. Keeps the flat navy from looking too "digital" while
            staying lightweight (no external image request). Opacity 0.06 is
            the sweet spot — visible on calibrated displays, invisible on mobile. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
          }}
        />

        {/* Concentric rings decoration: three border-only circles offset from
            the left edge, each inset by 16px and progressively more opaque,
            creating a depth-of-field / radar-pulse effect anchored to the
            left-centre of the section. They are purely decorative (pointer-events-none). */}
        <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2">
          <div className="h-[560px] w-[560px] rounded-full border border-[#00c2c7]/10" />
          <div className="absolute left-16 top-16 h-[400px] w-[400px] rounded-full border border-[#00c2c7]/15" />
          <div className="absolute left-32 top-32 h-[240px] w-[240px] rounded-full border border-[#00c2c7]/20" />
        </div>

        {/* Soft radial teal glow pinned to the top-right corner — balances the
            heavy blue mass and draws the eye toward the image column. */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-15"
          style={{ background: "radial-gradient(circle at top right, #00c2c7, transparent 70%)" }}
        />

        <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 py-16">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">

            {/* Left: Text */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00c2c7]/40 bg-[#00c2c7]/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00c2c7]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">
                  About Harding Radiology
                </span>
              </div>

              <h1
                className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl anim-slide-left"
              >
                Complete{" "}
                <span className="text-[#00c2c7]">Imaging.</span>
                <br />
                Complete
                <br />
                <span className="text-white/70">Peace of Mind.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg anim-slide-left anim-delay-2">
                At Harding Radiology, advanced diagnostic imaging meets
                compassionate care — giving you and your physician the clarity
                needed to move forward with confidence.
              </p>

              {/* Stats row: each object drives one metric callout.
                  The border-t above acts as a visual separator from the body copy. */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8 anim-slide-left anim-delay-3">
                {[
                  { value: "35+", label: "Years of Excellence" },
                  { value: "5,000+", label: "Patients Served" },
                  { value: "100%", label: "Board-Certified" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-3xl font-bold text-[#00c2c7]">{value}</p>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/40">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#00c2c7] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#00c2c7]/30 transition hover:opacity-90 anim-slide-left anim-delay-4">
                Book an Appointment
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative flex-1 min-w-0 anim-slide-right">
              {/* Blurred gradient halo behind the card — gives the card a
                  "floating" depth illusion without a real drop-shadow on the image. */}
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-25"
                style={{ background: "linear-gradient(135deg, #00c2c7, #1a2b5e)" }}
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src={legacyImg}
                  alt="Harding Radiology — advanced imaging facility"
                  className="w-full object-contain"
                  style={{ maxHeight: "520px", objectPosition: "center top" }}
                />
                {/* Bottom fade: blends the image into the section background
                    so the card feels embedded rather than pasted on. */}
                <div
                  className="absolute inset-x-0 bottom-0 h-40"
                  style={{ background: "linear-gradient(to top, rgba(26,77,122,0.85) 0%, transparent 100%)" }}
                />
              </div>

              {/* Glassmorphism badge: low-opacity white background + backdrop-blur
                  lets the image show through while keeping text readable.
                  border-white/15 adds a subtle frosted-glass rim. */}
              <div
                className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/15 px-5 py-3"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00c2c7]/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00c2c7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Top-Rated Imaging Center</p>
                  <p className="text-[10px] text-white/50">Serving our community since 1989</p>
                </div>
              </div>

              {/* Floating pill badge — positioned outside the card boundary (-right-4)
                  to break the rectangle and add visual interest. Same glassmorphism
                  treatment as the bottom badge. */}
              <div
                className="absolute -right-4 top-8 rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white"
                style={{ background: "rgba(0,194,199,0.15)", backdropFilter: "blur(12px)" }}
              >
                Board-Certified Radiologists
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Transition bar ──
          A 1.5px horizontal strip that fades from section-1 navy through brand
          teal to sky-blue. Cheaper than an SVG wave and renders crisply at all
          viewport widths because it is a solid-color element, not a shape. */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #1a4d7a 0%, #00c2c7 40%, #7ab8d4 60%, #b8dff0 100%)" }}
      />

      {/* ── SECTION 2: Light / Patient-First ── */}
      <div className="relative bg-[#b8dff0] w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 py-20 md:py-28">
        {/* 7×7 dot grid — rendered purely with SVG circles so it scales without
            any raster assets. Hidden on small screens (lg:block) to avoid clutter. */}
        <svg className="absolute right-10 top-10 hidden opacity-20 lg:block" width="140" height="140" viewBox="0 0 140 140">
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2.5" fill="#1a4d7a" />
            ))
          )}
        </svg>

        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">

          {/* Image with layered pseudo-shadow boxes:
              the offset teal and navy rectangles behind the photo create
              a stacked-card depth effect without box-shadow blur artefacts. */}
          <div className="relative flex-1 min-w-0 anim-slide-left">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[#00c2c7]/20" />
            <div className="absolute -bottom-4 -right-4 h-3/4 w-3/4 rounded-3xl bg-[#1a4d7a]/10" />
            <img
              src={happyPatient}
              alt="Patient-first care at Harding Radiology"
              className="relative w-full rounded-3xl object-cover shadow-2xl"
              style={{ maxHeight: "480px", objectPosition: "center top" }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 anim-slide-right">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#00c2c7]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">
                Our Philosophy
              </span>
            </div>

            <h2
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ color: "#1a2b5e" }}
            >
              Patient-<span className="text-[#00c2c7]">First</span>
              <br />
              Care Philosophy
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#2a4a6e] sm:text-lg">
              We understand that a medical appointment can feel overwhelming.
              Every step at Harding Radiology is designed around your comfort —
              from the moment you schedule to the moment you receive your results.
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#2a4a6e] sm:text-lg">
              Our staff explains each procedure, answers your questions, and
              ensures you feel confident throughout your visit. Your health and
              peace of mind are always our first priority.
            </p>

            {/* Checkmark bullet list — each string maps to a single feature point.
                The teal tick icon is an inline SVG so it matches the brand colour
                exactly without requiring an icon library import. */}
            <ul className="mt-8 space-y-3">
              {[
                "Compassionate, patient-centered care",
                "Expert board-certified radiologists on site",
                "Fast, accurate results communicated clearly",
                "Comfortable, modern imaging environment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00c2c7]/15">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#00c2c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#1a2b5e]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
