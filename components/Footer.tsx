import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

const serviceLinks = [
  "Legal Consultation",
  "Court Representation",
  "Drafting & Agreements",
  "Legal Notices",
  "Documentation"
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 text-sm text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="font-serif text-2xl font-bold text-gold">Advocate Venkatesh</p>
            <p className="max-w-sm text-white/70">Premium legal services across civil, criminal, family, property, consumer, labour and cyber law with integrity, trust, and corporate excellence.</p>
            <div className="flex items-center gap-3 text-white/70">
              <FiMapPin />
              <span>No 22-11-100/2/2, Cottonmill, Gollavanigunta, Tirupati, Andhra Pradesh</span>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.3em] text-white/70">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block transition hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.3em] text-white/70">Premium Services</h3>
            <div className="space-y-3">
              {serviceLinks.map((service) => (
                <p key={service} className="transition hover:text-gold">{service}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.3em] text-white/70">Contact</h3>
            <div className="space-y-4 text-white/75">
              <p className="flex items-center gap-3"><FiPhone /> +91 85559 12093</p>
              <p className="flex items-center gap-3"><FiMail /> venkatesh9.adv@gmail.com</p>
              <p className="flex items-center gap-3">WhatsApp: +91 91600 93811</p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-white/80">
              <Link href="#" className="rounded-full border border-white/10 p-3 transition hover:border-gold hover:text-gold"><FiInstagram /></Link>
              <Link href="#" className="rounded-full border border-white/10 p-3 transition hover:border-gold hover:text-gold"><FiLinkedin /></Link>
              <Link href="#" className="rounded-full border border-white/10 p-3 transition hover:border-gold hover:text-gold"><FiFacebook /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#090909] px-6 py-6 text-center text-xs text-white/50 sm:px-8">
        Crafted for a premium advocate brand with strategic law firm styling and fast Next.js performance.
      </div>
    </footer>
  );
}
