import skeletonImg from '../../assets/skeleton.webp';

export const XRayHero = () => {
  return (
  <section className="relative h-200 overflow-hidden bg-[#eef3f8]">
      {/* Content */}
      <div className="mx-auto -mt-135 px-8">
        <div className="grid items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="z-10 ">
            <h1 className="text-[#17384f] text-5xl font-semibold leading-[1.15] tracking-[-0.03em] ">
              Precision Digital X-
              <br />
              Ray Imaging For
              <br />
              Confident Diagnosis
            </h1>

            <p className="mt-8  text-lg w-80 leading-relaxed text-[#35566d]">
              High-resolution digital imaging that helps physicians evaluate
              your injuries and conditions quickly, accurately, and with
              confidence.
            </p>

            <button className="mt-10 rounded-xl bg-[#14364d] px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#102b3d]">
              Book an Appointment
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-end">
            <img
              src={skeletonImg}
              alt="Digital X-Ray Imaging"
              className="w-full max-w-[950px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Dark Gradient */}
      <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-t from-[#0f3348] via-[#163d54]/80 to-transparent" />
    </section>
  );
}
