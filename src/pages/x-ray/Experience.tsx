import { ClipboardList, ShieldCheck, Syringe, Timer } from "lucide-react";
import experienceImage from "../../assets/x-ray/1.png";
import { DotGrid, Rings } from "./Decorations";

const items = [
  {
    icon: Timer,
    title: "Quick procedure",
    body: "A brief, painless procedure that requires no injections, no preparation, and no recovery time.",
  },
  {
    icon: Syringe,
    title: "No injections",
    body: "Dense structures like bone appear white on the image; soft tissue and air-filled areas like the lungs appear darker.",
  },
  {
    icon: ClipboardList,
    title: "Digital results",
    body: "Results are processed digitally and shared with your physician promptly so your care can move forward.",
  },
];

const Experience = () => {
  return (
    <section className=" sticky top-0 wave-top z-10 -mt-8 overflow-hidden bg-[#1a4d7a] py-16 text-white md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      <Rings className="absolute -left-16 bottom-6 opacity-35" color="#00c2c7" size={140} />
      <DotGrid
        className="absolute right-8 top-36 hidden opacity-35 lg:grid"
        color="#00c2c7"
        rows={8}
        cols={4}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-xl border-2 border-white/50 bg-white/10 p-2 shadow-xl anim-slide-left">
          <img
            src={experienceImage}
            alt="Modern X-ray experience"
            className="h-[330px] w-full rounded-lg object-cover object-center md:h-[445px] "
          />
        </div>

        <div className="anim-slide-right anim-delay-2 md:ml-20 md:-mr-18">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl pt-16">
            Safe, Painless & Over Before
            <br />
            You Know It - The Modern
            <br />
            X-Ray Experience
          </h2>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75">
           An X-ray is one of the most straightforward imaging exams you can have. It takes just minutes, requires no special preparation in most cases, and uses a very small, controlled dose of radiation to create a detailed picture of your internal structures. At Harding, our digital system produces sharper images at lower doses than older equipment – so you get better results with less exposure.
          </p>

          <div className="mt-6 space-y-5">
            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00c2c7]">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-white/75">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-5 rounded-xl border border-[#00c2c7] bg-white/5 px-6 py-5">
            <ShieldCheck className="shrink-0 text-[#00c2c7]" size={48} />
            <div>
              <h3 className="text-lg font-bold text-[#00c2c7]">
                Advanced technology. Expert care.
              </h3>
              <p className="mt-1 text-base text-white">
               Everything is stored digitally at Harding, so your physician can access your images immediately and compare them with future scans if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
