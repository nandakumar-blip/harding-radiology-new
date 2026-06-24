export const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 z-10 bg-cover bg-[url(./assets/bg.jpg)] bg-center">
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 text-center px-6 sm:px-12 md:px-55 w-full">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 anim-fade-up">
          Preventive Health, Reimagined with{" "}
          <span className="text-[#00c2c7]">Whole-Body MRI</span> – now
          available at Harding. A radiation-free, non-invasive scan covering
          brain to pelvis in a single session.
        </h1>

        <button className="bg-[#00c2c7] text-white font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-[#00a8ad] transition-colors duration-200 anim-fade-up anim-delay-3">
          Book your Appointment
        </button>
      </div>
    </div>
  );
};
