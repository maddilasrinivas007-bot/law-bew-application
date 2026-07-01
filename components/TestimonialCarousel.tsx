"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mrs. Shalini R.",
    role: "Corporate Client",
    quote: "Advocate Venkatesh delivered precise legal counsel and outstanding results in a complex property matter.",
  },
  {
    name: "Mr. Rajesh K.",
    role: "Family Law Client",
    quote: "Professional, empathetic, and highly effective. The entire process was handled with trust and diligence.",
  },
  {
    name: "Ms. Priya T.",
    role: "Civil Litigation",
    quote: "The advocacy was strong, clear, and always available. A premium legal partner for any serious case.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="text-lg leading-8 text-white/80">“{item.quote}”</p>
        <div className="space-y-1">
          <p className="text-xl font-semibold text-gold">{item.name}</p>
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">{item.role}</p>
        </div>
      </motion.div>
      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setIndex(idx)}
            className={`h-2 w-8 rounded-full ${idx === index ? "bg-gold" : "bg-white/20"}`}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
