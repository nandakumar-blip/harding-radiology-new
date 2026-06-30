import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/dexa-scan/2.png"
import icon2 from "../../assets/dexa-scan/3.png"
import icon3 from "../../assets/dexa-scan/4.png"

const columns = [
  {
    icon:icon1,
    title: "What Is a DEXA Scan?",
    body: "A DEXA scan uses two low-dose X-ray beams to measure bone mineral density at the lumbar spine and hip – the sites most commonly affected by osteoporosis-related fractures. The results give your physician a precise, objective picture of your bone strength. Unlike a standard bone scan, which involves an injection and is used to detect cancer or infection, a DEXA scan is non-invasive, requires no preparation, and is completed quickly with minimal radiation exposure.",
},
  {
    icon: icon2,
    title: "Who Should Have a Bone Density Test?",
    body: "A DEXA scan is recommended for post-menopausal women, older adults, and anyone with risk factors that increase the likelihood of bone loss, including previous fractures, long-term steroid use, or medical treatments that affect hormone levels. Your physician may also recommend it if you have had an organ transplant, or are already being treated for osteoporosis. If you have been referred for a DEXA scan, it is because your physician wants a clear, objective baseline for your bone health and that is a proactive step worth taking.",
  
  },
  {
    icon: icon3,
    title: "Why Is a Bone Density Test Done?",
    body: "Osteoporosis is often called a silent condition: bones thin gradually, without symptoms, until a fracture makes the problem impossible to ignore. A DEXA scan changes that picture. By identifying bone loss early, it gives your physician the opportunity to intervene before a fracture occurs – whether through lifestyle guidance, supplements, or medication. Regular DEXA screening, particularly for those at higher risk, is one of the most effective ways to stay ahead of this condition."
  },
  
];

const InfoSection = () => {
  return (
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="mx-auto max-w-6xl px-3 md:px-0 w-full">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
      Check Your Bone Health with DEXA
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
      A safe, proactive, and painless way to measure bone strength, detect osteoporosis early, and assess fracture risk.
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
