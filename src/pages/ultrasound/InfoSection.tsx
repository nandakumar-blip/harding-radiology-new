import { ArrowRight, CheckCircle2 } from "lucide-react";
import icon1 from "../../assets/ultrasound/2.png"
import icon2 from "../../assets/ultrasound/3.png"
import icon3 from "../../assets/ultrasound/4.png"
import icon4 from "../../assets/ultrasound/5.png"
const columns = [
  {
    icon:icon1,
    title: "What Is an Ultrasound?",
    body: "Ultrasound, or sonography, is a diagnostic imaging procedure that uses high-frequency sound waves to create real-time images of the inside of the body. Because it does not use radiation or X-rays, ultrasound is a safe, non-invasive, and comfortable examination for patients. It is commonly used to evaluate internal organs, soft tissues, blood vessels, and developing pregnancies, helping physicians diagnose conditions and monitor health effectively.",
},
  {
    icon: icon2,
    title: "How Does It Work?",
    body: "Ultrasound works on the same principle as sonar. Because the human body contains over 60% water, high-frequency sound waves can travel through tissue and reflect back whenever they encounter a boundary, such as the wall of a blood vessel or the edge of an organ. Sophisticated computers process these returning echoes into detailed, real-time images your physician can read immediately.",
  
  },
  {
    icon: icon3,
    title: "Common Uses of This Procedure",
    body: "Ultrasound is widely used to evaluate abdominal organs including the liver, pancreas, gallbladder, and kidneys, as well as the thyroid, breast, and scrotum. In gynecology, it helps diagnose the causes of pelvic pain, detect abnormalities of the ovaries and uterus, and monitor ovulation in fertility treatment. It is also used to assess blood flow to the brain and through the arms and legs, and to identify abnormal or enlarged blood vessels such as aneurysms. This exam offers the most direct, radiation-free view of what physicians need to see.",
   
  },
  {
    icon: icon4,
    title: "Types of Ultrasound We Offer",
    body: "At Harding, we perform a comprehensive range of ultrasound studies to support the full spectrum of referrals we receive.",
   
  },
];

const InfoSection = () => {
  return (
    <section className="relative z-20 wave-top bg-[#b8dff0] py-16 w-full">
      <div className="mx-auto max-w-6xl px-3 md:px-0 w-full">
        <div className="mx-auto max-w-3xl text-center pt-16">
          <h2 className="text-3xl font-bold leading-tight text-[#1a2b5e] sm:text-4xl">
           What Ultrasound Can Do For You
          </h2>
          <p className="mt-3 text-base leading-7 text-[#2a4a6e]">
          Learn how ultrasound imaging evaluates organs, tissues, blood flow, and pregnancy — safely and without radiation.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-rows-4 md:gap-18 w-full">
          {columns.map(({ icon: Icon, title, body, }, index) => (
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
