// Appointment request page. Provides the multi-section form through which
// patients submit non-urgent scheduling requests. It does not submit to a live
// endpoint yet — the form is static markup awaiting backend integration.

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Appointment = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────
          Full-width dark-navy banner that contextualises the page before the
          form appears. Splitting the page into a bold hero + a separate form
          section below creates visual breathing room and lets us communicate
          important constraints (routine/non-urgent only, phone number for
          urgent cases) before the user starts filling in fields.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1a4d7a] pt-28 pb-20 text-center">
        {/* Subtle fractal noise rendered as an inline SVG data-URI keeps the
            hero background from looking flat without adding an extra image
            network request. Opacity is intentionally very low (0.06) so it
            reads as texture rather than pattern. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
          }}
        />
        {/* Concentric rings */}
        <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full border border-[#00c2c7]/10" />
          <div className="absolute left-16 top-16 h-[340px] w-[340px] rounded-full border border-[#00c2c7]/15" />
          <div className="absolute left-32 top-32 h-[200px] w-[200px] rounded-full border border-[#00c2c7]/20" />
        </div>
        {/* Teal glow top-right */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] opacity-15"
          style={{ background: "radial-gradient(circle at top right, #00c2c7, transparent 70%)" }}
        />

        <div className="relative px-4 anim-slide-left">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00c2c7]/40 bg-[#00c2c7]/10 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c2c7]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">
              Schedule Your Visit
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Request to make an
          </h1>
          {/* Second line in teal to pull the eye toward the key action word */}
          <h1 className="mt-2 text-4xl font-bold leading-tight text-[#00c2c7] sm:text-5xl lg:text-6xl">
            Appointment
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 anim-slide-left anim-delay-2">
            Welcome to the Radiology Center at Harding's online appointment request and
            scheduling system. Use this secure form to schedule non-urgent &amp; routine
            appointments only.
          </p>

          {/* Phone number is surfaced prominently in the hero — not buried in
              the form — because patients with urgent needs should be able to
              call immediately without reading the entire page first. */}
          <div className="mt-6 anim-slide-left anim-delay-3">
            <p className="text-base font-bold text-white">
              Phone consultations:{" "}
              <a href="tel:9082210603" className="text-[#00c2c7]">908-221-0603</a>
            </p>
            <p className="mt-2 text-sm text-white/50">
              If you have already scheduled an appointment, you may call us to confirm at{" "}
              <a href="tel:9082210603" className="text-[#00c2c7]/80 underline underline-offset-2">
                908-221-0603
              </a>
              .
            </p>
            <p className="mt-4 text-sm font-bold text-white/80">
              For urgent medical concerns within 24 hours, please contact us directly by phone.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient bar visually bridges the dark hero into the light form
          section, preventing a harsh hard-edge colour jump. */}
      {/* ── Transition bar ── */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #1a4d7a 0%, #00c2c7 40%, #7ab8d4 60%, #b8dff0 100%)" }}
      />

      {/* ── Form section ──────────────────────────────────────────────────────
          Light background intentionally contrasts with the dark hero to signal
          a mode switch: "you are now in task mode, not reading mode."
          The form is split into three labelled sub-sections (Patient Info,
          Appointment Details, Health Insurance) so the cognitive load of
          filling it in is broken into digestible chunks.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-16 md:py-20 px--4">
        <p className="mb-10 text-center text-sm font-bold text-[#1a2b5e]">
          For routine and non-urgent appointment requests,{" "}
          <br className="hidden sm:block" />
          please complete this secure form.
        </p>

        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] sm:p-8">

          {/* ── Patient Information ── */}
          {/* Labels here are navy (#1a2b5e) — standard body-text colour — because
              these are routine demographic fields the patient fills for themselves. */}
          <h2 className="mb-5 text-base font-bold" style={{ color: "#1a2b5e" }}>
            Patient Information
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="eg: John Doe"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
                Gender *
              </label>
              <select className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#2a4a6e]/60 outline-none focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition">
                <option value="">Select</option>
                <option className="text-[#1a2b5e]">Male</option>
                <option className="text-[#1a2b5e]">Female</option>
                <option className="text-[#1a2b5e]">Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
                Date of Birth (MM/DD/YYYY) *
              </label>
              <input
                type="text"
                placeholder="eg: 12/01/2004"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
                Preferred Contact Number *
              </label>
              <input
                type="text"
                placeholder="543210987"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
          </div>

          {/* ── Appointment Details ── */}
          <div className="h-px w-full bg-[#e5eff8] mb-7" />
          <h2 className="mb-5 text-base font-bold" style={{ color: "#1a2b5e" }}>
            Appointment Details
          </h2>
          {/* Labels switch to teal (#00c2c7) to visually distinguish this
              sub-section from the patient info block above. Teal is the brand
              action colour, and these fields relate to the clinical request
              itself — using it here draws the eye and reinforces that these
              fields drive the actual scheduling outcome. */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#00c2c7]">
                Referring Physician's Name *
              </label>
              <input
                type="text"
                placeholder="eg: dr John Doe"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#00c2c7]">
                Type of Exam *
              </label>
              <select className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#2a4a6e]/60 outline-none focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition">
                <option value="">Select</option>
                <option className="text-[#1a2b5e]">MRI</option>
                <option className="text-[#1a2b5e]">CT Scan</option>
                <option className="text-[#1a2b5e]">X-Ray</option>
                <option className="text-[#1a2b5e]">Ultrasound</option>
                <option className="text-[#1a2b5e]">Mammogram</option>
                <option className="text-[#1a2b5e]">DEXA Scan</option>
                <option className="text-[#1a2b5e]">Breast Ultrasound</option>
                <option className="text-[#1a2b5e]">Cardiac Scoring</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#00c2c7]">
                Referring Physician's Phone no *
              </label>
              <input
                type="text"
                placeholder="543210987"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#00c2c7]">
                Patient Status *
              </label>
              <select className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#2a4a6e]/60 outline-none focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition">
                <option value="">Select</option>
                <option className="text-[#1a2b5e]">Inpatient</option>
                <option className="text-[#1a2b5e]">Outpatient</option>
              </select>
            </div>
          </div>

          {/* ── Health Insurance ── */}
          {/* Back to navy labels — insurance is administrative, not clinical,
              so it reverts to the same neutral styling as Patient Information. */}
          <div className="h-px w-full bg-[#e5eff8] mb-7" />
          <h2 className="mb-5 text-base font-bold" style={{ color: "#1a2b5e" }}>
            Health Insurance information
          </h2>
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
                Insurance Company *
              </label>
              <input
                type="text"
                placeholder="eg: lic pvt ltd"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
                Policy Number *
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
              />
            </div>
          </div>
          <div className="mb-7">
            <label className="mb-1.5 block text-xs font-semibold text-[#1a2b5e]">
              Comments
            </label>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full resize-y rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#00c2c7] focus:ring-1 focus:ring-[#00c2c7] transition"
            />
          </div>

          {/* ── reCAPTCHA placeholder ──────────────────────────────────────────
              This is a visual mock of the Google reCAPTCHA v2 checkbox widget,
              not a real integration. The SVG icon approximates the reCAPTCHA
              logo shape. Replace this block with the actual @google/recaptcha
              React component once a site key is provisioned, wiring the token
              into the form submission payload for server-side verification.
          ──────────────────────────────────────────────────────────────────── */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-xl border border-[#e5eff8] bg-[#f8fafc] px-4 py-3">
            <input type="checkbox" className="h-4 w-4 accent-[#00c2c7]" />
            <span className="text-sm text-[#2a4a6e]">I'm not a robot</span>
            <div className="ml-4 flex flex-col items-center gap-0.5">
              <svg width="30" height="30" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#b8dff0" strokeWidth="4" fill="white" />
                <path d="M32 12 L44 28 H36 V52 H28 V28 H20 Z" fill="#1a4d7a" opacity="0.5" />
              </svg>
              <span className="text-[9px] font-bold tracking-wide text-[#2a4a6e]/50">reCAPTCHA</span>
              <span className="text-[8px] text-[#2a4a6e]/30">Privacy · Terms</span>
            </div>
          </div>

          {/* ── Submit ── */}
          {/* Teal button matches the brand's primary CTA colour used throughout
              the site, signalling "safe to proceed" for this non-destructive action. */}
          <div>
            <button className="inline-flex items-center gap-3 rounded-full bg-[#00c2c7] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00c2c7]/25 transition hover:opacity-90">
              Submit
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Appointment;
