# AHMAD3DART — Portfolio Website

A world-class luxury architectural visualization portfolio built with Next.js 15.

## Stack
- **Next.js 15** (App Router + TypeScript)
- **Tailwind CSS** — Custom dark luxury design system
- **Framer Motion** — Scroll-reveal and UI animations
- **GSAP + ScrollTrigger** — Parallax and timeline animations
- **Lenis** — Buttery smooth scrolling
- **Next/Image** — Optimized image delivery
- **EmailJS** — Contact form (no backend needed)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Your Renders

Place your 15 render images in the following paths:

```
public/
  images/
    living-room/
      lr-01.jpg
      lr-02.jpg
      lr-03.jpg
    kitchen/
      k-01.jpg
      k-02.jpg
      k-03.jpg
    bathroom/
      b-01.jpg
      b-02.jpg
      b-03.jpg
    bedroom/
      bd-01.jpg
      bd-02.jpg
      bd-03.jpg
    commercial/
      c-01.jpg
      c-02.jpg
      c-03.jpg
```

## Setting Up EmailJS

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create an email service (Gmail works great)
3. Create a template with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{project_type}}`, `{{budget}}`, `{{message}}`
4. In `src/components/sections/ContactSection.tsx`, replace:
   - `YOUR_SERVICE_ID` → your EmailJS service ID
   - `YOUR_TEMPLATE_ID` → your EmailJS template ID
   - `YOUR_PUBLIC_KEY` → your EmailJS public key

## Deploying to Vercel

```bash
npm run build
```

Then push to GitHub and connect to Vercel. Zero configuration needed.

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Main page (imports all sections)
    globals.css      # Design system, custom classes
  components/
    layout/
      Navigation.tsx         # Sticky nav with mobile menu
      Footer.tsx             # Simple footer
      SmoothScrollProvider.tsx  # Lenis wrapper
    sections/
      HeroSection.tsx        # Fullscreen hero with parallax
      AboutSection.tsx       # Ahmad Tajik intro + expertise
      ProjectsSection.tsx    # All 5 category portfolios
      WorkflowSection.tsx    # 4-step process
      TestimonialsSection.tsx  # Interactive testimonials
      ContactSection.tsx     # EmailJS contact form
  lib/
    projects.ts     # All project data and content
    utils.ts        # Utilities + image path mapping
```

## Contact Details (pre-configured)

- **Email:** info@ahmad3dart.com
- **Instagram:** @ahmad.3dart
- **WhatsApp:** +90 534 912 55 74
- **Telegram:** @formafx
