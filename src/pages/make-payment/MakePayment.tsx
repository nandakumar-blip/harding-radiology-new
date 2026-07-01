// Online bill payment page. Split into two sections: a dark hero that presents
// the clinic identity alongside the payment form, and a lower marketing section
// that explains the security and convenience of the portal.

import logo from "../../assets/logo.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MakePayment = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero split ────────────────────────────────────────────────────────
          Two-column layout: clinic identity on the left, payment card on the
          right. Keeping both in the same dark-navy section ties the branding
          and the action together so the page immediately communicates "this is
          the official payment portal for this clinic."
          On mobile the columns stack vertically (flex-col → flex-row at md).
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1a4d7a] pt-24 pb-24 md:pb-16">
        {/* Subtle fractal noise rendered as an inline SVG data-URI so no
            extra image request is needed for the background texture. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
          }}
        />
        {/* Teal glow */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] opacity-10"
          style={{ background: "radial-gradient(circle, #00c2c7 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] opacity-10"
          style={{ background: "radial-gradient(circle, #00c2c7 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 md:flex-row md:items-stretch md:gap-0 md:px-8 lg:px-16 xl:px-32 2xl:px-60">

          {/* Left: clinic identity — logo, name, address, phone.
              Establishes trust before the patient submits payment details. */}
          <div className="flex flex-1 flex-col items-center justify-center py-10 text-center anim-slide-left">
            {/* Circular logo badge — the teal ring echo's the brand colour
                while the white ring separates the badge from the dark background. */}
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#00c2c7]/40 shadow-2xl shadow-black/30 ring-4 ring-white/20">
              <img src={logo} alt="Radiology Center at Harding" className="h-40 w-40 object-contain" />
            </div>

            <h1 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
              Radiology Center At Harding
            </h1>
            <p className="mt-3 text-sm text-white/60">
              1201 Mount Kemble Ave, Morristown, NJ 07960
            </p>
            <p className="mt-1 text-sm text-white/60">(908) 221-0603</p>

            {/* Decorative teal divider */}
            <div className="mt-8 h-px w-24 rounded-full bg-[#00c2c7]/40" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">
              Secure Online Payment Portal
            </p>
          </div>

          {/* Right: payment card — extends to bottom on desktop.
              translate-y-8 intentionally overflows the section bottom so the
              card visually bridges the hero into the content below, hinting
              that there is more to scroll. */}
          <div className="flex w-full items-start justify-center md:w-auto md:translate-y-8 anim-slide-right">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl shadow-black/20 md:min-h-[420px]">
              <h2 className="mb-6 text-xl font-bold" style={{ color: "#1a4d7a" }}>
                Make a Payment
              </h2>

              <div className="flex flex-col gap-4">
                {/* Fields are rendered from an array to keep JSX concise.
                    Each field acts as a lookup key — the patient must supply all
                    four before the portal can match their account record. */}
                {[
                  { placeholder: "Email", type: "email" },
                  { placeholder: "Patient ID", type: "text" },
                  { placeholder: "Last Name", type: "text" },
                  { placeholder: "ZIP Code", type: "text" },
                ].map(({ placeholder, type }) => (
                  <input
                    key={placeholder}
                    type={type}
                    placeholder={placeholder}
                    className="w-full rounded-lg border border-[#e5eff8] bg-[#f8fafc] px-4 py-3 text-sm text-[#1a2b5e] outline-none placeholder:text-[#2a4a6e]/40 focus:border-[#1a4d7a] focus:ring-1 focus:ring-[#1a4d7a] transition"
                  />
                ))}

                {/* PAY NOW uses deep navy (#1a4d7a) rather than the brand teal.
                    Teal signals discovery/action across the site; navy signals
                    a high-stakes, transactional step — it is more authoritative
                    and less playful, which suits a financial submission. */}
                <button className="mt-2 w-full rounded-lg bg-[#1a4d7a] py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-[#1a2b5e] hover:shadow-lg">
                  Pay Now
                </button>

                {/* Escape hatch for patients who don't have their Patient ID —
                    they can authenticate via an alternative flow. */}
                <p className="text-center text-xs text-[#2a4a6e]/60">
                  Don't have the information above?{" "}
                  <a href="#" className="font-semibold text-[#00c2c7] hover:underline">
                    Pay Here
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gradient bar bridges the dark hero into the white marketing section. */}
      {/* ── Transition bar ── */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #1a4d7a 0%, #00c2c7 40%, #7ab8d4 60%, #b8dff0 100%)" }}
      />

      {/* ── Bottom: Simple, Seamless and Secure ───────────────────────────────
          Marketing section that builds confidence after the payment card above.
          Left column: a purely CSS/SVG device mockup illustration.
          Right column: headline, supporting copy, and a trust-signal icon list.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row md:gap-16">

          {/* Left: device mockup illustration ─────────────────────────────────
              Built entirely from divs and inline SVG rather than importing an
              image. This avoids a separate asset that would need to be updated
              whenever the branding changes, and the shapes scale perfectly at
              any resolution. The "tablet" frame renders a simplified dashboard
              UI; the smaller "phone" element overlays it to reinforce the
              "available on all devices" message without requiring real screenshots.
          ──────────────────────────────────────────────────────────────────── */}
          <div className="w-full max-w-sm flex-1 anim-slide-left">
            <div className="relative">
              {/* Tablet frame */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-[#1a2b5e]/10 bg-[#f0f6fb] shadow-2xl">
                {/* macOS-style traffic-light dots signal "this is a browser window" */}
                <div className="flex items-center gap-1.5 border-b border-[#e5eff8] bg-white px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 h-4 flex-1 rounded-full bg-[#e5eff8]" />
                </div>
                {/* Dashboard UI */}
                <div className="flex">
                  {/* Sidebar — first item is teal to indicate an active nav state */}
                  <div className="flex w-16 flex-col gap-3 border-r border-[#e5eff8] bg-white px-3 py-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className={`h-2 rounded-full ${i === 0 ? "bg-[#00c2c7]" : "bg-[#e5eff8]"}`} />
                    ))}
                  </div>
                  {/* Content area */}
                  <div className="flex-1 p-4">
                    {/* Summary card */}
                    <div className="mb-3 rounded-xl border border-[#e5eff8] bg-white p-3 shadow-sm">
                      <div className="mb-2 h-2 w-24 rounded-full bg-[#b8dff0]" />
                      <div className="flex items-center gap-3">
                        {/* Teal checkmark circle — communicates "payment confirmed" */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#00c2c7] text-xs font-bold text-[#00c2c7]">
                          ✓
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="h-2 w-16 rounded-full bg-[#e5eff8]" />
                          <div className="h-2 w-10 rounded-full bg-[#b8dff0]" />
                        </div>
                      </div>
                    </div>
                    {/* Row items represent a payment history list */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="mb-2 flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm border border-[#e5eff8]">
                        <div className="h-2 w-20 rounded-full bg-[#e5eff8]" />
                        <div className="h-2 w-10 rounded-full bg-[#00c2c7]/40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone overlay — positioned over the tablet's bottom-right corner.
                  aspect-ratio 9/16 keeps it phone-shaped regardless of width. */}
              <div
                className="absolute -bottom-6 -right-6 w-28 overflow-hidden rounded-2xl border-4 border-white bg-[#f0f6fb] shadow-2xl"
                style={{ aspectRatio: "9/16" }}
              >
                <div className="flex items-center justify-between bg-[#1a4d7a] px-2 py-1.5">
                  <div className="h-1.5 w-8 rounded-full bg-white/40" />
                  <div className="h-1.5 w-3 rounded-full bg-[#00c2c7]" />
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <div className="h-2 w-full rounded-full bg-[#e5eff8]" />
                  <div className="h-6 w-full rounded-lg bg-[#00c2c7]/20 flex items-center justify-center">
                    <div className="h-1.5 w-12 rounded-full bg-[#00c2c7]/60" />
                  </div>
                  {/* Decreasing widths suggest a text paragraph */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-2 rounded-full bg-[#e5eff8]" style={{ width: `${70 - i * 10}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1 anim-slide-right">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl" style={{ color: "#1a2b5e" }}>
              Simple, Seamless and Secure
            </h2>
            <p className="mt-4 text-base font-semibold text-[#2a4a6e]">
              Paying your healthcare bills is easier than ever!
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#2a4a6e]">
              Create an account and simplify the way you manage and pay your healthcare
              bills for all of your providers and family members.
            </p>

            {/* Trust-signal list rendered from data so items can be reordered or
                extended without touching JSX structure. */}
            <ul className="mt-8 space-y-4">
              {[
                { icon: "🔒", title: "Bank-level security", desc: "Your payment information is encrypted and protected at every step." },
                { icon: "⚡", title: "Instant confirmation", desc: "Receive immediate confirmation of your payment by email." },
                { icon: "📋", title: "Full payment history", desc: "Access all past payments and statements in one place." },
              ].map(({ icon, title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00c2c7]/10 text-lg">
                    {icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#1a2b5e]">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#2a4a6e]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Secondary CTA reverts to teal here — this is an exploratory
                "learn more / start" action, not the transactional PAY NOW step
                above, so the lighter brand action colour is appropriate. */}
            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#00c2c7] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00c2c7]/25 transition hover:opacity-90">
              Pay Your Bill Now
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

export default MakePayment;
