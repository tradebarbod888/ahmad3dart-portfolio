"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Ahmad's renders didn't just show our project — they told its story. The atmosphere he captured convinced our clients before we'd even broken ground. We've since worked with him on four developments.",
    author: "Mads Eriksen",
    role: "Principal Architect",
    company: "Eriksen & Partners, Copenhagen",
    country: "🇩🇰",
  },
  {
    id: 2,
    quote:
      "The quality is remarkable, but what sets Ahmad apart is his understanding of how light behaves in a space. He doesn't render rooms — he renders experiences. Our marketing materials have never performed better.",
    author: "Layla Al-Rashid",
    role: "Creative Director",
    company: "Atelier Rashid, Dubai",
    country: "🇦🇪",
  },
  {
    id: 3,
    quote:
      "Working across time zones has never been an issue. Ahmad is responsive, professional, and his revisions are always spot-on. After ten years of searching, we've finally found our visualization partner.",
    author: "Giovanni Ferrara",
    role: "Developer",
    company: "Ferrara Group, Milan",
    country: "🇮🇹",
  },
  {
    id: 4,
    quote:
      "Our hotel project in Riyadh required a specific visual language — opulent but restrained, modern but rooted in heritage. Ahmad understood this intuitively and delivered imagery that exceeded every brief.",
    author: "Noura Hassan",
    role: "Interior Design Director",
    company: "Divan Interiors, Riyadh",
    country: "🇸🇦",
  },
  {
    id: 5,
    quote:
      "Every pixel feels considered. The material studies, the lighting, the camera choices — it all reads as intentional work, not production-line rendering. AHMAD3DART is in a different league.",
    author: "Thomas Bauer",
    role: "Project Lead",
    company: "Bauer Architekten, Frankfurt",
    country: "🇩🇪",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section ref={ref} className="section-padding bg-void border-t border-white/5">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="eyebrow text-gold"
          >
            Testimonials
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Active testimonial */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-light text-display-md text-ivory"
              >
                What Clients
                <br />
                <span className="italic text-gold-light">Say</span>
              </motion.h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Quote mark */}
                <div className="font-display text-[6rem] leading-none text-gold/15 absolute -top-8 -left-4 select-none">
                  "
                </div>

                <blockquote className="font-display font-light text-xl md:text-2xl text-ivory/70 leading-relaxed mb-8 relative z-10">
                  {active.quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-2 border border-white/10 flex items-center justify-center text-lg">
                    {active.country}
                  </div>
                  <div>
                    <p className="font-body font-medium text-sm text-ivory/80">{active.author}</p>
                    <p className="font-body text-xs text-ivory/35">{active.role}</p>
                    <p className="eyebrow text-gold/50 mt-0.5">{active.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Testimonial list */}
          <div className="space-y-0 divide-y divide-white/6">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left py-6 px-4 transition-all duration-300 group ${
                  activeIndex === i
                    ? "bg-white/3"
                    : "hover:bg-white/2"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-body font-medium text-sm transition-colors duration-300 ${
                      activeIndex === i ? "text-gold-light" : "text-ivory/50 group-hover:text-ivory/70"
                    }`}
                  >
                    {t.author}
                  </span>
                  <span className="text-xs">{t.country}</span>
                </div>
                <p className="eyebrow text-ivory/25 mb-2">{t.company}</p>
                <p
                  className={`font-body font-light text-xs leading-relaxed line-clamp-2 transition-colors duration-300 ${
                    activeIndex === i ? "text-ivory/40" : "text-ivory/20"
                  }`}
                >
                  {t.quote}
                </p>

                {/* Active indicator */}
                {activeIndex === i && (
                  <motion.div
                    layoutId="testimonial-indicator"
                    className="mt-3 h-px w-8 bg-gold"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
