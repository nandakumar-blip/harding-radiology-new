import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const hours = [
  { day: 'Monday',    time: '8:30AM – 5:00PM' },
  { day: 'Tuesday',   time: '8:30AM – 5:00PM' },
  { day: 'Wednesday', time: '8:30AM – 6:00PM' },
  { day: 'Thursday',  time: '8:30AM – 5:00PM' },
  { day: 'Friday',    time: '8:30AM – 5:00PM' },
  { day: 'Saturday',  time: 'Closed' },
  { day: 'Sunday',    time: 'Closed' },
];

export const ContactUs = () => {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white pb-32 px-4 relative z-30">
      <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start md:min-h-96">

        {/* Left: Google Maps embed */}
        <div
          className={`w-full md:h-full md:w-[55%] rounded-xl overflow-hidden shadow-sm shrink-0 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}
          style={{ minHeight: '520px' }}
        >
          <iframe
            title="Harding Radiology Location"
            src="https://maps.google.com/maps?q=1201+Mt+Kemble+Ave,+Morristown,+NJ+07960&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '520px', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right: contact details */}
        <div className="flex flex-col gap-8 w-full">
          <h2 className={`text-4xl md:text-5xl font-bold ${inView ? 'anim-fade-up anim-delay-1' : 'anim-hidden'}`} style={{ color: '#1a3a5c' }}>
            Contact us
          </h2>

          {/* Address */}
          <div className={`flex gap-4 items-start ${inView ? 'anim-fade-up anim-delay-2' : 'anim-hidden'}`}>
            <MapPin className="mt-0.5 shrink-0" size={24} style={{ color: '#2a7a8c' }} />
            <div>
              <p className="font-bold text-base mb-1" style={{ color: '#1a3a5c' }}>Our Address</p>
              <p className="text-base" style={{ color: '#2a7a8c' }}>1201 Mount Kemble Avenue, Morristown, NJ 07960</p>
            </div>
          </div>

          {/* Phone */}
          <div className={`flex gap-4 items-start ${inView ? 'anim-fade-up anim-delay-3' : 'anim-hidden'}`}>
            <Phone className="mt-0.5 shrink-0" size={24} style={{ color: '#2a7a8c' }} />
            <div>
              <p className="font-bold text-base mb-1" style={{ color: '#1a3a5c' }}>Phone</p>
              <a href="tel:9082210603" className="text-base" style={{ color: '#2a7a8c' }}>908-221-0603</a>
            </div>
          </div>

          {/* Email */}
          <div className={`flex gap-4 items-start ${inView ? 'anim-fade-up anim-delay-4' : 'anim-hidden'}`}>
            <Mail className="mt-0.5 shrink-0" size={24} style={{ color: '#2a7a8c' }} />
            <div>
              <p className="font-bold text-base mb-1" style={{ color: '#1a3a5c' }}>Email</p>
              <a href="mailto:Scheduling@hardingradiology.com" className="text-base" style={{ color: '#2a7a8c' }}>
                Scheduling@hardingradiology.com
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className={`flex gap-4 items-start ${inView ? 'anim-fade-up anim-delay-5' : 'anim-hidden'}`}>
            <Clock className="mt-0.5 shrink-0" size={24} style={{ color: '#2a7a8c' }} />
            <div>
              <p className="font-bold text-base mb-2" style={{ color: '#1a3a5c' }}>Business Hours</p>
              <ul className="flex flex-col gap-1">
                {hours.map(({ day, time }) => (
                  <li key={day} className="text-sm" style={{ color: '#1a3a5c' }}>
                    • {day} {time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
