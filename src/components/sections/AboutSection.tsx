"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const infoCards = [
  { icon: "📍", text: "Based in Kastamonu, Türkiye" },
  { icon: "🌍", text: "Available Worldwide" },
  { icon: "🏡", text: "Residential & Commercial Interior Design" },
  { icon: "🎨", text: "Photorealistic Architectural Visualization" },
];

const software = [
  "3ds Max", "Corona Renderer", "V-Ray",
  "Autodesk Revit", "Lumion",
  "Adobe Photoshop", "AutoCAD",
];

export default function AboutSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="about" ref={ref} className="section-padding border-t border-white/5 bg-void">
      <div className="container-wide">

        {/* Section label */}
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold"
          >
            About
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Ahmad Tajik — Interior Designer"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              {/* Subtle dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/20 to-transparent" />
            </div>

            {/* Gold accent line */}
            <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
          </motion.div>

          {/* ── Right: Content ── */}
          <div>

            <div className="overflow-hidden mb-3">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-display font-light text-display-lg text-ivory"
              >
                About Ahmad
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.35 }}
              className="space-y-5 mb-12"
            >
              <p className="font-body font-light text-ivory/50 text-base leading-relaxed">
                I am Ahmad Tajik, an Interior Designer and 3D Visualization Artist
                specializing in residential and commercial interior design.
              </p>
              <p className="font-body font-light text-ivory/40 text-base leading-relaxed">
                My focus is creating elegant, functional spaces combined with
                photorealistic architectural visualization. I help clients experience
                their projects before construction begins by producing high-quality
                visual presentations that communicate every design detail with clarity.
              </p>
              <p className="font-body font-light text-ivory/35 text-base leading-relaxed">
                Every project is developed with attention to aesthetics, functionality,
                detail, and timeless design principles.
              </p>
            </motion.div>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
            >
              {infoCards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-white/6 hover:border-gold/20 transition-colors duration-400 group"
                >
                  <span className="text-base leading-none mt-0.5 opacity-70">{card.icon}</span>
                  <span className="font-body font-light text-sm text-ivory/45 group-hover:text-ivory/65 transition-colors duration-300 leading-snug">
                    {card.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <span className="eyebrow text-ivory/25 block mb-4">Software</span>
              <div className="flex flex-wrap gap-2">
                {software.map(sw => (
                  <span
                    key={sw}
                    className="eyebrow text-ivory/35 border border-white/8 px-3 py-1.5 hover:border-gold/30 hover:text-ivory/55 transition-all duration-300"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
