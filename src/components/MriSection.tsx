// MriSection — scrolls up over the sticky Hero section to reveal the MRI machine
// image and three feature cards. z-30 is intentionally higher than the Hero's z-10
// so this section appears to slide on top of it as the user scrolls down.
// Mobile and desktop layouts use entirely separate refs and inView states because
// only one layout is mounted at any given viewport width; sharing a single ref
// would cause the IntersectionObserver to target a hidden element in one breakpoint.

import MriImage from '../assets/MRImachine-hr.png';
import { useInView } from '../hooks/useInView';

export const MriSection = () => {
    // Two independent IntersectionObserver instances — one for the mobile card container
    // and one for the desktop card container. This prevents an observer attached to the
    // hidden layout from triggering (or never triggering) and blocking animations.
    const { ref: mobileRef, inView: mobileInView } = useInView();
    const { ref: desktopRef, inView: desktopInView } = useInView();

    // Cards are built as JSX fragments rather than a data array so that each card's
    // animation delay class (anim-delay-2, anim-delay-4) can be embedded directly
    // in the className without a lookup table. The staggered delays create a
    // sequential fade-up cascade as the cards enter the viewport.
    // The left border colour differs per card (#00c2c7 → #1a2b6e → #2d4f80) to
    // visually distinguish each service category without adding extra layout elements.
    const mobileCards = (
        <>
            {/* anim-hidden keeps the card invisible until mobileInView turns true,
                at which point anim-fade-up plays its entrance animation.
                This avoids a flash of content before the observer fires. */}
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#00c2c7] px-5 py-6 rounded-lg shadow-md ${mobileInView ? 'anim-fade-up' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">Open MRI</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">Our Hitachi Altaire high-field open MRI produces clinical-grade images in a fully open, non-claustrophobic environment – suitable for patients of all sizes, including those with anxiety or mobility limitations.</p>
            </div>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#1a2b6e] px-5 py-6 rounded-lg shadow-md ${mobileInView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">3D Breast Imaging</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">The only facility in NJ offering 3D Mammography plus Automated 3D Breast Ultrasound together. 30 seconds per breast. Clinically validated for superior detection, especially in dense breast tissue.</p>
            </div>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#2d4f80] px-5 py-6 rounded-lg shadow-md ${mobileInView ? 'anim-fade-up anim-delay-4' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">CT Scans</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">GE Optima CT Scanner with full diagnostic capability. Lung cancer screening, cardiac calcium scoring, and total body CT – with STAT reporting available for urgent referrals.</p>
            </div>
        </>
    );

    // Desktop cards mirror mobileCards exactly but are tied to desktopRef/desktopInView.
    // They're duplicated (rather than reusing a shared component) so each layout's
    // observer fires against its own mounted DOM node — avoiding situations where
    // the observer target is `display:none` and never becomes visible.
    const desktopCards = (
        <>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#00c2c7] px-5 py-6 rounded-lg shadow-md ${desktopInView ? 'anim-fade-up' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">Open MRI</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">Our Hitachi Altaire high-field open MRI produces clinical-grade images in a fully open, non-claustrophobic environment – suitable for patients of all sizes, including those with anxiety or mobility limitations.</p>
            </div>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#1a2b6e] px-5 py-6 rounded-lg shadow-md ${desktopInView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">3D Breast Imaging</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">The only facility in NJ offering 3D Mammography plus Automated 3D Breast Ultrasound together. 30 seconds per breast. Clinically validated for superior detection, especially in dense breast tissue.</p>
            </div>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#2d4f80] px-5 py-6 rounded-lg shadow-md ${desktopInView ? 'anim-fade-up anim-delay-4' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">CT Scans</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">GE Optima CT Scanner with full diagnostic capability. Lung cancer screening, cardiac calcium scoring, and total body CT – with STAT reporting available for urgent referrals.</p>
            </div>
        </>
    );

    return (
        // z-30 > Hero's z-10, so this section overlaps the Hero when scrolled.
        // bg-transparent lets the Hero's light blue show through the gap between
        // the MRI image top and the section edge while the gradient handles the fade.
        <div className="w-full relative z-30 bg-transparent">
            {/* Mobile layout — stacks image above cards vertically */}
            <div className="md:hidden">
                <div className="relative pt-16">
                    {/* anim-mri-glow is a custom CSS keyframe that pulses a soft glow
                        around the MRI machine image to draw attention to it. */}
                    <img className="w-full h-80 object-contain anim-mri-glow" src={MriImage} alt="MRI machine" />
                    {/* Gradient overlay fades the image bottom into the card background
                        colour (#b8dff0), creating a seamless transition without a hard edge. */}
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to bottom, transparent 40%, rgba(184,223,240,0.7) 75%, rgba(184,223,240,1) 100%)'
                    }} />
                </div>
                {/* -mt-28 pulls the card container up to overlap the gradient-faded
                    bottom of the image, making the image and cards feel like one unit. */}
                <div ref={mobileRef} className="flex flex-col gap-4 px-4 py-6 -mt-28" style={{ background: '#b8dff0' }}>
                    {mobileCards}
                </div>
            </div>

            {/* Desktop layout — full viewport height with the MRI image centered
                and the three cards pinned to the bottom via absolute positioning. */}
            <div className="hidden md:block min-h-screen relative">
                {/* absolute inset-0 makes the image fill the full section height.
                    Horizontal padding (md:px-20 → xl:px-60) narrows the image on
                    wider screens so it never looks stretched. */}
                <img className="h-full w-full md:px-20 lg:px-40 xl:px-60 object-contain absolute inset-0 anim-mri-glow" src={MriImage} alt="MRI machine" />
                {/* The card row is absolutely pinned to the bottom of the section.
                    The multi-stop gradient (opaque at the bottom, transparent at the top)
                    acts as a scrim that makes cards legible over the MRI image without
                    covering the machine itself — the transparency increases as you look
                    further up, so the top of the image remains unobscured. */}
                <div
                    ref={desktopRef}
                    className="flex flex-row justify-around w-full pb-16 pt-52 px-35 absolute bottom-0 gap-4"
                    style={{
                        background: 'linear-gradient(to top, rgba(184,223,240,1) 0%, rgba(184,223,240,1) 35%, rgba(184,223,240,0.75) 55%, rgba(184,223,240,0.3) 75%, transparent 100%)'
                    }}
                >
                    {desktopCards}
                </div>
            </div>
        </div>
    );
};
