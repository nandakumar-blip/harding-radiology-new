// ContactUs: Final section providing the clinic's address, phone, email, and
// operating hours alongside an embedded Google Maps iframe. Contact cards animate
// in with staggered delays; the map slides in from the left simultaneously.

import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

// hours drives the business-hours table inside the Clock card.
// Wednesday's extended closing time (6:00PM) is the only outlier and is
// intentionally called out in the RadiologyCenter section copy as a patient benefit.
const hours = [
  { day: 'Monday',    time: '8:30AM – 5:00PM' },
  { day: 'Tuesday',   time: '8:30AM – 5:00PM' },
  { day: 'Wednesday', time: '8:30AM – 6:00PM' },
  { day: 'Thursday',  time: '8:30AM – 5:00PM' },
  { day: 'Friday',    time: '8:30AM – 5:00PM' },
  { day: 'Saturday',  time: 'Closed' },
  { day: 'Sunday',    time: 'Closed' },
];

// cards is a unified config for all contact info blocks. Shape of each entry:
//   icon    — Lucide icon component rendered as the card's badge icon
//   label   — category heading displayed above the card's content
//   content — (optional) single string value for address/phone/email cards
//   href    — (optional) link target; absent on the hours card which renders a list instead
//   hours   — (optional) array of { day, time } objects; presence signals a table layout
//   delay   — Tailwind animation-delay class for staggered entry (anim-delay-2 through -5)
//
// The card renderer branches on cardHours: if present, it renders the hours list;
// otherwise it renders a plain anchor using content + href.
const cards = [
  {
    icon: MapPin,
    label: 'Our Address',
    content: '1201 Mount Kemble Avenue, Morristown, NJ 07960',
    href: 'https://maps.google.com/?q=1201+Mt+Kemble+Ave,+Morristown,+NJ+07960',
    delay: 'anim-delay-2',
  },
  {
    icon: Phone,
    label: 'Phone',
    content: '908-221-0603',
    href: 'tel:9082210603',
    delay: 'anim-delay-3',
  },
  {
    icon: Mail,
    label: 'Email',
    content: 'Scheduling@hardingradiology.com',
    href: 'mailto:Scheduling@hardingradiology.com',
    delay: 'anim-delay-4',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    // hours is passed directly into the card config so the table renderer
    // can destructure it without needing the hours array to be in module scope.
    hours,
    delay: 'anim-delay-5',
  },
];

export const ContactUs = () => {
  const { ref, inView } = useInView();

  return (
    <section className="relative z-50 py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 overflow-hidden bg-white">

      <div ref={ref} className="w-full">

        {/* Section header — anim-delay-1 gives it a head start before the cards appear,
            so the heading settles in by the time the first card begins animating. */}
        <div className={`text-center mb-14 ${inView ? 'anim-fade-up anim-delay-1' : 'anim-hidden'}`}>
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#2a7a8c' }}>
            Reach Out
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a3a5c' }}>
            Get In Touch
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: '#6b7280' }}>
            We're here to help. Visit us, call, or send an email — we'll get back to you promptly.
          </p>
        </div>

        {/* Main layout: map (45%) left, contact cards (45%) right.
            The gap-8 column spacing matches the service section layout for visual consistency
            across sections; items-stretch makes the map fill the height of the card column. */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Google Maps iframe — width/height 100% fills the container; minHeight on both
              the wrapper and the iframe prevents the map from collapsing on mobile where
              the parent has no intrinsic height before the iframe loads.
              loading="lazy" defers the iframe network request until the section is near
              the viewport, improving Time to Interactive for users who don't scroll this far. */}
          <div
            className={`w-full lg:w-[45%] rounded-2xl overflow-hidden shrink-0 ${inView ? 'anim-slide-left' : 'anim-hidden'}`}
            style={{
              minHeight: '420px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            <iframe
              title="Harding Radiology Location"
              src="https://maps.google.com/maps?q=1201+Mt+Kemble+Ave,+Morristown,+NJ+07960&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact cards column — flex-col so cards stack vertically.
              Each card's delay is read from the cards config, giving a waterfall reveal
              from top (address) down to the CTA button. */}
          <div className="flex flex-col gap-5 w-full lg:w-[45%]">
            {cards.map(({ icon: Icon, label, content, href, hours: cardHours, delay }) => (
              <div
                key={label}
                className={`flex gap-4 items-start rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 ${inView ? `anim-fade-up ${delay}` : 'anim-hidden'}`}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {/* Icon badge — rgba(42,122,140,0.12) background and 0.25 border-alpha
                    create a soft tinted circle without needing a separate CSS class. */}
                <div
                  className="shrink-0 flex items-center justify-center rounded-full w-11 h-11 mt-0.5"
                  style={{ background: 'rgba(42,122,140,0.12)', border: '1px solid rgba(42,122,140,0.25)' }}
                >
                  <Icon size={20} style={{ color: '#4ecdc4' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm mb-1.5" style={{ color: '#9ca3af' }}>{label}</p>

                  {/* Conditional rendering: the hours card needs a table-style list
                      while the other three cards just need a clickable anchor.
                      'Closed' days are rendered in muted grey to instantly communicate
                      unavailability without the user needing to read the text. */}
                  {cardHours ? (
                    <ul className="flex flex-col gap-0.5">
                      {cardHours.map(({ day, time }) => (
                        <li key={day} className="flex justify-between text-sm" style={{ color: time === 'Closed' ? '#9ca3af' : '#1a3a5c' }}>
                          <span>{day}</span>
                          <span className="ml-4 font-medium">{time}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    // target="_blank" and rel="noopener noreferrer" are applied only to the
                    // address anchor (external Maps URL) to prevent tab-napping; phone and
                    // email use their own protocol handlers and don't open new tabs.
                    <a
                      href={href}
                      className="text-sm font-medium break-all leading-snug hover:underline"
                      style={{ color: '#2a7a8c' }}
                      target={label === 'Our Address' ? '_blank' : undefined}
                      rel={label === 'Our Address' ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Get Directions CTA — linear-gradient from teal-dark to teal-light echoes the
                brand gradient used on other primary CTAs, making it visually consistent
                without requiring a shared button component. */}
            <div className={`mt-2 ${inView ? 'anim-fade-up anim-delay-5' : 'anim-hidden'}`}>
              <a
                href="https://maps.google.com/?q=1201+Mt+Kemble+Ave,+Morristown,+NJ+07960"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2a7a8c, #4ecdc4)', color: '#fff' }}
              >
                <ExternalLink size={16} />
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
