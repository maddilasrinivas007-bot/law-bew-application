import Link from "next/link";
import { FiPhone, FiMenu } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Book Consultation", href: "/book-consultation" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 text-sm text-white sm:px-8">
        <Link href="/" className="flex items-center gap-3 font-serif text-xl font-semibold tracking-tight text-white">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-gold bg-white/5 text-gold">V</span>
          Advocate Venkatesh
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-white transition hover:bg-white/10 hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="tel:+918555912093" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-gold hover:text-gold">
            <FiPhone className="h-4 w-4" /> Call Now
          </Link>
          <button className="lg:hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white">
            <FiMenu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
