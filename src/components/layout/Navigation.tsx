"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Work",    href: "#projects"  },
  { label: "About",   href: "#about"     },
  { label: "Process", href: "#workflow"  },
  { label: "Contact", href: "#contact"   },
];

export default function Navigation() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]        = useState(false);
  const [hidden,         setHidden]          = useState(false);
  const [activeSection,  setActiveSection]   = useState("hero");
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 50);
    setHidden(y > lastScrollY.current && y > 350 && !menuOpen);
    lastScrollY.current = y;

    const sections = ["hero", "projects", "about", "workflow", "contact"];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && y >= el.offsetTop - 130) { setActiveSection(id); break; }
    }
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const go = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 380 : 0);
  };

  const sectionMap: Record<string, string> = {
    "#projects": "projects", "#about": "about",
    "#workflow": "workflow", "#contact": "contact",
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-500 ${scrolled ? "py-2.5" : "py-5"}`}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glassmorphism background */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-[#060606]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`} />

        <div className="container-wide relative flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/images/logo_transparent.png"
              alt="AHMAD3DART"
              width={36}
              height={29}
              className="object-contain w-[32px] md:w-[36px] drop-shadow-[0_1px_6px_rgba(184,147,90,0.3)] group-hover:drop-shadow-[0_1px_10px_rgba(184,147,90,0.5)] transition-all duration-400"
              priority
            />
            <span className="font-display font-light text-[15px] tracking-[0.18em] text-ivory/80 group-hover:text-ivory transition-colors duration-300 hidden sm:block">
              AHMAD<span className="text-gold">3D</span>ART
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const active = activeSection === sectionMap[link.href];
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.6 }}
                  onClick={() => go(link.href)}
                  className={`eyebrow relative group cursor-pointer transition-colors duration-300 ${
                    active ? "text-gold" : "text-ivory/40 hover:text-ivory/75"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-400 origin-left ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </motion.button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="hidden md:block"
          >
            <a
              href="https://wa.me/905349125574"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2 border border-gold/25 hover:border-gold/55 hover:bg-gold/8 transition-all duration-400"
            >
              <span className="eyebrow text-ivory/45 group-hover:text-ivory/75 transition-colors duration-300">
                Start a Project
              </span>
            </a>
          </motion.div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden relative w-8 h-8 flex flex-col justify-center gap-[5px]"
          >
            <span className={`block h-px bg-ivory transition-all duration-350 ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
            <span className={`block h-px bg-ivory transition-all duration-350 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-px bg-ivory transition-all duration-350 ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060606]/97 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* Logo in mobile menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mb-12"
            >
              <Image
                src="/images/logo_transparent.png"
                alt="AHMAD3DART"
                width={64}
                height={51}
                className="object-contain opacity-80"
              />
            </motion.div>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(link.href)}
                  className="font-display font-light text-4xl text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-14 text-center space-y-3"
            >
              <p className="eyebrow text-ivory/22">Based in Türkiye · Working Worldwide</p>
              <a
                href="https://wa.me/905349125574"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-gold hover:text-gold-light transition-colors block"
              >
                WhatsApp: +90 534 912 55 74
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
