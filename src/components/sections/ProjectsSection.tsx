"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectCategories } from "@/lib/projects";

// ── Lightbox ──────────────────────────────────────────────
interface LightboxProps {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
}

function Lightbox({ images, index: initialIndex, title, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(initialIndex);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-[#060606]/97 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-6 md:p-16"
        onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={images[idx]}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center border border-white/15 hover:border-gold/50 text-ivory/50 hover:text-gold transition-all duration-300 z-10"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/15 hover:border-gold/50 text-ivory/50 hover:text-gold transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/15 hover:border-gold/50 text-ivory/50 hover:text-gold transition-all duration-300 z-10"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 eyebrow text-ivory/30">
            {idx + 1} / {images.length}
          </div>
        )}

        {/* Title */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
          <span className="font-display font-light italic text-ivory/60 text-sm">{title}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Project card ──────────────────────────────────────────
function ProjectCard({
  project, imgSrc, isLarge, delay,
}: {
  project: { id: string; title: string; description: string; detail: string; images: string[]; category: string; tags: string[] };
  imgSrc: string;
  isLarge: boolean;
  delay: number;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  // Collect all unique images for lightbox
  const allImgs = Array.from(new Set([imgSrc, ...project.images]));

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
        className={`relative overflow-hidden group cursor-pointer ${
          isLarge ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
        }`}
        onClick={() => setLightbox(0)}
      >
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
          sizes={isLarge ? "(max-width: 1600px) 100vw" : "(max-width: 768px) 100vw, 50vw"}
          quality={80}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/85 via-[#060606]/20 to-transparent transition-opacity duration-500" />

        {/* Hover tint */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.04] transition-colors duration-700" />

        {/* Shadow ring on hover */}
        <div className="absolute inset-0 shadow-[inset_0_0_0_0px_rgba(184,147,90,0)] group-hover:shadow-[inset_0_0_0_1px_rgba(184,147,90,0.2)] transition-all duration-700" />

        {/* Info */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          {isLarge && (
            <span className="eyebrow text-gold/55 block mb-2">Featured Project</span>
          )}
          <h3 className={`font-display font-light text-ivory leading-snug ${isLarge ? "text-display-sm" : "text-xl"}`}>
            {project.title}
          </h3>
          {isLarge && (
            <p className="font-body font-light text-sm text-ivory/38 max-w-md leading-relaxed mt-2 hidden md:block">
              {project.description}
            </p>
          )}
          <p className="font-mono text-[10px] text-ivory/22 mt-1.5">{project.detail}</p>
        </div>

        {/* Expand icon */}
        <div className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center border border-white/0 group-hover:border-white/20 bg-[#060606]/0 group-hover:bg-[#060606]/50 transition-all duration-400 opacity-0 group-hover:opacity-100">
          <svg className="w-3.5 h-3.5 text-ivory/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>

        {/* Tags — large card only */}
        {isLarge && (
          <div className="absolute bottom-0 right-0 p-6 md:p-8 flex flex-wrap gap-2 justify-end hidden md:flex">
            {project.tags.map(tag => (
              <span key={tag} className="eyebrow text-ivory/20 border border-white/10 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            images={allImgs}
            index={lightbox}
            title={project.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ── Category section ──────────────────────────────────────
function CategorySection({ category }: { category: typeof projectCategories[0] }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="section-padding border-t border-white/5">
      {/* Header */}
      <div className="container-wide mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow text-gold block mb-4"
            >
              {category.eyebrow}
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display font-light text-display-lg text-ivory"
              >
                {category.label}
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display italic text-xl text-ivory/25 max-w-xs text-right hidden md:block"
          >
            {category.tagline}
          </motion.p>
        </div>
      </div>

      {/* Featured */}
      <div className="container-wide mb-6">
        <ProjectCard
          project={category.projects[0]}
          imgSrc={category.projects[0].images[0]}
          isLarge={true}
          delay={0.15}
        />
      </div>

      {/* Grid */}
      {category.projects.length > 1 && (
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.projects.slice(1).map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              imgSrc={project.images[0]}
              isLarge={false}
              delay={0.25 + i * 0.1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────
export default function ProjectsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="bg-void">
      {/* Section header */}
      <div ref={headerRef} className="section-padding-sm border-t border-white/5">
        <div className="container-wide">
          <div className="flex items-center gap-6 mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              className="eyebrow text-gold"
            >
              Selected Work
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9 }}
              className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display font-light text-display-xl text-ivory"
              >
                Portfolio
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body font-light text-ivory/38 text-base leading-relaxed"
            >
              Every project is an exercise in restraint, atmosphere, and the
              relentless pursuit of photographic truth. Five disciplines.
              One uncompromising standard.
            </motion.p>
          </div>
        </div>
      </div>

      {projectCategories.map(category => (
        <CategorySection key={category.id} category={category} />
      ))}
    </section>
  );
}
