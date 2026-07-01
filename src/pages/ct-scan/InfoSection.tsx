// InfoSection for the CT Scan page.
// Renders a three-item FAQ-style list covering what a CT scan is, what it can detect,
// and its role in preventive screening. Continues the wave-top / light-blue visual
// rhythm shared across all service page InfoSections.
import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/ct-scan/2.png"
import icon2 from "../../assets/ct-scan/3.png"
import icon3 from "../../assets/ct-scan/4.png"

// Each column entry describes a distinct FAQ topic about CT imaging.
// Shape: { icon: string (image path), title: string, body: string }
// Custom image icons rather than lucide icons allow branded artwork per exam type.
const columns = [
  {
    icon:icon1,
    title: "What Is a CT Scan?",
    body: "A CT scan or computed tomography uses computer-processed combinations of X-ray measurements taken from multiple angles to produce detailed cross-sectional images. Unlike a standard X-ray, which produces a single flat image, CT creates a series of thin virtual slices that allow your physician to examine internal structures with far greater precision and depth. At Harding, our multi-slice spiral CT technology improves both image accuracy and scan speed and enables 2D and 3D reconstructions that are valuable for evaluating vascular structures, complex fractures, and organ abnormalities.",
},
  {
    icon: icon2,
    title: "What Can a CT Scan Detect?",
    body: "CT can image virtually any internal organ with high anatomic detail, making it particularly valuable for evaluating tumors and measuring a patient's response to chemotherapy or radiation therapy. It is an excellent test for diagnosing kidney stones, appendicitis, and pulmonary embolism. CT angiography can study arteries before and after surgery, and can also be a less invasive alternative to traditional cardiac angiography. CT bone density testing also provides accurate measurements of bone density, helping identify patients at risk before a fracture occurs.",

  },
  {
    icon: icon3,
    title: "CT Screening for Proactive Health",
    body: "Beyond diagnostic referrals, CT plays an important role in preventive health. Low-dose CT chest screening for current and former smokers can detect lung cancer when tumors are still at stage 1 – a point at which the cure rate is significantly higher. CT Cardiac Calcium Scoring provides a non-invasive assessment of cardiovascular risk. CT Colonoscopy offers a less invasive alternative for colorectal screening. Early detection changes outcomes – and at Harding, we make them accessible and straightforward to schedule."
  },

];

const InfoSection = () => {
  return (
    // wave-top creates the curved top edge; relative z-20 keeps this above Hero (z-10).
    // bg-[#b8dff0] is the light blue used for alternating sections across all service pages.
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
     Understanding CT Scans
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
     Learn how ultrasound imaging evaluates organs, tissues, blood flow, and pregnancy — safely and without radiation.
          </p>
        </div>

        {/* md:grid-rows-4 and md:gap-18 space items vertically on medium+ screens.
            Large gap keeps FAQ entries visually separated without needing divider lines. */}
        <div className="mt-10 grid gap-8 md:grid-rows-4 md:gap-18 w-full">
          {columns.map(({ icon: Icon, title, body,}, index) => (
            <div
              key={title}
              // Border class on index > 0 was intended as a visual divider but currently
              // only sets color without width/style — preserved as-is from original.
              className={`px-0 md:px-0 ${index > 0 ? " md:border-[#7ab8d4]" : ""}`}
            >
              <div className="flex items-start gap-5">
                {/* Fixed 64x64 icon circle ensures all entries align regardless of image ratio */}
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00c2c7] text-white shadow-lg">
                  <img src={Icon} className="h-10 w-10"/>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2b5e]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#2a4a6e]">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* -mt-40 pulls the CTA button up over the last grid item to reduce
            the whitespace gap at the bottom of the section */}
        <div className="-mt-40 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-[#00c2c7] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
            Book Appointment
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00c2c7]">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
