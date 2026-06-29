"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SelectedWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-padding-sm border-t border-white/5 bg-void">
      <div className="container-narrow text-center">

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="eyebrow text-gold block mb-8"
        >
          Selected Works
        </motion.span>

        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-light text-display-lg text-ivory"
          >
            Crafted with Intention
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-body font-light text-ivory/38 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-14"
        >
          Every project is designed to balance elegance, functionality,
          and timeless aesthetics.
        </motion.p>

        {/* Animated gold divider */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="h-px w-32 origin-center"
            style={{
              background: "linear-gradient(90deg, transparent, #B8935A, transparent)",
            }}
          />
        </div>

      </div>
    </section>
  );
}
