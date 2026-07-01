import Link from "next/link";

const services = [
  "Legal Consultation",
  "Court Representation",
  "Drafting & Agreements",
  "Legal Notices",
  "Documentation",
  "Consumer Protection",
  "Motor Accident Claims",
  "Settlement & Mediation",
  "Cyber Law Assistance"
];

export default function ServicesPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Premium legal services designed for discerning clients.</h1>
          <p className="mt-6 max-w-3xl text-white/75 leading-8">From advisory support to court representation, every service is delivered with a luxury experience and relentless focus on results.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-[2rem] border border-white/10 bg-black/60 p-8 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold text-black text-xl font-bold">★</div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{service}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">Premium support with a focus on precision, strategy, and measurable outcomes for your legal matter.</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Your legal partner</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A refined service experience for complex legal needs.</h2>
              <p className="mt-4 text-white/75 leading-8">A complete suite of services crafted to deliver safe, authoritative counsel and courtroom-ready preparation.</p>
            </div>
            <Link href="/book-consultation" className="inline-flex max-w-xs items-center justify-center rounded-full border border-gold bg-black/80 px-6 py-4 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black">
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
