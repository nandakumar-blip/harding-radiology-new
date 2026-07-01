// RadiologyCenter: Sticky full-screen section presenting the center's credentials,
// imaging capabilities, and patient access features against a deep-blue branded background.
// Sits in a layered sticky-scroll stack; z-30 keeps it below later sections that slide over it.

import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import legacyImg from '../assets/legacy-img.jpg';

export const RadiologyCenter = () => {
    const { ref, inView } = useInView();

    // sectionRef anchors the coordinate system for the decorative vertical line.
    // textRef measures the text block so the line can span exactly its height.
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    // lineTop / lineHeight are derived from DOM measurements, not layout guesses,
    // so the line tracks the text block accurately across all viewport sizes.
    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        const update = () => {
            if (!textRef.current || !sectionRef.current) return;

            // getBoundingClientRect gives viewport-relative coords; subtracting the
            // section's top converts to section-relative so the absolute-positioned
            // line lands in the right place regardless of scroll position.
            const textRect = textRef.current.getBoundingClientRect();
            const sectionRect = sectionRef.current.getBoundingClientRect();
            setLineTop(textRect.top - sectionRect.top);
            setLineHeight(textRect.height);
        };
        update();
        // Recalculate when the viewport resizes, since text reflow changes block height.
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [inView]); // Re-run when inView changes because the animation may shift layout before settle.

    return (
        // sticky + z-30: this section pins to the top of the viewport and stays visible
        // until the next higher-z sticky section (Wholebody at z-40) scrolls over it.
        <div ref={sectionRef} className="sticky top-0 w-full min-h-screen z-30 overflow-y-auto" style={{ background: '#1a4d7a' }}>

            {/* SVG curve at top — creates a smooth concave transition from the section above.
                The path dips to y=0 at the horizontal centre (x=720) forming a gentle arch.
                preserveAspectRatio="none" lets it stretch to fill any viewport width. */}
            <div className="absolute inset-x-0 top-0 pointer-events-none z-10" style={{ lineHeight: 0 }}>
                <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '70px' }}>
                    <path d="M0,0 L0,70 C360,0 1080,0 1440,70 L1440,0 Z" fill="#b8dff0" />
                </svg>
            </div>

            {/* Subtle grain overlay — a tiny SVG feTurbulence noise tile repeated at 300px.
                Kept at 0.06 opacity so it adds tactile depth without muddying the blue. */}
            <div className="absolute inset-0 pointer-events-none" style={{
                opacity: 0.06,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '300px 300px',
            }} />

            {/* Radial teal glow — a soft ellipse slightly left-of-centre echoes the brand's
                teal accent and draws the eye toward the text block without hard edges. */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 60% 70% at 35% 55%, rgba(0,194,199,0.12) 0%, transparent 100%)',
            }} />

            {/* Top shadow fade — a short darkened band masks the SVG curve's join with the
                previous section, preventing a hard-edged line on lower-contrast displays. */}
            <div className="absolute inset-x-0 top-0 pointer-events-none" style={{
                height: '100px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)',
            }} />

            {/* Vertical accent line — only shown on large screens where there is enough
                horizontal space. Positioned at x=200px, spanning the measured text height.
                Hidden until lineHeight is known to avoid a flash of misplaced element. */}
            {lineHeight > 0 && (
                <div className="hidden lg:block absolute" style={{
                    left: '200px', top: lineTop, height: lineHeight,
                    width: '1px', background: 'rgba(255,255,255,0.15)',
                }} />
            )}

            {/* Glowing teal dot — centred vertically on the accent line (lineTop + lineHeight/2 - 6).
                The triple box-shadow creates a soft halo: tight core glow, mid diffusion, wide bloom. */}
            {lineHeight > 0 && (
                <div className="hidden lg:block absolute" style={{
                    left: '194px', top: lineTop + lineHeight / 2 - 6,
                    width: '12px', height: '12px', borderRadius: '50%', background: '#00c2c7',
                    boxShadow: '0 0 8px 3px rgba(0,194,199,0.6), 0 0 24px 8px rgba(0,194,199,0.3), 0 0 48px 16px rgba(0,194,199,0.12)',
                }} />
            )}

            {/* Content row — stacks vertically on mobile, side-by-side on md+.
                md:h-screen combined with md:pt-0 keeps both columns vertically centred
                in the pinned viewport without needing flexbox align hacks. */}
            <div ref={ref} className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 pt-24 pb-10 md:pt-0 md:pb-0 md:h-screen md:px-8 lg:pl-20 xl:pl-40 2xl:pl-65 gap-8 md:gap-6">

                {/* Text block — ref is attached here so lineHeight tracks this element's height.
                    anim-slide-left fires once inView becomes true (one-shot via useInView). */}
                <div ref={textRef} className={`w-full md:max-w-lg md:shrink-0 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}>
                    <h2 className="text-white font-bold text-2xl md:text-[2rem] leading-tight mb-2">
                        The Radiology Center at Harding —
                    </h2>
                    <p className="font-bold text-xl md:text-2xl mb-6" style={{ color: '#00c2c7' }}>
                        Decades of Trust. Advanced Diagnostic Care.
                    </p>

                    <div className="mb-4">
                        <p className="text-white font-bold text-sm mb-1">Accreditation and Clinical Standards:</p>
                        <p className="text-sm leading-[1.7]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            Harding Radiology holds full ACR accreditation across its imaging modalities – a nationally recognized benchmark for equipment performance, imaging protocols, and quality assurance. Our radiologists are board-certified and fellowship-trained, with a specialist on-site throughout all operating hours.
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-white font-bold text-sm mb-1">Comprehensive Imaging. One Location</p>
                        <p className="text-sm leading-[1.7]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            We offer the full spectrum of outpatient diagnostic imaging – Open MRI, CT, 3D Mammography, 3D Breast Ultrasound, DEXA, X-Ray, Ultrasound, and Whole-Body MRI – supported by a fully integrated RIS/PACS digital archiving system for seamless physician access to results.
                        </p>
                    </div>

                    <div className="mb-8">
                        <p className="text-white font-bold text-sm mb-1">Designed Around Patient Access</p>
                        <p className="text-sm leading-[1.7]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            Same-day reports as standard. STAT results on request. Walk-in and emergency appointments available. Free transportation for MRI and CT patients. Private on-site parking. Extended hours on Wednesdays.
                        </p>
                    </div>

                    <button style={{
                        background: '#00c2c7', color: '#fff', border: 'none',
                        padding: '10px 22px', borderRadius: '999px',
                        fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                    }}>
                        More About Us
                    </button>
                </div>

                {/* Image panel — anim-delay-2 staggers it after the text slides in,
                    creating a left-then-right reveal sequence that feels intentional.
                    The semi-transparent border + background mimic a frosted-glass frame. */}
                <div className={`relative md:mr-4 lg:mr-58 shrink-0  ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}
                    style={{ padding: '10px', borderRadius: '20px', background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.5)' }}>
                    <img
                        src={legacyImg}
                        className="w-full md:w-auto rounded-xl"
                        alt="Body scan"
                        // maxHeight 30vh keeps the image from dominating smaller laptop viewports
                        // while still filling the available width on mobile.
                        style={{ maxHeight: "30vh", objectFit: 'cover', display: 'block' }}
                    />

                </div>
            </div>
        </div>
    );
};
