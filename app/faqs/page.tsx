import FAQAccordion from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Frequently Asked Questions</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Clear answers for key legal questions.</h1>
          <p className="mt-6 text-white/70 leading-8">Explore a premium FAQ section designed to guide clients through the booking, consultation, and litigation process.</p>
        </div>
        <FAQAccordion />
      </div>
    </main>
  );
}
