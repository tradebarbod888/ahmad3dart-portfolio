"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Concept",
    subtitle: "Understanding Your Vision",
    description:
      "Every project begins with deep listening. We study your brief, reference materials, and architectural drawings to fully grasp the spatial and emotional intent before a single model is built.",
    duration: "1–2 days",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Setting the Stage",
    description:
      "Camera angles, lighting scenarios, material palettes, and compositional strategies are established in close collaboration with you. Early drafts and mood boards ensure full alignment.",
    duration: "2–4 days",
  },
  {
    number: "03",
    title: "Visualization",
    subtitle: "Rendering the Possible",
    description:
      "Production-level modeling, lighting, and rendering using industry-leading tools. Multiple revision rounds are included, with daily progress updates on larger projects.",
    duration: "3–7 days",
  },
  {
    number: "04",
    title: "Final Delivery",
    subtitle: "Print-Ready Imagery",
    description:
      "High-resolution final images delivered in all required formats, optimized for print, web, and presentation. Full licensing included with every deliverable.",
    duration: "1 day",
  },
];

export default function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="workflow" ref={ref} className="section-padding bg-obsidian border-t border-white/5">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="eyebrow text-gold"
          >
            Process
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-display-lg text-ivory leading-tight"
            >
              How We
              <br />
              <span className="italic text-gold-light">Work Together</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body font-light text-ivory/40 text-base leading-relaxed self-end"
          >
            A transparent, collaborative process from first conversation to
            final delivery. No surprises — only results that exceed expectation.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-white/6 hidden lg:block" />

          <div className="space-y-0 divide-y divide-white/5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 py-10 items-start"
              >
                {/* Number */}
                <div className="flex items-center gap-4 lg:w-28">
                  <div className="relative w-7 h-7 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-gold/60 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                  </div>
                  <span className="font-mono text-xs text-gold/50 group-hover:text-gold transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-light text-display-sm text-ivory mb-1 group-hover:text-gold-light transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="eyebrow text-ivory/30 mb-4">{step.subtitle}</p>
                  <p className="font-body font-light text-sm text-ivory/40 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="lg:text-right">
                  <span className="eyebrow text-ivory/20">Timeline</span>
                  <p className="font-display italic text-gold-light text-lg mt-1">{step.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="font-display italic text-2xl text-ivory/60 mb-2">
              Ready to begin your project?
            </p>
            <p className="eyebrow text-ivory/25">
              Average project completion: 7–14 days
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-4 px-8 py-4 border border-gold/40 hover:border-gold text-ivory transition-all duration-300"
          >
            <span className="eyebrow">Start a Conversation</span>
            <svg
              className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
