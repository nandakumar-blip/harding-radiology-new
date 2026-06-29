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

const services = [
  {
    title: '3D Mammography',
    Icon: Scan,
    short: 'Tomosynthesis-based breast imaging with fewer false positives.',
    color: '#e05c8a',
    shadow: 'rgba(224,92,138,0.35)',
    image: womenImg,
  },
  {
    title: '3D Breast Ultrasound',
    Icon: Activity,
    short: 'Hitachi SOFIA. For dense or heterogeneous breast tissue.',
    color: '#3b82f6',
    shadow: 'rgba(59,130,246,0.35)',
    image: ladyImg,
  },
  {
    title: 'CT Scans',
    Icon: ScanLine,
    short: 'GE Optima CT. LDCT lung screening & calcium scoring.',
    color: '#10b981',
    shadow: 'rgba(16,185,129,0.35)',
    image: legacyImg,
  },
  {
    title: 'Open MRI',
    Icon: Aperture,
    short: 'Hitachi Altaire. Improved comfort & accessibility.',
    color: '#8b5cf6',
    shadow: 'rgba(139,92,246,0.35)',
    image: mriImg,
  },
  {
    title: 'Ultrasound',
    Icon: Waves,
    short: 'GE Logic. Doppler color. Abdominal, pelvic & vascular.',
    color: '#f59e0b',
    shadow: 'rgba(245,158,11,0.35)',
    image: happyPatientImg,
  },
  {
    title: 'X-Ray',
    Icon: Zap,
    short: 'Digital radiography. Bone, chest, abdomen & spine.',
    color: '#ef4444',
    shadow: 'rgba(239,68,68,0.35)',
    image: skeletonImg,
  },
  {
    title: 'DEXA Scan',
    Icon: Bone,
    short: 'Bone mineral density. Osteoporosis screening.',
    color: '#06b6d4',
    shadow: 'rgba(6,182,212,0.35)',
    image: scanImg,
  },
];

const ORBIT_R = 295;
const CIRCLE_SIZE = 195;
const CONTAINER = ORBIT_R * 2 + CIRCLE_SIZE + 20;

const RadiationSymbol = () => {
  const blades = [0, 120, 240].map((deg) => {
    const toR = (d: number) => (d - 90) * Math.PI / 180;
    const r1 = toR(deg - 32);
    const r2 = toR(deg + 32);
    const iR = 7.5, oR = 18.5, cx = 22, cy = 22;
    const x1 = cx + iR * Math.cos(r1), y1 = cy + iR * Math.sin(r1);
    const x2 = cx + iR * Math.cos(r2), y2 = cy + iR * Math.sin(r2);
    const x3 = cx + oR * Math.cos(r2), y3 = cy + oR * Math.sin(r2);
    const x4 = cx + oR * Math.cos(r1), y4 = cy + oR * Math.sin(r1);
    return `M${x1} ${y1} A${iR} ${iR} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${oR} ${oR} 0 0 0 ${x4} ${y4} Z`;
  });
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="white">
      <circle cx="22" cy="22" r="4.5" />
      {blades.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
};

export const RadiologyServices = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView();
  const active = hovered !== null ? services[hovered] : null;

  return (
    <section ref={ref} className="bg-white relative py-16 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className={`mb-4 text-center text-4xl font-bold text-slate-800 ${inView ? 'anim-fade-up' : 'anim-hidden'}`}>
          Radiology Services
        </h2>
        <p className={`text-center text-slate-500 mb-10 ${inView ? 'anim-fade-up anim-delay-1' : 'anim-hidden'}`}>
          Hover a service to explore what we offer
        </p>

        {/* ── Desktop: circular orbit ── */}
        <div
          className="relative mx-auto hidden md:block select-none"
          style={{ width: CONTAINER, height: CONTAINER }}
        >
          {/* Dashed orbit ring */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: ORBIT_R * 2,
              height: ORBIT_R * 2,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1.5px dashed #cbd5e1',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          />

          {/* Center circle — fills entire orbit area */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              width: ORBIT_R * 2,
              height: ORBIT_R * 2,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
              boxShadow: active
                ? `0 8px 48px ${active.shadow}`
                : '0 8px 48px rgba(30,111,217,0.25)',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.3s, box-shadow 0.4s ease',
              background: '#1e6fd9',
            }}
          >
            {active ? (
              <>
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  style={{ transition: 'opacity 0.35s ease' }}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.38)' }}
                >
                  <p className="font-bold text-white text-xl leading-tight px-8 text-center drop-shadow">
                    {active.title}
                  </p>
                  <p className="text-white/90 text-sm mt-2 px-10 text-center leading-snug drop-shadow">
                    {active.short}
                  </p>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: '#1e6fd9' }}>
                <RadiationSymbol />
                <p className="mt-2 text-white/80 leading-tight text-center" style={{ fontSize: '13px' }}>
                  Hover a service<br />to explore
                </p>
              </div>
            )}
          </div>

          {/* Service circles */}
          {services.map((service, i) => {
            const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * ORBIT_R;
            const y = Math.sin(angle) * ORBIT_R;
            const isHovered = hovered === i;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="absolute rounded-full flex flex-col items-center justify-center text-center cursor-pointer"
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  left: '50%', top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isHovered ? 1.08 : 1})`,
                  background: service.color,
                  border: `2px solid ${service.color}`,
                  boxShadow: isHovered ? `0 8px 28px ${service.shadow}` : `0 4px 16px ${service.shadow}`,
                  padding: '14px',
                  zIndex: 20,
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.15 + i * 0.07}s, background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease`,
                }}
              >
                <service.Icon
                  size={26}
                  className="mb-2 shrink-0"
                  style={{ color: '#fff' }}
                />
                <p
                  className="font-bold leading-tight mb-1"
                  style={{ fontSize: '12px', color: '#fff' }}
                >
                  {service.title}
                </p>
                <p
                  className="leading-tight"
                  style={{ fontSize: '10px', color: 'rgba(255,255,255,0.85)' }}
                >
                  {service.short}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: 2-column grid ── */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-2xl p-4 text-center shadow-sm ${inView ? 'anim-scale-in' : 'anim-hidden'}`}
              style={{
                background: `${service.color}18`,
                border: `2px solid ${service.color}`,
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <service.Icon size={26} className="mx-auto mb-2" style={{ color: service.color }} />
              <h3 className="font-bold text-sm text-slate-800 mb-1">{service.title}</h3>
              <p className="text-xs text-slate-500">{service.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
