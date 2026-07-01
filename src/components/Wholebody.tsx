// Wholebody: Sticky full-screen section promoting the Whole-Body MRI service.
// Uses z-40 so it slides over RadiologyCenter (z-30) as the user scrolls down,
// creating a layered card-stack effect without JavaScript scroll listeners.

import { useInView } from '../hooks/useInView';
import skeletonImg from '../assets/skeleton.webp';

export const Wholebody = () => {
    const { ref, inView } = useInView();

    return (
        // overflow-visible is intentional: the decorative vertical line on the right edge
        // extends outside this container's bounds and must not be clipped.
        <div
            ref={ref}
            className="w-full min-h-screen z-30 sticky px-4 top-0 flex flex-col md:flex-row items-center justify-center gap-10 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-60 overflow-visible"
            style={{ background: '#b8dff0' }}
        >

            {/* Left: skeleton scan image
                md:pl-55 pushes the image right on desktop to prevent it from hugging
                the left edge and competing with the decorative line on RadiologyCenter below. */}
            <div className={`flex justify-center md:justify-between md:flex-1 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}>
                {/* clamp() for height: 280px floor prevents the image from becoming too
                    small on short portrait phones; 50vh cap keeps it proportional on tall
                    monitors without overwhelming the text block beside it. */}
                <div className="rounded-2xl overflow-hidden w-48 md:w-54 lg:w-72 md:pl-55" style={{ height: 'clamp(280px, 50vh, 420px)' }}>
                    <img src={skeletonImg} alt="Full body scan" className="w-full h-full object-cover object-top" />
                </div>
            </div>

            {/* Right: text with vertical accent line
                anim-delay-2 staggers the text reveal after the image slides in from the left. */}
            <div className={`relative max-w-md w-full md:flex-1 md:mr-18 ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}>

                {/* Vertical line + glowing dot — absolutely positioned to the right edge of
                    the text block (-right-8). The line is split into two flex children above
                    and below the dot so the dot is always centred vertically regardless of
                    the text block's runtime height. Width 12px matches the dot diameter. */}
                <div className="hidden md:flex absolute top-0 bottom-0 -right-8 flex-col items-center" style={{ width: '12px' }}>
                    <div style={{ flex: 1, width: '1px', background: 'rgba(26,43,110,0.25)' }} />
                    {/* Triple box-shadow: tight core (8px), mid diffusion (24px), wide bloom (48px) */}
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
