"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const projectTypes = [
  "Living Room", "Kitchen", "Bathroom", "Bedroom",
  "Commercial / Hotel", "Full Apartment", "Villa / Residence", "Other",
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/905349125574",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ahmad.3dart",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/formafx",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@ahmad3dart.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", projectType: "", message: "" };

export default function ContactSection() {
  const ref     = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-10%" });

  const [form,   setForm]   = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",
        { from_name: form.name, from_email: form.email, project_type: form.projectType, message: form.message, to_email: "info@ahmad3dart.com" },
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding border-t border-white/5 bg-obsidian">
      <div className="container-wide">

        {/* Header */}
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold"
          >
            Contact
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

          {/* ── Left ── */}
          <div>
            <div className="overflow-hidden mb-3">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display font-light text-display-lg text-ivory"
              >
                Let's Create
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display font-light italic text-display-lg text-gold-light"
              >
                Something Beautiful
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-body font-light text-ivory/40 text-base leading-relaxed mb-14 max-w-md"
            >
              Whether you're planning a residential renovation, designing a commercial
              interior, or looking for high-end architectural visualization, I'd love
              to hear about your project.
            </motion.p>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="eyebrow text-ivory/22 block mb-6">Connect</span>
              <div className="flex items-center gap-4">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 flex items-center justify-center border border-white/10 text-ivory/35 hover:text-gold hover:border-gold/40 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="eyebrow text-ivory/15 mt-12"
            >
              Based in Kastamonu, Türkiye — Working Worldwide
            </motion.p>
          </div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-14 h-14 border border-gold/30 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-light text-2xl text-ivory mb-3">Message Received</h3>
                <p className="font-body font-light text-sm text-ivory/38 max-w-sm leading-relaxed mb-8">
                  Thank you for reaching out. I'll review your project and respond within 24 hours.
                </p>
                <button onClick={() => setStatus("idle")} className="eyebrow text-gold/55 hover:text-gold transition-colors duration-300">
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="eyebrow text-ivory/22 block mb-3">Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="YOUR NAME" className="form-input" />
                  </div>
                  <div>
                    <label className="eyebrow text-ivory/22 block mb-3">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="YOUR@EMAIL.COM" className="form-input" />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label className="eyebrow text-ivory/22 block mb-3">Project Type *</label>
                  <select name="projectType" required value={form.projectType} onChange={handleChange}
                    className="form-input bg-transparent">
                    <option value="" disabled>SELECT TYPE</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="eyebrow text-ivory/22 block mb-3">Message *</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
                    placeholder="DESCRIBE YOUR PROJECT AND VISION..."
                    className="form-input resize-none" />
                </div>

                {status === "error" && (
                  <p className="eyebrow text-red-400/60">
                    Something went wrong. Email us directly: info@ahmad3dart.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full flex items-center justify-center gap-4 py-4 bg-gold hover:bg-gold-light transition-colors duration-400 disabled:opacity-40"
                >
                  <span className="eyebrow text-void tracking-[0.2em]">
                    {status === "sending" ? "Sending..." : "Send Inquiry"}
                  </span>
                  {status !== "sending" && (
                    <svg className="w-3.5 h-3.5 text-void group-hover:translate-x-0.5 transition-transform duration-300"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>

                <p className="eyebrow text-ivory/15 text-center">
                  Response within 24 hours · All enquiries confidential
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
