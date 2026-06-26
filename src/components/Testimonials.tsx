import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import profileImg from "../assets/profile-img.png";
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote:
      'I came in for a CT scan feeling very nervous, but the team at Harding made the entire process smooth and stress-free. They walked me through every step and the results were ready quickly.',
    name: 'Maria Johnson',
    role: 'Retired Teacher',
  },
  {
    quote:
      'The whole-body MRI gave me peace of mind I never expected. The radiologists were incredibly thorough and my physician received the report the same day. Absolutely exceptional care.',
    name: 'Robert Kim',
    role: 'Software Engineer',
  },
  {
    quote:
      'As someone with claustrophobia, I was dreading my MRI. The open MRI system at Harding was a game changer — I felt completely comfortable throughout the entire scan.',
    name: 'Sarah Patel',
    role: 'Elementary School Principal',
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView();
  const current = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-white py-16 md:py-24 px-4 relative z-50">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-center text-3xl md:text-4xl font-bold mb-3 ${inView ? 'anim-fade-up' : 'anim-hidden'}`}
          style={{ color: '#1a3a5c' }}
        >
          What Our Patients Say
        </h2>
        <p
          className={`text-center text-base md:text-lg font-semibold mb-20 ${inView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}
          style={{ color: '#1a3a5c' }}
        >
          Our Multiple Scans Have Made Quite An Impact
        </p>

        {/* Centered pill card */}
        <div ref={ref} className={`flex justify-center ${inView ? 'anim-fade-up anim-delay-3' : 'anim-hidden'}`}>
          <div
            className="relative flex flex-col items-center pt-16 pb-12 px-16 w-full max-w-2xl"
            style={{
              background: '#cce8ed',
              borderRadius: '999px',
            }}
          >
            {/* Profile image — centered at top, overlapping */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
              <img src={profileImg} alt="Patient" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-4 w-full">
              {/* Text */}
              <div className="flex-1">
                <p
                  className="text-center text-sm md:text-base leading-relaxed mb-4"
                  style={{ color: '#2a4a5e' }}
                >
                  "{current.quote}"
                </p>
                <p className="text-center font-semibold text-base mb-1 ml-15" style={{ color: '#1a3a5c' }}>
                  {current.name}
                </p>
                <p className="text-center text-sm  text-gray-500 ml-15">{current.role}</p>
              </div>

              {/* Arrow — beside text on the right */}
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors hover:bg-white/40"
                style={{ borderColor: '#2a7a8c', color: '#2a7a8c' }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
