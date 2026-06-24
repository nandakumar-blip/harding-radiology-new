import { useInView } from '../hooks/useInView';
import skeletonImg from '../assets/skeleton.webp';

export const Wholebody = () => {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            className="w-full min-h-screen z-40 sticky top-0 flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-16 md:px-20 overflow-visible"
            style={{ background: '#4a8dab' }}
        >
            {/* Curved top SVG */}
            <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ display: 'block', height: '80px' }}>
                    <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="#4a8dab" />
                </svg>
            </div>
            {/* Left: images */}
            <div className={`flex gap-4 justify-center md:ustify-between md:w-120 shrink-0 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}>
                {/* Large skeleton scan */}
                <div className="rounded-2xl overflow-hidden w-36 md:w-44" style={{ height: 'clamp(280px, 50vh, 420px)' }}>
                    <img src={skeletonImg} alt="Full body scan" className="w-full h-full object-cover object-top" />
                </div>

            </div>

            {/* Right: text with vertical line */}
            <div className={`relative max-w-md ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}>
                {/* Vertical line + glowing dot on the right */}
                <div className="hidden md:flex absolute top-0 bottom-0 -right-8 flex-col items-center" style={{ width: '12px' }}>
                    <div style={{ flex: 1, width: '1px', background: 'rgba(255,255,255,0.3)' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0, background: '#38bdf8', boxShadow: '0 0 8px 3px rgba(56,189,248,0.7), 0 0 24px 8px rgba(56,189,248,0.4), 0 0 48px 16px rgba(56,189,248,0.15)' }} />
                    <div style={{ flex: 1, width: '1px', background: 'rgba(255,255,255,0.3)' }} />
                </div>
                <h2 className="text-white font-bold text-2xl md:text-[2rem] leading-tight mb-5">
                    Whole-Body MRI —{' '}
                    <span style={{ color: '#00c2c7' }}>Now Available at Harding Radiology</span>
                </h2>

                <p className="text-sm md:text-base leading-[1.7] mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Whole-Body MRI is a non-invasive screening that produces detailed images of the brain, spine, chest, abdomen, pelvis, major organ systems, and vasculature – without radiation or contrast agents. It is designed for patients who want a thorough internal health assessment, and for physicians seeking a broader diagnostic picture outside of symptom-specific referrals.
                </p>

                <p className="text-sm md:text-base leading-[1.7] mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Results are reviewed and reported by our board-certified radiologists and shared with your referring provider.
                </p>

                <p className="italic font-semibold text-base" style={{ color: '#00c2c7' }}>
                    Comprehensive. Radiation-free. One session.
                </p>
            </div>
        </div>
    );
};
