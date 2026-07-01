"use client";

import Link from "next/link";
import { useState } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 text-sm text-white sm:px-8">
        <Link href="/" className="flex items-center gap-3 font-serif text-xl font-semibold tracking-tight text-white" onClick={closeMenu}>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-gold bg-white/5 text-gold font-bold">V</span>
          <span className="hidden sm:inline">Advocate Venkatesh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-white transition hover:bg-white/10 hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="tel:+918555912093" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-gold hover:text-gold">
            <FiPhone className="h-4 w-4" /> Call
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden rounded-full border border-white/10 bg-white/5 p-2 sm:p-3 text-white transition hover:border-gold hover:text-gold"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4 sm:px-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-white transition hover:bg-white/10 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="tel:+918555912093"
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-white transition hover:bg-white/10 hover:text-gold sm:hidden"
              >
                <FiPhone className="h-4 w-4" /> Call Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
