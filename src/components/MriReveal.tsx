// MriReveal: White-background section that showcases what Whole-Body MRI can detect
// via an infinite marquee of coloured pills, followed by a legacy/stats card with
// an embedded YouTube video. Uses z-50 to sit on top of all sticky sections below.

import { useInView } from '../hooks/useInView';

// ROWS groups pills by visual theme row. Each pill has:
//   label  — the display text
//   style  — a key into PILL_STYLES that resolves to a bg/color pair
// The 2-D structure was originally used to alternate row colours top-to-bottom,
// but the marquee flattens them with ROWS.flat(), so the grouping now serves only
// as a convenient editing surface for colour sequencing.
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

// PILL_STYLES maps style keys to concrete bg/color pairs. Keeping this separate
// from ROWS means colour changes never require touching the label data.
const PILL_STYLES: Record<string, { bg: string; color: string }> = {
    gray:  { bg: '#555560', color: '#fff' },
    light: { bg: '#b8dde0', color: '#2a7a8c' },
    navy:  { bg: '#1a3a5c', color: '#fff' },
    teal:  { bg: '#00a896', color: '#fff' },
};

export const MriReveal = () => {
    // Two separate inView observers: pillsRef triggers the marquee heading animation,
    // excRef triggers the staggered fade-up sequence inside the excellence card.
    // Splitting them means each block animates independently as the user scrolls.
    const { ref: pillsRef, inView: pillsInView } = useInView();
    const { ref: excRef,   inView: excInView   } = useInView();

    return (
        // top-20 offsets the section below the sticky nav bar so the curved top SVG
        // isn't hidden behind the navbar when this section scrolls into view.
        <section className="w-full z-50 bg-white py-16 relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 overflow-visible top-20">

            {/* Curved top connector — positioned above the section (-translate-y-full)
                so it visually bridges the gap between the light-blue Wholebody section
                and this white section. The quadratic bezier (Q720,0) dips to y=0 at
                the midpoint, matching the concave shape used throughout the design system. */}
            <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ display: 'block', height: '80px' }}>
                    <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="#fff" />
                </svg>
            </div>

            <h2 className={`text-center font-bold text-2xl md:text-3xl mb-10 ${pillsInView ? 'anim-fade-up' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
                What Whole-Body MRI Can Reveal
            </h2>

            {/* Marquee container — overflow-hidden clips the pills so only the visible
                strip shows, while the inner div (w-max) is wide enough to hold all pills
                twice side-by-side. The CSS anim-marquee animation translates X by exactly
                50% of the total width, which loops seamlessly because the second half is
                an identical duplicate of the first. */}
            <div ref={pillsRef} className="w-full overflow-hidden">
                {(() => {
                    const allPills = ROWS.flat();
                    // Doubling the pill list makes the marquee loop seamless: when the
                    // animation translates the strip left by 50%, the visual content is
                    // identical to the starting position, so it snaps back invisibly.
                    const doubled = [...allPills, ...allPills];
                    return (
                        <div className="flex gap-4 w-max cursor-default anim-marquee">
                            {doubled.map(({ label, style }, i) => {
                                const { bg, color } = PILL_STYLES[style];
                                return (
                                    // key uses both label and index because the doubled array
                                    // contains duplicate labels — index alone wouldn't be unique
                                    // enough, and label alone would collide on duplicates.
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

            {/* Excellence card — dark gradient card contrasting with the white section,
                using a 135deg diagonal gradient to add depth without a photo background. */}
            <div
                ref={excRef}
                className="mt-20 w-full rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d2137 0%, #1a3a5c 60%, #0f2d45 100%)' }}
            >
                <div className="flex flex-col lg:flex-row gap-0 items-stretch">

                    {/* Left column: staggered text + stats
                        anim-delay-1 through anim-delay-5 create a cascading reveal where
                        each line enters slightly after the previous, guiding the eye downward. */}
                    <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">

                        {/* Eyebrow label — uppercase + wide letter-spacing is a common pattern
                            to signal a section category without competing with the main heading. */}
                        <p className={`uppercase tracking-widest text-sm font-semibold mb-4 ${excInView ? 'anim-fade-up' : 'anim-hidden'}`} style={{ color: '#2a7a8c' }}>
                            Our Legacy
                        </p>

                        <h2 className={`font-bold text-3xl md:text-4xl leading-tight mb-5 ${excInView ? 'anim-fade-up anim-delay-1' : 'anim-hidden'}`} style={{ color: '#fff' }}>
                            Committed To Diagnostic Excellence{' '}
                            <span style={{ color: '#00c2c7' }}>Since 1989</span>
                        </h2>

                        <p className={`text-base md:text-lg font-semibold mb-6 ${excInView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Precision Imaging Backed By Decades Of Clinical Trust.
                        </p>

                        <p className={`text-sm md:text-base leading-relaxed mb-3 ${excInView ? 'anim-fade-up anim-delay-3' : 'anim-hidden'}`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Radiology Center at Harding is a freestanding, independent outpatient imaging center — not a hospital affiliate or franchise. For over 35 years, we have served Morris County with imaging services that meet the highest clinical standards.
                        </p>
                        <p className={`text-sm md:text-base leading-relaxed mb-10 ${excInView ? 'anim-fade-up anim-delay-4' : 'anim-hidden'}`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                            When you come to Harding, your results are accurate, your experience is respectful, and your physicians get what they need to care for you well.
                        </p>

                        {/* Stats row — an inline array is used here rather than a module-level
                            constant because these values are tightly coupled to this visual block
                            and unlikely to be reused elsewhere. */}
                        <div className={`flex flex-wrap gap-6 ${excInView ? 'anim-fade-up anim-delay-5' : 'anim-hidden'}`}>
                            {[
                                { value: '35+', label: 'Years of Excellence' },
                                { value: '5,000+', label: 'Patients Served' },
                                { value: '100%', label: 'Board Certified' },
                            ].map(({ value, label }) => (
                                <div key={label} className="flex flex-col">
                                    <span className="text-3xl font-bold" style={{ color: '#00c2c7' }}>{value}</span>
                                    <span className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: YouTube embed
                        aspect-video (16:9) on the wrapper ensures the iframe maintains its
                        ratio without needing explicit width/height calculations.
                        The teal box-shadow ties the video frame back to the brand palette. */}
                    <div className={`flex-1 flex items-center justify-center p-8 md:p-12 ${excInView ? 'anim-slide-left anim-delay-3' : 'anim-hidden'}`}>
                        <div
                            className="w-full aspect-video rounded-2xl overflow-hidden"
                            style={{ boxShadow: '0 0 40px rgba(42,122,140,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/eDTjxS5OKh0?si=J1vkfPsi9VUupr7U"
                                title="YouTube video player"
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Curved bottom connector — mirrors the top curve but inverted (Q720,80).
                translate-y-full pushes it below the section so it bridges the gap
                into the next section's background colour without leaving a white gap. */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full pointer-events-none">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ display: 'block', height: '80px' }}>
                    <path d="M0,0 Q720,80 1440,0 L1440,0 L0,0 Z" fill="#fff" />
                </svg>
            </div>
        </section>
    );
};
