// InfoSection for the 3D Mammogram page.
// Renders a three-item FAQ-style list explaining the Genius 3D exam process,
// eligibility, and what to expect. Sits above the Schedule section (both z-20)
// with a wave-top curved edge to continue the layered-card visual flow.
import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/3d-mammogram/2.png"
import icon2 from "../../assets/3d-mammogram/3.png"
import icon3 from "../../assets/3d-mammogram/4.png"

// Each column entry describes a distinct FAQ topic about the Genius 3D exam.
// Shape: { icon: string (image path), title: string, body: string }
// The icon is rendered inside a teal rounded circle; it's an image rather than
// a lucide icon to support custom branded artwork per exam type.
const columns = [
  {
    icon:icon1,
    title: "What is a Genius™ 3D Mammography™ exam?",
    body: "The Genius™ exam uses digital breast tomosynthesis – a technology that captures multiple low-dose images of the breast in seconds as an X-ray arm moves in a gentle arc. These images are reconstructed into thin, layered slices that our radiologists examine one by one, like turning the pages of a book. Rather than viewing all of your breast tissue compressed into a single flat image, they can see through each layer independently, making fine details visible. A conventional 2D image can also be generated from the same scan.",
},
  {
    icon: icon2,
    title: "Who can have a Genius™ 3D Mammography™ exam?",
    body: "The Genius™ exam is appropriate for all women – whether you are coming in for a routine annual screening or a diagnostic exam following a specific concern such as a lump or pain, or visible changes. Screening mammograms are routinely recommended starting at age 40, or earlier if advised by your physician. The Genius™ exam is FDA-approved as superior for women with dense breasts, and is also safe for women with breast implants.",

  },
  {
    icon: icon3,
    title: "What to Expect During Your Exam Body",
    body: "The Genius™ 3D exam is performed in the same way as a standard 2D mammogram – the process is familiar, the compression is no different, and it takes only a few extra seconds per breast. What changes is what your radiologist can see. Studies show that 3D mammography detects more invasive cancers and reduces recall rates for additional imaging, meaning fewer unnecessary follow-up appointments and greater confidence in your results."
  },

];

const InfoSection = () => {
  return (
    // wave-top creates the curved top edge; relative z-20 keeps this above Hero (z-10)
    // bg-[#b8dff0] is the light blue used for alternating sections across all service pages
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
         The Genius 3D Mammography Exam Experience
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
       The Genius exam lets doctors view breast tissue page by page, ensuring no detail is hidden.
          </p>
        </div>

        {/* md:grid-rows-4 and md:gap-18 space items vertically on medium+ screens.
            The large gap keeps each FAQ entry visually separated without a divider line. */}
        <div className="mt-10 grid gap-8 md:grid-rows-4 md:gap-18 w-full">
          {columns.map(({ icon: Icon, title, body,}, index) => (
            <div
              key={title}
              // Border class on index > 0 was intended as a divider between entries,
              // but is currently only setting color without width/style — kept as-is.
              className={`px-0 md:px-0 ${index > 0 ? " md:border-[#7ab8d4]" : ""}`}
            >
              <div className="flex items-start gap-5">
                {/* Icon container: fixed 64x64 circle so all icons align regardless
                    of the image aspect ratio */}
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

        {/* -mt-40 pulls the CTA button up over the last grid item to avoid
            excessive whitespace at the bottom of the section */}
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
