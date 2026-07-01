"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Mrs. Shalini R.",
    role: "Corporate Client",
    quote: "Advocate Venkatesh delivered precise legal counsel and outstanding results in a complex property matter. Highly recommended.",
    rating: 5
  },
  {
    name: "Mr. Rajesh K.",
    role: "Family Law Client",
    quote: "Professional, empathetic, and highly effective. The entire process was handled with trust and diligence. A true advocate.",
    rating: 5
  },
  {
    name: "Ms. Priya T.",
    role: "Civil Litigation",
    quote: "The advocacy was strong, clear, and always available. A premium legal partner for any serious case. Simply excellent.",
    rating: 5
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setIndex((current) => (current + 1) % testimonials.length);
  };

  const item = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <FiStar key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-lg leading-8 text-white/80">"{item.quote}"</p>
          <div className="space-y-1">
            <p className="text-xl font-semibold text-gold">{item.name}</p>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">{item.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center justify-start gap-2">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              type="button"
              onClick={() => {
                setAutoplay(false);
                setIndex(idx);
              }}
              whileHover={{ scale: 1.2 }}
              className={`h-2 rounded-full transition ${idx === index ? "bg-gold w-8" : "bg-white/20 w-2"}`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-gold hover:text-gold"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-gold hover:text-gold"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
