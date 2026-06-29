"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Designing functional and timeless residential and commercial interiors. Every space tailored to the client's lifestyle, aesthetics, and vision.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "3D Visualization",
    description:
      "Photorealistic architectural renders for presentations and marketing. Experience your space before construction begins.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Space Planning",
    description:
      "Optimizing layouts for comfort, functionality and aesthetics. Thoughtful spatial solutions that elevate every square metre.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Furniture & Material Selection",
    description:
      "Carefully selected furniture, finishes, materials and lighting solutions. Every element considered for harmony and longevity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" ref={ref} className="section-padding border-t border-white/5 bg-void">
      <div className="container-wide">

        {/* Header */}
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold"
          >
            Services
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group bg-void p-8 md:p-10 hover:bg-[#0d0d0d] transition-colors duration-500"
            >
              {/* Icon */}
              <div className="text-gold/50 group-hover:text-gold transition-colors duration-400 mb-8">
                {service.icon}
              </div>

              {/* Number */}
              <span className="eyebrow text-ivory/15 block mb-4">{service.number}</span>

              {/* Title */}
              <h3 className="font-display font-light text-2xl text-ivory mb-4 leading-snug group-hover:text-ivory transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body font-light text-sm text-ivory/35 leading-relaxed group-hover:text-ivory/50 transition-colors duration-400">
                {service.description}
              </p>

              {/* Gold accent line */}
              <div className="mt-8 h-px w-0 group-hover:w-8 bg-gold transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4 px-10 py-4 bg-gold hover:bg-gold-light transition-colors duration-400"
          >
            <span className="eyebrow text-void tracking-[0.2em]">Start Your Project</span>
            <svg
              className="w-3.5 h-3.5 text-void group-hover:translate-x-0.5 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
