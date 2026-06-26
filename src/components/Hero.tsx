import happyPatient from "../assets/bg.jpg";

const Dots = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#7ab8d4] opacity-60">
    {[0, 1, 2, 3, 4].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2.5" fill="currentColor" />
      ))
    )}
  </svg>
);

const CircleRings = () => (
  <svg width="140" height="140" viewBox="0 0 140 140" className="text-[#7ab8d4] opacity-40">
    <circle cx="70" cy="70" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="70" cy="70" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="70" cy="70" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="sticky top-0 pt-15 z-10 w-full bg-[#b8dff0] overflow-hidden wave-bottom">
      {/* Decorative dots — top left */}
      <div className="absolute left-4 top-6 z-0">
        <Dots />
      </div>

      {/* Decorative rings — far right */}
      <div className="absolute right-2 top-8 z-0">
        <CircleRings />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto px-0 md:px-60 flex flex-col md:flex-row items-center py-16 md:py-24 gap-15">
        {/* Left — text */}
        <div className="flex-1 text-[#1a2b5e] w-full px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl leading-tight mb-4 anim-slide-left" style={{ color: '#1a2b5e' }}>
            Preventive Health, Reimagined with{" "}
            <span className="font-semibold" style={{ color: '#00c2c7' }}>Whole-Body MRI</span>{" "}
            – now available at Harding.
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8 anim-slide-left anim-delay-2" style={{ color: '#2a4a6e' }}>
            A radiation-free, non-invasive scan covering brain to pelvis in a single session.
          </p>
          <button className="bg-[#00c2c7] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#00c2c7] transition-colors duration-200 anim-slide-left anim-delay-3">
            Learn More
          </button>
        </div>

        {/* Right — circular photo */}
        <div className="flex-1 flex justify-center md:justify-end items-center anim-slide-right">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-90 md:h-90 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src={happyPatient}
              alt="Happy patients"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

    </section>
  );
};
