import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/x-ray/2.png"
import icon2 from "../../assets/x-ray/3.png"
import icon3 from "../../assets/x-ray/4.png"
const columns = [
  {
    icon:icon1,
    title: "Common Uses",
    body: "If you've been referred for an X-ray, it's likely because your physician wants a clearer look at a bone, joint, or organ. X-ray is most commonly used to identify fractures, as well as arthritis, bone infections, and joint conditions. It's also used to evaluate the lungs for pneumonia or other respiratory concerns, and to examine the spine and abdomen. X-ray also plays a role in the detection and monitoring of cancer, though CT or MRI is generally better suited to defining the nature and extent of a suspected tumor. It's often the first step toward understanding what's causing pain or discomfort, and getting you the right care sooner.",
},
  {
    icon: icon2,
    title: "How Does It Work?",
    body: "During your X-ray, a small amount of radiation passes through your body and is captured by our digital detector on the other side. Different tissues absorb radiation in different amounts – bone appears white and bright, while softer tissues and air-filled areas like the lungs show up in darker shades. The resulting image gives your physician a clear, detailed view of your internal structures. You'll be in and out quickly, with your physician informed and ready to discuss next steps.",
  
  },
  {
    icon: icon3,
    title: "Is It Safe?",
    body: "X-ray is one of the most well-established and extensively studied diagnostic tools in medicine. The dose of radiation used is very small – comparable to what you'd naturally absorb from the environment over a short period of time. At Harding, our digital system is calibrated to use the lowest effective dose while maintaining the image quality your physician needs. If you have specific concerns about radiation or your suitability for an X-ray, our team is happy to address them before your exam.",
   
  },
];

const InfoSection = () => {
  return (
    <section className=" relative z-10 wave-top bg-[#b8dff0] py-16">
      <div className="mx-auto max-w-6xl px-3 md:px-0">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
            What You Should Know About
            <br />
            <span className="text-[#00c2c7]">X-Ray</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
            X-rays use a small amount of radiation to produce images of the
            inside of your body. They help doctors diagnose and treat a variety
            of conditions quickly and accurately.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-rows-3 md:gap-8">
          {columns.map(({ icon: Icon, title, body, points }, index) => (
            <div
              key={title}
              className={`px-0 md:px-8 ${index > 0 ? " md:border-[#7ab8d4]" : ""}`}
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
