import React from 'react';
import { useInView } from '../hooks/useInView';

// Service area locations rendered as a 4-column grid
const locations = [
  ['Denville NJ', 'Chatham NJ', 'Warren NJ', 'Hanover NJ', 'Florham Park NJ'],
  ['Morristown NJ', 'Morris Plains NJ', 'Bedminster NJ', 'Chester NJ', 'Cedar Knolls NJ'],
  ['Bernardsville NJ', 'Randolph NJ', 'Summit NJ', 'Mendham NJ', 'Berkeley Heights NJ'],
  ['Morris County NJ', 'Parsippany NJ', 'Bridgewater NJ', 'Madison NJ'],
];

// Footer nav links rendered as two columns (left label, right label per row)
const navLinks = [
  ['About', 'Preventive Screening Tests'],
  ['Make Payment', 'Appointment'],
  ['Women Imaging', 'Contact us'],
];

export const Footer = () => {
  // Triggers slide-in animations when the footer enters the viewport
  const { ref, inView } = useInView();

  return (
    <footer className="relative z-30 overflow-visible" style={{ background: '#152d3e' }}>

      {/* Wave SVG positioned above the footer to visually connect with the preceding section.
          Translated upward (-translate-y-full) so it overlaps the section above. */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '40px' }}>
          <polygon points="
            0,15   90,26  180,30  270,26  360,15
            450,4  540,0  630,4   720,15
            810,26 900,30 990,26  1080,15
            1170,4 1260,0 1350,4  1440,15
            1440,40 0,40
          " fill="#152d3e" />
        </svg>
      </div>

      {/* Main content — ref here drives both left and right panel animations together */}
      <div ref={ref} className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 pt-16 pb-10 flex flex-col lg:flex-row gap-14">

        {/* Left panel: brand statement + service area location grid */}
        <div className={`flex-1 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}>
          <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-6">
            Trusted, Top-Quality Imaging<br />
            For{' '}
            <span style={{ color: '#00c2c7' }}>Morris County And<br />Surrounding Communities</span>
          </h2>

          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Your trusted source for advanced imaging to patients in neighboring areas including
          </p>

          {/* Locations grid: each array entry is one column */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1.5">
            {locations.map((col, ci) => (
              <ul key={ci} className="flex flex-col gap-1.5">
                {col.map((loc) => (
                  <li key={loc} className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    • {loc}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Right panel: nav links, contact details, social icons */}
        <div className={`lg:w-72 shrink-0 ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}>
          <p className="font-bold text-base mb-5" style={{ color: 'rgba(255,255,255,0.9)' }}>
            About Harding
          </p>

          {/* Two-column nav link grid — each navLinks row provides left + right anchor */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {navLinks.map(([left, right]) => (
              <React.Fragment key={left}>
                <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>{left}</a>
                <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>{right}</a>
              </React.Fragment>
            ))}
          </div>

          {/* Contact details */}
          <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Tel:{' '}
            <a href="tel:9082210603" className="hover:text-white transition-colors">908-221-0603</a>
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Email:{' '}
            <a href="mailto:Scheduling@hardingradiology.com" className="hover:text-white transition-colors">
              Scheduling@hardingradiology.com
            </a>
          </p>

          {/* Social media icons — inline SVGs keep the bundle self-contained (no icon library needed) */}
          <div className="flex gap-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
            </a>
            {/* Pinterest */}
            <a href="#" aria-label="Pinterest" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.136-1.867 3.136-4.562 0-2.387-1.715-4.055-4.163-4.055-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative teal triangle — clipPath polygon creates a right-angle corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-full h-full"
          style={{ background: '#1a5c6b', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/10 py-5 text-center">
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
          © 2026 Radiology Center At Harding . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
