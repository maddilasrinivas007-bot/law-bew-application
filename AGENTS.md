# AI Agent Guidance

## Purpose
This repository is a Next.js 14 website for a law practice built with the App Router, TypeScript, Tailwind CSS, React, and EmailJS.

## Important commands
- `npm install` — install dependencies
- `npm run dev` — run the development server
- `npm run build` — build the app for production
- `npm start` — start the production server after build
- `npm run lint` — run Next.js lint checks

## Key architecture
- `app/` — Next.js App Router pages and layout
  - `app/layout.tsx` — root layout and shared UI
  - `app/page.tsx` — home page
  - route folders such as `about/`, `services/`, `practice-areas/`, `blog/`, `faqs/`, `contact/`, `book-consultation/`
- `components/` — reusable UI components
  - `Navbar.tsx`, `Footer.tsx`, `TestimonialCarousel.tsx`, `FAQAccordion.tsx`
- `public/` — static assets such as `front-image.avif`, `hero-image.avif`
- `globals.css` — global Tailwind and site styling

## Environment variables
- Copy `.env.local.example` to `.env.local`
- Required keys:
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- Do not commit `.env.local` to git

## Useful repo notes
- This project uses the Next.js App Router (`app/`) rather than the pages router.
- The contact form uses EmailJS via `@emailjs/browser`.
- `books photos_files/` is not part of the core source code and appears to be build/static artifacts.
- Prefer editing UI and page content in `app/` and reusable page pieces in `components/`.

## References
- README: [README.md](README.md)
- Setup guide: [SETUP.md](SETUP.md)
