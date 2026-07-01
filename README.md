# Law Advocate Website - Advocate Venkatesh

A modern, professional website for premium legal services built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive website optimized for all devices
- **Multiple Practice Areas**: Civil, Criminal, Family, Property, Consumer, Labour, Cyber Law, Documentation, and Legal Advisory
- **Contact Form**: Integrated EmailJS for direct client inquiries
- **FAQ Accordion**: Interactive FAQ section with smooth animations
- **Testimonials**: Carousel showcasing client testimonials
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **SEO Optimized**: Next.js built-in SEO features

## 📋 Pages

- **Home** (`/`) - Landing page with practice areas and testimonials
- **About** (`/about`) - Advocate information and background
- **Services** (`/services`) - Detailed service descriptions
- **Practice Areas** (`/practice-areas`) - Overview of legal specializations
- **Blog** (`/blog`) - Legal insights and articles
- **FAQs** (`/faqs`) - Frequently asked questions
- **Contact** (`/contact`) - Contact form and inquiry page
- **Book Consultation** (`/book-consultation`) - Appointment booking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/maddilasrinivas007-bot/law-bew-application.git
cd law-bew-application
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   - Add your EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     ```

### Running Locally

#### Development Mode
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:3000` in your browser.

#### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

#### Linting
```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
law-bew-application/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with navbar and footer
│   ├── globals.css              # Global styles
│   ├── page.tsx                 # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── practice-areas/
│   │   └── page.tsx            # Practice areas page
│   ├── blog/
│   │   └── page.tsx            # Blog page
│   ├── faqs/
│   │   └── page.tsx            # FAQs page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   └── book-consultation/
│       └── page.tsx            # Booking page
├── components/                  # Reusable React components
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer component
│   ├── TestimonialCarousel.tsx # Testimonials carousel
│   └── FAQAccordion.tsx        # FAQ accordion
├── public/                      # Static assets
│   └── front-image.avif        # Hero image
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── .env.local.example          # Environment variables template
```

## 🔧 Configuration

### Tailwind CSS
- Configured in `tailwind.config.js`
- Uses custom fonts: Playfair Display (serif) and Inter (sans-serif)

### Next.js
- Using Next.js 14.2.5 with App Router
- Image optimization enabled
- TypeScript support enabled

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Add them to `.env.local`

## 📦 Dependencies

### Core
- **next** (14.2.5) - React framework
- **react** (18.3.1) - UI library
- **react-dom** (18.3.1) - DOM rendering

### Features
- **@emailjs/browser** (3.11.0) - Email service integration
- **react-hook-form** (7.56.4) - Form management
- **framer-motion** (11.0.0) - Animations
- **react-icons** (4.11.0) - Icon library

### Styling
- **tailwindcss** (3.4.4) - Utility CSS framework
- **autoprefixer** (10.4.19) - CSS vendor prefixes
- **postcss** (8.4.36) - CSS processing

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy with one click

### Deploy to Other Platforms

**Netlify:**
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `.next`
- Add environment variables in dashboard

**Traditional Hosting:**
```bash
npm run build
npm start
```

## 🔒 Security

- API keys are stored in `.env.local` (not tracked in git)
- Never commit sensitive information
- `.gitignore` is properly configured
- Secrets removed from git history

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

To contribute:
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## 📧 Contact

**Advocate Venkatesh**
- Website: [law-bew-application.vercel.app](https://law-bew-application.vercel.app)
- Repository: [GitHub](https://github.com/maddilasrinivas007-bot/law-bew-application)

## 📄 License

This project is private. All rights reserved.

## ✅ Checklist for Production Deployment

- [ ] All environment variables configured
- [ ] EmailJS service properly set up
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate installed
- [ ] Analytics configured (Google Analytics, etc.)
- [ ] Backup strategy in place
- [ ] Contact form tested
- [ ] All pages tested on mobile
- [ ] SEO meta tags verified
- [ ] Performance optimized

---

**Last Updated:** July 2, 2026
