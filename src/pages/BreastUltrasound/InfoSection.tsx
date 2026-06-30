import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/breast-ultrasound/2.png"
import icon2 from "../../assets/breast-ultrasound/3.png"
import icon3 from "../../assets/breast-ultrasound/4.png"

const columns = [
  {
    icon:icon1,
    title: "What Does It Mean to Have Dense Breasts?",
    body: "Breast density cannot be determined by how a breast looks or feels, it is assessed only by a radiologist reviewing mammogram images. Women with dense breasts have a higher proportion of fibroglandular tissue relative to fat. On a mammogram, fatty tissue appears dark, while dense tissue appears white – the same color as cancer. In women with dense breasts, tumors can go undetected on a standard mammogram. Dense breasts are normal and affect approximately 40% of women of mammography age.",
},
  {
    icon: icon2,
    title: "Why Should I Consider Additional Screening?",
    body: "Dense tissue can mask cancers that would be clearly visible in fatty breast tissue.This makes women with dense breasts at a higher risk of what is known as an interval cancer, where cancer is detected shortly after a negative mammogram. Research shows that combining mammography with 3D whole-breast ultrasound increases cancer detection from 78% to 92% in women with dense breasts. Dense breast notification laws across 36 states require providers to inform women of their breast density and discuss supplemental screening options.",
  
  },
  {
    icon: icon3,
    title: "Does Dense Breast Tissue Increase Cancer Risk?",
    body: "Yes. Research confirms that breast density is a well-established predictor of breast cancer risk – one that exceeds family history as a risk factor. Mammography misses approximately one in every two cancers in women with dense breasts. Supplemental imaging such as SOFIA 3D whole-breast ultrasound provides a significantly clearer evaluation. The scan is fast, comfortable, and produces detailed images that allow our radiologists to assess the full breast with a level of confidence that mammography alone cannot provide."
  },
  
];

const InfoSection = () => {
  return (
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="mx-auto max-w-6xl px-3 md:px-0 w-full">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
   Understanding Dense Breasts & Supplemental Screening
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
   The Genius exam lets doctors view breast tissue page by page, ensuring no detail is hidden.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-rows-4 md:gap-18 w-full">
          {columns.map(({ icon: Icon, title, body,}, index) => (
            <div
              key={title}
              className={`px-0 md:px-0 ${index > 0 ? " md:border-[#7ab8d4]" : ""}`}
            >
              <div className="flex items-start gap-5">
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
