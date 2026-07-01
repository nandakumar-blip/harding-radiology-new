// InfoSection for the Cardiac Calcium Scoring page.
// Renders a three-item FAQ-style list covering common uses, how the exam works,
// and who should consider it. Uses z-10 (not z-20) to match this page's lower
// z-index stack (Hero z-0, Experience z-10, InfoSection z-10).
import { ArrowRight } from "lucide-react";
import icon1 from "../../assets/cardiac-scoring/2.png"
import icon2 from "../../assets/cardiac-scoring/3.png"
import icon3 from "../../assets/cardiac-scoring/4.png"

// Each column entry addresses a distinct patient question about CAC scoring.
// Shape: { icon: string (image path), title: string, body: string }
// Custom image icons rather than lucide icons allow per-exam branded artwork.
const columns = [
  {
    icon:icon1,
    title: "Common Uses",
    body: "Cardiac Calcium Scoring is used to assess cardiovascular risk in adults who have risk factors for heart disease but have not yet experienced symptoms. Studies have shown that CAC Scoring is a stronger predictor of heart disease than cholesterol levels alone. It can detect arterial plaque buildup before a heart attack or other cardiac event – giving patients and their physicians the information needed to make proactive decisions about lifestyle changes and medication..",
},
  {
    icon: icon2,
    title: "How Does It Work?",
    body: "During the exam, you lie comfortably on the CT imaging table and hold your breath for intervals of approximately 20 seconds while the scanner captures high-resolution images of your coronary arteries. The scan is fast, safe, and entirely non-invasive – no needles, no contrast dye, and no special preparation required. After the exam, one of our on-site radiologists reviews the images, identifies any areas of arterial calcification, and calculates your CAC Score.",

  },
  {
    icon: icon3,
    title: "Who Should Consider This Test?",
    body: "Cardiac Calcium Scoring is recommended for anyone aged 40 or older who is considered at risk for heart disease based on personal or family history. This includes people with high blood pressure, diabetes, high cholesterol, a family history of heart disease, a history of smoking, a sedentary or high-stress lifestyle, or who are significantly overweight. If one or more of these factors apply to you, speak with your physician about whether a CAC Scoring CT is appropriate.",

  },
];

const InfoSection = () => {
  return (
    // relative z-10 wave-top: this page uses z-10 (not z-20 like other service pages)
    // because its Hero is z-0 and Experience is z-10 — the stack is one level lower overall.
    // bg-[#b8dff0] is the light blue used for alternating sections across all service pages.
    <section className=" relative z-10 wave-top bg-[#b8dff0] py-16">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
           Understanding Coronary Artery Calcium Scoring
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
           Understand how this fast, non-invasive CT scan works, who should consider it, and how it supports earlier detection of coronary artery disease.
          </p>
        </div>

        {/* md:grid-rows-3 (3 rows, not 4 like most other pages) with md:gap-8 (tighter
            than the md:gap-18 used elsewhere) — cardiac has fewer, shorter FAQ entries
            so the reduced gap avoids excessive empty space between items */}
        <div className="mt-10 grid gap-8 md:grid-rows-3 md:gap-8">
          {columns.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              // md:px-8 gives each card horizontal padding on desktop (unlike other pages
              // that use px-0) — adds breathing room within the wider content column.
              className={`px-0 md:px-8 ${index > 0 ? " md:border-[#7ab8d4]" : ""}`}
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

        {/* mt-10 (positive margin, not the negative -mt-40 used on other pages) —
            the cardiac grid uses standard gap spacing so no upward pull is needed */}
        <div className="mt-10 flex justify-center">
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
