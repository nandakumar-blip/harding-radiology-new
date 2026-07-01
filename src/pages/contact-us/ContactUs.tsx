// Contact Us page. Presents clinic location and contact details. The main
// content is a side-by-side panel: an embedded Google Map on the left and a
// dark contact card on the right, so patients can orient themselves geographically
// while reading address, phone, fax, and hours information in one glance.

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Defined at module scope so the array is allocated once, not on every render.
// Wednesday closes an hour later — that asymmetry matters for patients
// planning end-of-day visits, so it needs to be accurate here.
const hours = [
  { day: "Monday", time: "8:30AM – 5:00PM" },
  { day: "Tuesday", time: "8:30AM – 5:00PM" },
  { day: "Wednesday", time: "8:30AM – 6:00PM" },
  { day: "Thursday", time: "8:30AM – 5:00PM" },
  { day: "Friday", time: "8:30AM – 5:00PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const ContactUs = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#1a4d7a] pb-20 pt-32 text-center">
        {/* Fractal noise texture as an inline SVG data-URI — no extra network
            request required, keeps the hero background from looking flat. */}
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
              Visit Us
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Plan Your Visit With
          </h1>
          {/* "Confidence" in teal underscores the reassuring, clinical tone — the
              word itself is the promise, so making it the accent colour reinforces it. */}
          <h1 className="mt-2 text-4xl font-bold leading-tight text-[#00c2c7] sm:text-5xl lg:text-6xl">
            Confidence
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 anim-slide-left anim-delay-2">
            Trusted Care Is Just One Step Away — Our Medical Team Is Here To Support Your Health Needs.
          </p>
        </div>
      </section>

      {/* Gradient transition bar softens the colour break between the dark navy
          hero and the light section below — same pattern used across all inner pages. */}
      {/* ── Transition bar ── */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #1a4d7a 0%, #00c2c7 40%, #7ab8d4 60%, #b8dff0 100%)" }}
      />

      {/* ── Map + Contact card ──────────────────────────────────────────────────
          The two-panel layout lets patients view the map and read the contact
          details simultaneously, avoiding a separate click to open an external
          maps app. On mobile the panels stack (flex-col), map on top so the
          patient sees the location first before reading contact details below.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div
          className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] flex flex-col md:flex-row anim-slide-right"
          style={{ minHeight: "520px" }}
        >
          {/* Left: Google Maps embed ──────────────────────────────────────────
              Using a plain iframe embed (output=embed query param) rather than
              the Maps JavaScript API because no interactivity beyond pan/zoom
              is needed and it avoids the overhead of an API key and SDK load.
              loading="lazy" defers the iframe until it is near the viewport,
              reducing initial page weight. flex-[3] gives the map 3/5 of the
              available width, leaving 2/5 for the contact card — enough room
              for the map to be useful without compressing the contact details.
          ──────────────────────────────────────────────────────────────────── */}
          <div className="flex-[3] min-h-[340px] md:min-h-0">
            <iframe
              title="Harding Radiology Location"
              src="https://www.google.com/maps?q=1201+Mt+Kemble+Ave,+Morristown,+NJ+07960&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "340px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Contact card ──────────────────────────────────────────────
              Deep navy (#1a2b5e) background on a light-grey page section.
              The dark card creates a deliberate contrast that makes the contact
              card feel weighty and important — like a physical business card —
              while white text on dark ensures readability without needing
              coloured dividers to separate sections.
              Teal is used only for icon backgrounds and accent elements, not
              body text, to maintain hierarchy within the dark surface.
          ──────────────────────────────────────────────────────────────────── */}
          <div
            className="flex-[2] flex flex-col justify-start px-8 py-10"
            style={{ backgroundColor: "#1a2b5e" }}
          >
            {/* Eyebrow accent — teal rule + label mirrors the hero eyebrow pill
                but in a horizontal form suited to a narrow column. */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-[#00c2c7]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00c2c7]">Get In Touch</span>
            </div>

            <h2 className="mb-8 text-2xl font-bold text-white">Contact us</h2>

            {/* Address */}
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00c2c7]/15 border border-[#00c2c7]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c2c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Our Address</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  1201 Mount Kemble Avenue, Morristown, NJ 07960
                </p>
              </div>
            </div>

            {/* Phone — rendered as an anchor so mobile users can tap-to-call */}
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00c2c7]/15 border border-[#00c2c7]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c2c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Phone</p>
                <a href="tel:9082210603" className="mt-1 block text-xs text-white/55 hover:text-[#00c2c7] transition-colors">
                  908-221-0603
                </a>
              </div>
            </div>

            {/* Fax */}
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00c2c7]/15 border border-[#00c2c7]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c2c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13 7" /><polyline points="22 11 13 11" />
                  <rect x="2" y="4" width="8" height="16" rx="1" />
                  <rect x="13" y="13" width="9" height="7" rx="1" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Fax</p>
                <p className="mt-1 text-xs text-white/55">908-221-0631</p>
              </div>
            </div>

            {/* Business Hours — iterated from the module-level `hours` array so
                Wednesday's extended close time is maintained in one place and
                displayed consistently. */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00c2c7]/15 border border-[#00c2c7]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c2c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="mb-3 text-sm font-bold text-white">Business Hours</p>
                <ul className="space-y-1.5">
                  {hours.map(({ day, time }) => (
                    <li key={day} className="flex items-center gap-2 text-xs">
                      {/* Teal bullet keeps the list scannable without adding
                          a full divider line between each row. */}
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#00c2c7]" />
                      <span className="font-semibold text-white/80">{day}</span>
                      <span className="text-white/50">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactUs;
