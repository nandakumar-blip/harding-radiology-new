// InfoSection for the Lung Cancer Screening page.
// Renders a three-item FAQ-style list covering LDCT eligibility, contraindications,
// and insurance/scheduling. Continues the wave-top / light-blue visual rhythm
// shared across all service page InfoSections.
import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/lung-cancer/2.png"
import icon2 from "../../assets/lung-cancer/3.png"
import icon3 from "../../assets/lung-cancer/4.png"

// Each column entry addresses a distinct patient question about LDCT screening.
// Shape: { icon: string (image path), title: string, body: string }
// Custom image icons rather than lucide icons allow per-exam branded artwork.
const columns = [
  {
    icon:icon1,
    title: "Who Should Consider LDCT Lung Screening?",
    body: "LDCT lung screening is recommended for adults at higher risk of lung cancer – primarily current or former smokers aged 55 and older with a smoking history of 30 pack years or more. Pack years are calculated by multiplying the number of packs smoked per day by the number of years smoked. People who smoked heavily but have since quit, those with a personal history of lung cancer treated more than five years ago, and those with other risk factors, including COPD, a family history of lung cancer, or occupational asbestos exposure, may also be candidates.",
},
  {
    icon: icon2,
    title: "Who May Not Be Suitable for Screening?",
    body: "Lung cancer screening is intended for people who are in generally good health and able to benefit from treatment if cancer is detected. It may not be appropriate for individuals with poor lung function or serious health conditions that would make surgery difficult, those who require continuous supplemental oxygen, or people who have had a chest CT scan within the past year. A physician review is always the right first step before scheduling.",

  },
  {
    icon: icon3,
    title: "Insurance Coverage and Scheduling",
    body: "Medicare Part B, along with most major insurance plans, covers annual LDCT lung screening for patients who meet the qualifying criteria. If you believe you are eligible, speak with your doctor first. If screening is right for you, your physician will provide a referral so you can schedule at Harding. The most effective way to reduce your risk of lung cancer remains avoiding smoking and secondhand smoke – but for those already at elevated risk, early detection through screening can be genuinely life-changing.",

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
          LDCT Lung Screening — Who Should Get Tested
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
       A quick guide to eligibility, health considerations, and insurance coverage for Low-Dose CT lung screening.
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
                {/* Fixed 64x64 icon circle so all entries align regardless of image ratio */}
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

        {/* -mt-20 (smaller than the standard -mt-40 used on other pages) pulls the CTA
            button up slightly — the lung page has only 3 grid rows so less negative margin
            is needed to avoid covering the last entry */}
        <div className="-mt-20 flex justify-center">
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
