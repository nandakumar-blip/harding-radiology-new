import { Phone } from "lucide-react";
import scheduleImage from "../../assets/ultrasound/6.png";
import { DotGrid, Rings } from "./Decorations";

const Schedule = () => {
  return (
    <section className="relative z-20 bg-white px-4 py-16">
      <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-xl bg-[#b8dff0] shadow-xl md:grid-cols-[1fr_1.05fr]">
        <DotGrid className="absolute left-5 top-20 opacity-40" rows={4} cols={2} />
        <Rings className="absolute -bottom-10 -right-8 opacity-80" size={110} />

        <div className="relative z-10 px-8 py-9 md:px-16">
          <h2 className="text-2xl font-bold text-[#1a2b5e] sm:text-2xl">
            Ready to Schedule Your Ultrasound?
          </h2>
          <p className="mt-6 text-md text-[#2a4a6e]">Our team can typically accommodate prompt scheduling for most ultrasound referrals. Walk-ins welcome based on availability. Call us now to speak with our team or book your appointment online by clicking the Appointment button.</p>
          <button className="mt-5 inline-flex items-center gap-4 rounded-full bg-[#00c2c7] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
            <Phone size={20} />
            Call Now
          </button>
        </div>

        <div className="relative min-h-[220px]">
          <img
            src={scheduleImage}
            alt="Doctor ready to schedule an X-ray"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
          <div className="absolute inset-y-0 left-0 w-28 bg-linear-to-r from-[#b8dff0] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
