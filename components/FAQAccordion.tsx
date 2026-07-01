"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I book a consultation with Advocate Venkatesh?",
    answer: "Use the Book Consultation page to select a date, time and case type, or call/WhatsApp directly for instant assistance."
  },
  {
    question: "What types of cases do you handle?",
    answer: "We handle civil, criminal, family, property, consumer, labour, cyber law, documentation and legal advisory cases with premium care."
  },
  {
    question: "Do you offer consultation for corporate and personal disputes?",
    answer: "Yes. We provide consultation for both corporate disputes and personal legal matters with strategic counsel."
  },
  {
    question: "Can I track court case progress through your team?",
    answer: "Absolutely. We provide regular updates, case progress monitoring, and proactive court representation services."
  }
];

export default function FAQAccordion({ limit = faqs.length }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.slice(0, limit).map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-soft transition hover:border-gold/40">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left text-base font-medium text-white"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="text-gold">{isOpen ? "-" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 overflow-hidden text-sm leading-7 text-white/75"
                >
                  {item.answer}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
