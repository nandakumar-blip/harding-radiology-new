import MriImage from '../assets/MRImachine-hr.png';
import { useInView } from '../hooks/useInView';

export const MriSection = () => {
    const { ref, inView } = useInView();

    const cards = (
        <>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#00c2c7] px-5 py-6 rounded-lg shadow-md ${inView ? 'anim-fade-up' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">Open MRI</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">Our Hitachi Altaire high-field open MRI produces clinical-grade images in a fully open, non-claustrophobic environment – suitable for patients of all sizes, including those with anxiety or mobility limitations.</p>
            </div>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#1a2b6e] px-5 py-6 rounded-lg shadow-md ${inView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">3D Breast Imaging</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">The only facility in NJ offering 3D Mammography plus Automated 3D Breast Ultrasound together. 30 seconds per breast. Clinically validated for superior detection, especially in dense breast tissue.</p>
            </div>
            <div className={`w-full md:max-w-xs bg-white/95 border-l-4 border-[#2d4f80] px-5 py-6 rounded-lg shadow-md ${inView ? 'anim-fade-up anim-delay-4' : 'anim-hidden'}`}>
                <h3 className="text-[#1a2b5e] font-bold text-xl mb-3">CT Scans</h3>
                <p className="text-[#2d4f80] text-sm leading-relaxed">GE Optima CT Scanner with full diagnostic capability. Lung cancer screening, cardiac calcium scoring, and total body CT – with STAT reporting available for urgent referrals.</p>
            </div>
        </>
    );

    return (
        <div className="w-full relative z-20 bg-transparent">
            {/* Mobile layout */}
            <div className="md:hidden">
                <div className="relative pt-16">
                    <img className="w-full h-80 object-contain anim-mri-glow" src={MriImage} alt="MRI machine" />
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to bottom, transparent 40%, rgba(184,223,240,0.7) 75%, rgba(184,223,240,1) 100%)'
                    }} />
                </div>
                <div ref={ref} className="flex flex-col gap-4 px-4 py-6 -mt-28" style={{ background: '#b8dff0' }}>
                    {cards}
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block min-h-screen relative">
                <img className="h-full w-full md:px-20 lg:px-40 xl:px-60 object-contain absolute inset-0 anim-mri-glow" src={MriImage} alt="MRI machine" />
                <div
                    ref={ref}
                    className="flex flex-row justify-around w-full pb-16 pt-52 px-35 absolute bottom-0 gap-4"
                    style={{
                        background: 'linear-gradient(to top, rgba(184,223,240,1) 0%, rgba(184,223,240,1) 35%, rgba(184,223,240,0.75) 55%, rgba(184,223,240,0.3) 75%, transparent 100%)'
                    }}
                >
                    {cards}
                </div>
            </div>
        </div>
    );
};
