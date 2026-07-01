// Testimonials: Displays a 3-column grid of patient review cards with star ratings,
// quotes, and author attribution. Cards animate in with staggered delays as the
// section scrolls into view.

import profileImg from "../assets/profile-img.png";
import { useInView } from '../hooks/useInView';

// testimonials holds the static review data. Shape of each entry:
//   quote — full review text, rendered inside quotation marks
//   name  — patient's display name, used as the img alt text and as the card's React key
//   role  — patient's occupation, shown beneath the name in muted text
// All three share the same profile photo (profileImg) — likely a placeholder
// representing anonymised patients rather than real profile pictures.
const testimonials = [
  {
    quote:
      'I came in for a CT scan feeling very nervous, but the team at Harding made the entire process smooth and stress-free. They walked me through every step and the results were ready quickly.',
    name: 'Maria Johnson',
    role: 'Retired Teacher',
  },
  {
    quote:
      'The whole-body MRI gave me peace of mind I never expected. The radiologists were incredibly thorough and my physician received the report the same day. Absolutely exceptional care.',
    name: 'Robert Kim',
    role: 'Software Engineer',
  },
  {
    quote:
      'As someone with claustrophobia, I was dreading my MRI. The open MRI system at Harding was a game changer — I felt completely comfortable throughout the entire scan.',
    name: 'Sarah Patel',
    role: 'Elementary School Principal',
  },
];

// Stars is extracted as its own component because the same 5-star row would be
// needed on any future review card variant without any per-star state changes.
// Array.from({ length: 5 }) generates indices without needing a pre-built array.
const Stars = () => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      // Inline SVG is used instead of a Lucide Star icon so the filled star shape
      // can be rendered with fill="#f59e0b" directly — Lucide's Star is stroked, not filled.
      <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#f59e0b">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

export const Testimonials = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 relative z-30" style={{ background: '#f8fafc' }}>
      <div ref={ref} className="w-full">

        {/* Section header animates as one unit on scroll entry. */}
        <div className={`text-center mb-14 ${inView ? 'anim-fade-up' : ''}`}>
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#2a7a8c' }}>
            Patient Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a3a5c' }}>
            What Our Patients Say
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: '#6b7280' }}>
            Our multiple scans have made quite an impact on the lives of those we serve.
          </p>
        </div>

        {/* Cards grid — 1 column on mobile, 3 columns on md+. Each card's animation
            delay is derived from its index (anim-delay-2, -3, -4) so they cascade
            left-to-right rather than appearing simultaneously. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }, i) => (
            <div
              key={name}
              className={`relative flex flex-col bg-white rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                // Index-based delay offsets start at 2 because the section header
                // already consumes delay slots 0 and 1 in the animation system.
                inView ? `anim-fade-up anim-delay-${i + 2}` : ''
              }`}
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                border: '1px solid #e5e7eb',
              }}
            >
              {/* Decorative quote mark — large, low-opacity serif character positioned
                  absolutely in the top-right corner. pointer-events-none and select-none
                  prevent it from interfering with text selection or click targets. */}
              <span
                className="absolute top-5 right-6 text-7xl font-serif leading-none select-none pointer-events-none"
                style={{ color: 'rgba(42,122,140,0.1)' }}
              >
                "
              </span>

              <Stars />

              {/* flex-1 on the quote paragraph pushes the author block to the bottom of
                  the card regardless of quote length, keeping all cards' footers aligned
                  in a row even when quote text varies in line count. */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#4b5563' }}>
                "{quote}"
              </p>

              {/* Author row — mt-auto ensures this sticks to the card bottom even if the
                  card height is stretched by a taller sibling in the same grid row. */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-11 h-11 rounded-full overflow-hidden shrink-0"
                  // Teal border around the avatar ties the author visual to the brand palette.
                  style={{ border: '2px solid #2a7a8c' }}
                >
                  <img src={profileImg} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#1a3a5c' }}>{name}</p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
