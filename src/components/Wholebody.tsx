import { useInView } from '../hooks/useInView';
import skeletonImg from '../assets/skeleton.webp';

export const Wholebody = () => {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            className="w-full min-h-screen z-50 sticky px-4 top-0 flex flex-col md:flex-row items-center justify-center gap-10 py-16 md:px-8 lg:px-64 overflow-visible"
            style={{ background: '#b8dff0' }}
        >
            {/* SVG curve at top */}
            <div className="absolute inset-x-0 top-0 pointer-events-none z-10" style={{ lineHeight: 0 }}>
                <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '70px' }}>
                    <path d="M0,0 L0,70 C360,0 1080,0 1440,70 L1440,0 Z" fill="#1a4d7a" />
                </svg>
            </div>

            {/* Left: images */}
            <div className={`flex justify-center md:justify-between md:flex-1 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}>
                {/* Large skeleton scan */}
                <div className="rounded-2xl overflow-hidden w-48 md:w-64 lg:w-72 md:pl-25" style={{ height: 'clamp(280px, 50vh, 420px)' }}>
                    <img src={skeletonImg} alt="Full body scan" className="w-full h-full object-cover object-top" />
                </div>
            </div>

            {/* Right: text with vertical line */}
            <div className={`relative max-w-md w-full md:flex-1 ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}>
                {/* Vertical line + glowing dot on the right */}
                <div className="hidden md:flex absolute top-0 bottom-0 -right-8 flex-col items-center" style={{ width: '12px' }}>
                    <div style={{ flex: 1, width: '1px', background: 'rgba(26,43,110,0.25)' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0, background: '#00c2c7', boxShadow: '0 0 8px 3px rgba(0,194,199,0.7), 0 0 24px 8px rgba(0,194,199,0.4), 0 0 48px 16px rgba(0,194,199,0.15)' }} />
                    <div style={{ flex: 1, width: '1px', background: 'rgba(26,43,110,0.25)' }} />
                </div>
                <h2 className="text-[#1a2b5e] font-bold text-2xl md:text-[2rem] leading-tight mb-5">
                    Whole-Body MRI —{' '}
                    <span style={{ color: '#00c2c7' }}>Now Available at Harding Radiology</span>
                </h2>

                <p className="text-sm md:text-base leading-[1.7] mb-4" style={{ color: '#1a2b5e' }}>
                    Whole-Body MRI is a non-invasive screening that produces detailed images of the brain, spine, chest, abdomen, pelvis, major organ systems, and vasculature – without radiation or contrast agents. It is designed for patients who want a thorough internal health assessment, and for physicians seeking a broader diagnostic picture outside of symptom-specific referrals.
                </p>

                <p className="text-sm md:text-base leading-[1.7] mb-6" style={{ color: '#1a2b5e' }}>
                    Results are reviewed and reported by our board-certified radiologists and shared with your referring provider.
                </p>

                <p className="italic font-semibold text-base" style={{ color: '#1a2b6e' }}>
                    Comprehensive. Radiation-free. One session.
                </p>
            </div>
        </div>
    );
};
