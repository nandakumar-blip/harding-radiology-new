import { useInView } from '../hooks/useInView';

const ROWS = [
    [
        { label: 'Early-stage cancers and tumors',       style: 'gray'  },
        { label: 'Neurological abnormalities',            style: 'light' },
        { label: 'Cardiovascular and vascular changes',   style: 'gray'  },
        { label: 'Organ health abnormalities',            style: 'light' },
    ],
    [
        { label: 'Spinal and musculoskeletal conditions', style: 'light' },
        { label: 'Inflammatory changes',                  style: 'navy'  },
        { label: 'Liver and kidney irregularities',       style: 'light' },
        { label: 'Pancreatic and abdominal findings',     style: 'navy'  },
    ],
    [
        { label: 'Joint and cartilage degeneration',      style: 'teal'  },
        { label: 'Hidden structural abnormalities',       style: 'light' },
        { label: 'Chronic disease indicators',            style: 'teal'  },
        { label: 'Preventive whole-body insights',        style: 'light' },
    ],
];

const PILL_STYLES: Record<string, { bg: string; color: string }> = {
    gray:  { bg: '#555560', color: '#fff' },
    light: { bg: '#b8dde0', color: '#2a7a8c' },
    navy:  { bg: '#1a3a5c', color: '#fff' },
    teal:  { bg: '#00a896', color: '#fff' },
};

export const MriReveal = () => {
    const { ref: pillsRef, inView: pillsInView } = useInView();
    const { ref: excRef,   inView: excInView   } = useInView();

    return (
        <section className="w-full z-50 bg-white py-16 relative px-4 md:px-8 lg:px-16 overflow-visible">
            {/* Curved top */}
            <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ display: 'block', height: '80px' }}>
                    <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="#fff" />
                </svg>
            </div>

            <h2 className={`text-center font-bold text-2xl md:text-3xl mb-10 ${pillsInView ? 'anim-fade-up' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
                What Whole-Body MRI Can Reveal
            </h2>

            <div ref={pillsRef} className="w-full overflow-hidden">
                {(() => {
                    const allPills = ROWS.flat();
                    const doubled = [...allPills, ...allPills];
                    return (
                        <div className="flex gap-4 w-max cursor-default anim-marquee">
                            {doubled.map(({ label, style }, i) => {
                                const { bg, color } = PILL_STYLES[style];
                                return (
                                    <div
                                        key={`${label}-${i}`}
                                        className="flex items-center justify-center text-center px-6 py-3 rounded-full font-semibold text-sm md:text-base whitespace-nowrap shrink-0"
                                        style={{ background: bg, color }}
                                    >
                                        {label}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })()}
            </div>

            {/* Excellence section */}
            <div ref={excRef} className="max-w-3xl mx-auto text-center mt-20 w-full">
                <h2 className={`font-bold text-3xl md:text-5xl mb-4 leading-tight ${excInView ? 'anim-fade-up' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
                    Committed To Diagnostic Excellence Since 1989
                </h2>
                <p className={`font-semibold text-base md:text-2xl mb-4 ${excInView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
                    Precision Imaging Backed By Decades Of Clinical Trust.
                </p>
                <p className={`text-sm md:text-base leading-relaxed mb-3 ${excInView ? 'anim-fade-up anim-delay-3' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
                    Radiology Center at Harding is a freestanding, independent outpatient imaging center, not a hospital affiliate or a franchise network. For over 35 years, we have provided Morris County and surrounding communities with diagnostic imaging services that meet the highest clinical standards.
                </p>
                <p className={`text-sm md:text-base leading-relaxed mb-10 ${excInView ? 'anim-fade-up anim-delay-4' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
                    For patients, that means one thing above all, when you come to Harding, your results are accurate, your experience is respectful, and your physicians get what they need to take care of you well.
                </p>

                {/* YouTube embed */}
                <div className={`w-full aspect-video rounded-xl overflow-hidden shadow-lg ${excInView ? 'anim-scale-in anim-delay-5' : 'anim-hidden'}`}>
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/eDTjxS5OKh0?si=J1vkfPsi9VUupr7U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            {/* Curved bottom */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full pointer-events-none">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ display: 'block', height: '80px' }}>
                    <path d="M0,0 Q720,80 1440,0 L1440,0 L0,0 Z" fill="#fff" />
                </svg>
            </div>
        </section>
    );
};
