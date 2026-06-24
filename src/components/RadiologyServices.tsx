import { ArrowRight } from "lucide-react";
import ladyImg from '../assets/women-img.png';
import mriIcon from '../assets/scan-img.png';
import { useInView } from '../hooks/useInView';

const services = [
  {
    title: "3D Mammography",
    description:
      "Tomosynthesis-based breast imaging. Greater sensitivity than conventional mammography, with fewer false positives and reduced callback rates.",
  },
  {
    title: "3D Breast Ultrasound",
    description:
      "Hitachi SOFIA automated whole-breast ultrasound. Thirty-second scan per breast. Recommended for women with dense or heterogeneous breast tissue.",
  },
  {
    title: "CT Scans",
    description:
      "GE Optima CT. Full diagnostic capability including low-dose lung cancer screening (LDCT) and coronary artery calcium scoring.",
  },
  {
    title: "Open MRI",
    description:
      "Hitachi Altaire high-field open MRI. Clinically equivalent to closed-bore systems, with significantly improved patient comfort and accessibility.",
  },
  {
    title: "Ultrasound",
    description:
      "GE Logic series with full Doppler color capability. Abdominal, pelvic, musculoskeletal, and vascular applications.",
  },
  {
    title: "X-Ray",
    description:
      "Fully computerized digital radiography. Bone studies, chest, abdomen, and spine. Results available promptly for physician review.",
  },
  {
    title: "DEXA Scan",
    description:
      "Dual-energy X-ray absorptiometry for bone mineral density assessment at the lumbar spine and hip.",
  },
];

const DELAY = ['anim-delay-1','anim-delay-2','anim-delay-3','anim-delay-4','anim-delay-5','anim-delay-6','anim-delay-7'];

export const RadiologyServices = () => {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white relative py-16 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className={`mb-12 text-center text-4xl font-bold text-slate-800 ${inView ? 'anim-fade-up' : 'anim-hidden'}`}>
          Radiology Services
        </h2>

        <div ref={ref} className="relative rounded-sm bg-linear-to-br from-[#52a5ba] to-[#52a5ba] p-10">
          {/* decorative diagonal overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_55%,rgba(255,255,255,0.08)_55%)]" />

          <div className="grid gap-12 lg:grid-cols-[1fr_470px]">
            {/* Left Services */}
            <div>
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`py-5 ${index !== services.length - 1 ? 'border-b border-white/50' : ''} ${inView ? `anim-slide-left ${DELAY[index]}` : 'anim-hidden'}`}
                >
                  <div className="flex">
                    <h3 className="mb-3 text-3xl font-semibold text-white">
                      {service.title}
                    </h3>
                    {index === 0 && (
                      <ArrowRight className="ml-4 text-white" size={36} />
                    )}
                  </div>
                  <p className="max-w-xl text-md leading-relaxed text-white/95">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Featured Card */}
            <div className={`overflow-hidden rounded-xl h-auto md:h-88 bg-white shadow-lg sticky top-24 self-start ${inView ? 'anim-slide-right anim-delay-2' : 'anim-hidden'}`}>
              <div className="grid md:grid-cols-2">
                <img
                  src={ladyImg}
                  alt="Patient"
                  className="w-full h-56 md:h-full object-cover"
                />
                <div className="p-8 -mt-3">
                  <div className="-mb-2">
                    <img src={mriIcon} alt="" className="h-14 w-14" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-800">
                    Precision Breast Imaging With Next-Generation 3D Mammograms
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    It provides highly detailed, layered X-ray images of the
                    breast, allowing radiologists to examine tissue with
                    greater accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
