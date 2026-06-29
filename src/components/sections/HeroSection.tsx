"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroSlides = [
  { src: "/images/living-room/salon05.jpg",  category: "Living Room", project: "Ledakent Residence",         location: "Kastamonu, Turkey" },
  { src: "/images/bathroom/Banyo_02.jpg",    category: "Bathroom",    project: "Ankara White Marble Suite",  location: "Ankara, Turkey"    },
  { src: "/images/living-room/salon02.jpg",  category: "Living Room", project: "Ledakent Duplex",            location: "Kastamonu, Turkey" },
  { src: "/images/bedroom/bedroom-02.jpg",   category: "Bedroom",     project: "Izmir Master Suite",         location: "Izmir, Turkey"     },
  { src: "/images/kitchen/kitchen-01.jpg",   category: "Kitchen",     project: "Cologne Kitchen",            location: "Cologne, Germany"  },
  { src: "/images/commercial/commercial-01.jpg", category: "Commercial", project: "ARD Office — Reception", location: "Kastamonu, Turkey" },
  { src: "/images/bathroom/bathroom01.jpg",  category: "Bathroom",    project: "Ankara Warm Stone",          location: "Ankara, Turkey"    },
  { src: "/images/living-room/salon04.jpg",  category: "Living Room", project: "Ledakent Salon",             location: "Kastamonu, Turkey" },
];

const SLIDE_DURATION = 6000;

// Ken Burns presets – different zoom+pan for each slide
const kenBurns = [
  { from: "scale(1.08) translate(1%, 1%)",  to: "scale(1.0) translate(0%, 0%)"   },
  { from: "scale(1.06) translate(-1%, 0%)", to: "scale(1.0) translate(0.5%, 0.5%)" },
  { from: "scale(1.07) translate(0%, -1%)", to: "scale(1.0) translate(-0.5%, 0%)" },
  { from: "scale(1.09) translate(1%, -1%)", to: "scale(1.0) translate(0%, 0.5%)" },
  { from: "scale(1.06) translate(-0.5%, 1%)", to: "scale(1.0) translate(0%, 0%)" },
  { from: "scale(1.08) translate(0%, 1%)",  to: "scale(1.0) translate(0.5%, -0.5%)" },
  { from: "scale(1.07) translate(1%, 0%)",  to: "scale(1.0) translate(-0.5%, 0%)" },
  { from: "scale(1.06) translate(0%, -0.5%)", to: "scale(1.0) translate(0%, 0%)" },
];

export default function HeroSection() {
  const [current, setCurrent]   = useState(0);
  const [isReady, setIsReady]   = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = heroSlides.length;

  const advance = useCallback(() => {
    setCurrent(c => (c + 1) % total);
  }, [total]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, SLIDE_DURATION);
  }, [advance]);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 100);
    startTimer();
    return () => {
      clearTimeout(t);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  const handleDot = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  const slide = heroSlides[current];
  const kb    = kenBurns[current % kenBurns.length];

  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-end overflow-hidden">

      {/* ── Slides ── */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          {/* Ken Burns wrapper */}
          <motion.div
            className="absolute inset-0"
            initial={{ transform: kb.from }}
            animate={{ transform: kb.to }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.4, ease: "linear" }}
          >
            <Image
              src={slide.src}
              alt={slide.project}
              fill
              priority={current === 0}
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/55 to-[#060606]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/70 via-[#060606]/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* ── Main copy ── */}
      <div className="container-wide relative z-20 pb-20 md:pb-28">
        <div className="max-w-3xl">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-10"
          >
            <Image
              src="/images/logo_transparent.png"
              alt="AHMAD3DART"
              width={120}
              height={96}
              className="object-contain w-[80px] md:w-[110px] drop-shadow-[0_2px_12px_rgba(184,147,90,0.25)]"
              priority
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="eyebrow text-gold">Interior Visualization Studio</span>
            <span className="h-px w-10 bg-gold/40" />
            <span className="eyebrow text-ivory/30">Türkiye · Worldwide</span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "105%" }}
              animate={isReady ? { y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-display-2xl text-ivory leading-none"
            >
              Photorealistic
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-9">
            <motion.h1
              initial={{ y: "105%" }}
              animate={isReady ? { y: 0 } : {}}
              transition={{ delay: 0.75, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light italic text-display-2xl text-gold-light leading-none"
            >
              Interior Visualization
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="font-body font-light text-ivory/45 text-base md:text-lg tracking-wide mb-10 max-w-sm"
          >
            Transforming Concepts into Extraordinary Spaces
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Primary CTA */}
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-gold hover:bg-gold-light transition-colors duration-400 overflow-hidden"
            >
              <span className="eyebrow text-void tracking-[0.18em]">Start Your Project</span>
              <svg className="w-3.5 h-3.5 text-void group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 hover:border-ivory/50 transition-all duration-400"
            >
              <span className="eyebrow text-ivory/55 group-hover:text-ivory/85 transition-colors duration-300 tracking-[0.18em]">View Projects</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Slide info — bottom right ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute bottom-10 right-8 md:right-16 z-20 text-right hidden md:block"
        >
          <span className="eyebrow text-gold/55 block mb-1">{slide.category}</span>
          <span className="font-display font-light italic text-ivory/75 text-sm block leading-snug">{slide.project}</span>
          <span className="eyebrow text-ivory/22 text-[10px]">{slide.location}</span>
        </motion.div>
      </AnimatePresence>

      {/* ── Dot nav ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === current ? "w-7 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-ivory/25 hover:bg-ivory/50"
            }`}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/6 z-20">
        <motion.div
          key={current}
          className="h-full bg-gold/60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
        />
      </div>

      {/* ── Stats strip — bottom right corner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-0 right-0 z-20 hidden lg:flex"
      >
        <div className="flex items-stretch border-l border-t border-white/8 bg-[#060606]/70 backdrop-blur-md">
          {[{ value: "200+", label: "Projects" }, { value: "40+", label: "Clients" }, { value: "8+", label: "Years" }].map((s, i) => (
            <div key={s.label} className={`px-7 py-4 text-center ${i < 2 ? "border-r border-white/8" : ""}`}>
              <div className="font-display font-light italic text-2xl text-gold mb-0.5">{s.value}</div>
              <div className="eyebrow text-ivory/30">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : {}}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-10 left-8 md:left-16 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-ivory/22 [writing-mode:vertical-rl] tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-white/10 relative overflow-hidden">
          <motion.div
            className="w-full bg-gold absolute top-0"
            style={{ height: "45%" }}
            animate={{ top: ["0%", "120%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
          />
        </div>
      </motion.div>

    </section>
  );
}
