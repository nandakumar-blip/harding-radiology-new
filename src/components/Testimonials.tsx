import { useState } from 'react';
import happyPatient from '../assets/happy-patient.png';
import { ArrowRight } from 'lucide-react';
import profileImg from "../assets/profile-img.png";
import { useInView } from '../hooks/useInView';
const testimonials = [
  {
    initials: 'MJ',
    quote:
      'I came in for a CT scan feeling very nervous, but the team at Harding made the entire process smooth and stress-free. They walked me through every step and the results were ready quickly.',
    name: 'Maria Johnson',
    role: 'Retired Teacher',
  },
  {
    initials: 'RK',
    quote:
      'The whole-body MRI gave me peace of mind I never expected. The radiologists were incredibly thorough and my physician received the report the same day. Absolutely exceptional care.',
    name: 'Robert Kim',
    role: 'Software Engineer',
  },
  {
    initials: 'SP',
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
    <section className="bg-white h-screen md:py-32 px-4 md:pl-25 relative z-50">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-center text-3xl md:text-4xl font-bold mb-3 ${inView ? 'anim-fade-up' : 'anim-hidden'}`}
          style={{ color: '#1a3a5c' }}
        >
          What Our Patients Say
        </h2>
        <p
          className={`text-center text-base md:text-lg font-semibold mb-12 ${inView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}
          style={{ color: '#1a3a5c' }}
        >
          Our Multiple Scans Have Made Quite An Impact
        </p>

        <div ref={ref} className="rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: photo with floating badges */}
          <div className={`relative md:w-1/2 shrink-0 ${inView ? 'anim-slide-left anim-delay-2' : 'anim-hidden'}`}>
            <img
              src={happyPatient}
              alt="Doctor and patient"
              className="w-full h-full object-cover"
              style={{ minHeight: '360px', maxHeight: '480px' }}
            />
            <div className="absolute top-[28%] left-[12%] bg-white rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-md whitespace-nowrap">
              Happy Patient
            </div>
            <div className="absolute top-[50%] right-[6%] bg-white rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-md whitespace-nowrap">
              Good Service
            </div>
            <div className="absolute bottom-[28%] left-[20%] bg-white rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-md whitespace-nowrap">
              Dedicated Team
            </div>
          </div>

          {/* Right: testimonial */}
          <div
            className={`md:w-100 flex flex-col items-center px-10 py-12 overflow-hidden ${inView ? 'anim-slide-right anim-delay-3' : 'anim-hidden'}`}
            style={{ background: '#cce8ed' }}
          >
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shrink-0">
                <img src={profileImg}></img>
              
            </div>

            <p
              className="w-full text-center text-sm md:text-base leading-relaxed mb-8 flex-1"
              style={{ color: '#2a4a5e' }}
            >
              {current.quote}
            </p>

            <p className="w-full text-center font-semibold text-lg mb-1" style={{ color: '#1a3a5c' }}>
              {current.name}
            </p>
            <p className="w-full text-center text-sm text-gray-500 mb-8">{current.role}</p>

            <div className="w-full flex justify-end">
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:bg-white/40"
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
