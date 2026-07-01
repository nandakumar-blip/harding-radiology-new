import { ArrowRight } from "lucide-react";
import icon1 from "../../assets/open-mri/1.png"
import icon2 from "../../assets/open-mri/2.png"
import icon3 from "../../assets/open-mri/3.png"

const columns = [
  {
    icon:icon1,
    title: "What Is an Open MRI?",
    body: "An MRI uses a powerful magnetic field and radio waves to produce detailed images of the inside of your body. No radiation, no X-rays and no injections in most cases. What makes the open MRI different is its design. Rather than sliding into an enclosed tube, you lie on a table between two open magnets with space on all sides. For patients who experience claustrophobia or anxiety, or who have had difficult MRI experiences in the past, this distinction can make all the difference between avoiding a necessary scan and finally getting the answers your physician needs.",
},
  {
    icon: icon2,
    title: "Common Uses of This Procedure",
    body: "MRI produces some of the most detailed soft-tissue images available in diagnostic medicine, making it the preferred tool for evaluating spinal and joint conditions, sports injuries, and neurological concerns. It is widely used to assess the knee, shoulder, hip, elbow, and wrist – detecting even very small tears to ligaments, tendons, and muscles that other imaging methods may miss. If your physician has referred you for an MRI, it is because they need a level of detail that only this technology can reliably provide.",
  
  },
  {
    icon: icon3,
    title: "How Does It Work?",
    body: "Unlike X-ray or CT, MRI does not use ionizing radiation. Instead, it uses a strong magnetic field and radio waves to stimulate hydrogen protons naturally present throughout your body. As these protons return to their resting state, they emit signals that are processed by sophisticated computer systems into high-resolution cross-sectional images. A typical MRI exam consists of several imaging sequences, each lasting two to ten minutes, capturing views of the body from multiple planes for the most complete diagnostic picture possible.",
   
  },
  
];

const InfoSection = () => {
  return (
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
           A Closer Look at Open MRI
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
         Clear diagnostic imaging with a more comfortable patient experience.
          </p>
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
