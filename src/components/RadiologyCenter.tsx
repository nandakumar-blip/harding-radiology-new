import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import legacyImg from '../assets/legacy-img.jpg';

export const RadiologyCenter = () => {
    const { ref, inView } = useInView();
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        const update = () => {
            if (!textRef.current || !sectionRef.current) return;
            const textRect = textRef.current.getBoundingClientRect();
            const sectionRect = sectionRef.current.getBoundingClientRect();
            setLineTop(textRect.top - sectionRect.top);
            setLineHeight(textRect.height);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [inView]);

    return (
        
        <div ref={sectionRef} className="sticky top-0 w-full min-h-screen z-30 overflow-y-auto" style={{ background: '#4a8dab' }}>

            {/* Grain texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
                opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '300px 300px',
            }} />

            {/* Radial teal glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 60% 70% at 35% 55%, rgba(0,90,65,0.45) 0%, transparent 100%)',
            }} />

            {/* Black arch from top */}
            <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '120px', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: '-10%',
                    width: '120%', height: '220px',
                    background: '#000', borderRadius: '0 0 50% 50%',
                }} />
            </div>

            {/* Vertical line — matches text block height */}
            {lineHeight > 0 && (
                <div className="hidden md:block absolute" style={{
                    left: '200px',
                    top: lineTop,
                    height: lineHeight,
                    width: '1px',
                    background: 'rgba(255,255,255,0.18)',
                }} />
            )}

            {/* Glowing dot — aligned with heading (top of text block) */}
            {lineHeight > 0 && (
                <div className="hidden md:block absolute" style={{
                    left: '194px',
                    top: lineTop + lineHeight / 2 - 6,
                    width: '12px', height: '12px', borderRadius: '50%', background: '#2ecc89',
                    boxShadow: '0 0 8px 3px rgba(46,204,137,0.6), 0 0 24px 8px rgba(46,204,137,0.3), 0 0 48px 16px rgba(46,204,137,0.12)',
                }} />
            )}

            {/* Content */}
            <div ref={ref} className="flex flex-col md:flex-row items-center justify-between px-6 pt-36 pb-10 md:pt-0 md:pb-0 md:h-screen md:pl-65 gap-8 md:gap-0">

                {/* Text */}
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
                        background: '#00a896', color: '#fff', border: 'none',
                        padding: '10px 22px', borderRadius: '999px',
                        fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                    }}>
                        More About Us
                    </button>
                </div>

                {/* Body scan image — hidden on small screens */}
                <img
                    src={legacyImg}
                    className={`w-full md:w-auto md:mr-28 lg:mr-44 rounded-2xl ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}
                    alt="Body scan"
                    style={{ maxHeight: '40vh', objectFit: 'cover', flexShrink: 0 }}
                />
            </div>
        </div>
    );
};
