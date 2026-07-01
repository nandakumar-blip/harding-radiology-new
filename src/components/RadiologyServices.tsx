// RadiologyServices: Interactive service browser that displays all offered imaging
// modalities. Selecting a service from the right-hand list cross-fades to its
// corresponding photo in the left image panel without a page navigation.

import { useState } from 'react';
import { Scan, Activity, ScanLine, Aperture, Waves, Zap, Bone } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import womenImg from '../assets/women-img.png';
import ladyImg from '../assets/lady.webp';
import legacyImg from '../assets/legacy-img.jpg';
import mriImg from '../assets/MRImachine-hr.png';
import scanImg from '../assets/scan-img.png';
import skeletonImg from '../assets/skeleton.webp';
import happyPatientImg from '../assets/happy-patient.png';

// services is the single source of truth for each imaging modality's metadata.
// Shape of each entry:
//   title — display name shown in the list and as the active label overlay
//   Icon  — Lucide icon component (not a string); used as <svc.Icon size={…} />
//   short — one-line descriptor for the list item and image panel caption
//   color — hex accent used for the active border, badge background, and glow shadow
//   image — imported asset shown in the left image panel when this service is selected
const services = [
  {
    title: '3D Mammography',
    Icon: Scan,
    short: 'Tomosynthesis-based breast imaging with fewer false positives.',
    color: '#e05c8a',
    image: womenImg,
  },
  {
    title: '3D Breast Ultrasound',
    Icon: Activity,
    short: 'Hitachi SOFIA. For dense or heterogeneous breast tissue.',
    color: '#3b82f6',
    image: ladyImg,
  },
  {
    title: 'CT Scans',
    Icon: ScanLine,
    short: 'GE Optima CT. LDCT lung screening & calcium scoring.',
    color: '#10b981',
    image: legacyImg,
  },
  {
    title: 'Open MRI',
    Icon: Aperture,
    short: 'Hitachi Altaire. Improved comfort & accessibility.',
    color: '#8b5cf6',
    image: mriImg,
  },
  {
    title: 'Ultrasound',
    Icon: Waves,
    short: 'GE Logic. Doppler color. Abdominal, pelvic & vascular.',
    color: '#f59e0b',
    image: happyPatientImg,
  },
  {
    title: 'X-Ray',
    Icon: Zap,
    short: 'Digital radiography. Bone, chest, abdomen & spine.',
    color: '#ef4444',
    image: skeletonImg,
  },
  {
    title: 'DEXA Scan',
    Icon: Bone,
    short: 'Bone mineral density. Osteoporosis screening.',
    color: '#06b6d4',
    image: scanImg,
  },
];

export const RadiologyServices = () => {
  // active holds the index of the currently selected service.
  // Defaults to 0 so the panel always shows something meaningful on first render.
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();

  // Derive the active service object once to avoid repeated array lookups in the template.
  const current = services[active];

  return (
    <section
      ref={ref}
      className="relative z-30 mt-16 md:mt-22 py-20 md:py-28 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2137 0%, #1a3a5c 60%, #0f2d45 100%)' }}
    >
      {/* Decorative radial orb — offset top-left (-30%, -30%) so only the soft glow
          bleeds into the section rather than the hard circle edge being visible. */}
      <div
        className="absolute top-0 left-0 w-125 h-125 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(42,122,140,0.15) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
      />

      <div className="w-full">

        {/* Section header animates as a single block so the eyebrow, heading,
            and subtext enter together rather than staggering independently. */}
        <div className={`text-center mb-14 ${inView ? 'anim-fade-up' : 'anim-hidden'}`}>
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#2a7a8c' }}>
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Radiology Services
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            State-of-the-art imaging technology delivered with compassionate, patient-first care.
          </p>
        </div>

        {/* Split layout: image panel (45%) + service list (55%).
            The unequal split gives the image room to breathe while the list
            stays compact enough to avoid vertical scrolling within the section. */}
        <div className={`flex flex-col lg:flex-row gap-8 items-stretch ${inView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}>

          {/* Left: image panel
              All service images are rendered in the DOM simultaneously, stacked via
              absolute positioning. Only the active one has opacity 1; the rest are 0.
              CSS opacity transition handles the cross-fade — no JS animation library needed. */}
          <div
            className="relative w-full lg:w-[45%] rounded-2xl overflow-hidden shrink-0"
            style={{ minHeight: '420px', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {services.map((svc, i) => (
              <img
                key={svc.title}
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: i === active ? 1 : 0,
                  // 0.5s ease keeps the transition perceptible but snappy enough that
                  // users clicking through the list don't wait for the previous image to clear.
                  transition: 'opacity 0.5s ease',
                }}
              />
            ))}

            {/* Gradient overlay — fades the bottom of the photo to near-black so the
                white label text remains legible regardless of the photo's content. */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.2) 60%, transparent 100%)' }}
            />

            {/* Active service label overlay — placed at bottom of the image panel.
                color + '33' and color + '66' append hex alpha values (20% and 40%)
                to the service's accent color to create a tinted badge without hardcoding
                separate rgba values for each of the 7 services. */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{ background: current.color + '33', border: `1px solid ${current.color}66`, color: current.color }}
              >
                <current.Icon size={13} />
                Active Service
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{current.title}</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{current.short}</p>
            </div>
          </div>

          {/* Right: service list
              Each button updates the active index on click, which drives both the
              image cross-fade above and the per-button highlight styles below. */}
          <div className="flex flex-col gap-2 w-full lg:w-[55%]">
            {services.map((svc, i) => {
              const isActive = i === active;
              return (
                <button
                  key={svc.title}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 w-full"
                  style={{
                    // Active row gets a stronger background tint and a coloured border;
                    // inactive rows use near-transparent fills to keep the list scannable.
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
                    border: isActive ? `1px solid ${svc.color}55` : '1px solid rgba(255,255,255,0.07)',
                    // Glow shadow uses the service's own accent color at 13% opacity
                    // so the highlight feels unique per modality without being garish.
                    boxShadow: isActive ? `0 0 20px ${svc.color}22` : 'none',
                  }}
                >
                  {/* Icon badge — background and border transition between a coloured
                      tinted circle (active) and a neutral grey circle (inactive). */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? svc.color + '33' : 'rgba(255,255,255,0.07)',
                      border: `1px solid ${isActive ? svc.color + '66' : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    <svc.Icon size={18} style={{ color: isActive ? svc.color : 'rgba(255,255,255,0.45)' }} />
                  </div>

                  {/* Text: min-w-0 on the flex child prevents long short-descriptions
                      from overflowing; truncate on the subtitle clips them with an ellipsis. */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-sm leading-tight mb-0.5 transition-colors duration-300"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.65)' }}
                    >
                      {svc.title}
                    </p>
                    <p
                      className="text-xs leading-snug transition-colors duration-300 truncate"
                      style={{ color: isActive ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)' }}
                    >
                      {svc.short}
                    </p>
                  </div>

                  {/* Active indicator bar — a narrow vertical pill on the far right of each
                      row that provides a secondary visual cue beyond the background highlight,
                      useful for users who may not perceive subtle background colour changes. */}
                  <div
                    className="w-1 h-8 rounded-full shrink-0 transition-all duration-300"
                    style={{ background: isActive ? svc.color : 'transparent' }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
