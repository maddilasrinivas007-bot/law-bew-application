import Link from "next/link";

const practiceAreas = [
  {
    title: "Civil Law",
    description: "Detailed representation for property disputes, contracts and civil claims."
  },
  {
    title: "Criminal Law",
    description: "Robust defence and counsel for criminal proceedings at every stage."
  },
  {
    title: "Family Law",
    description: "Sensitive, strategic support for family disputes, custody and divorce matters."
  },
  {
    title: "Property Law",
    description: "Secure property rights and dispute resolution for residential and commercial holdings."
  },
  {
    title: "Consumer Law",
    description: "Protection for consumers and enforcement of rights against unfair business practices."
  },
  {
    title: "Labour Law",
    description: "Efficient compliance support and litigation for labour disputes and employment matters."
  },
  {
    title: "Cyber Law",
    description: "Expert advice on digital regulation, data protection and cyber security disputes."
  },
  {
    title: "Documentation",
    description: "Precise drafting, review and execution of legal documents and agreements."
  },
  {
    title: "Legal Advisory",
    description: "High-value advisory services for business strategy, compliance and dispute avoidance."
  }
];

export default function PracticeAreasPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Practice Areas</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Comprehensive legal services for every high-stakes matter.</h1>
          <p className="mt-6 max-w-3xl text-white/75 leading-8">A premium portfolio of practice areas driven by clear strategy, litigation strength and steadfast client advocacy.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div key={area.title} className="group rounded-[2rem] border border-white/10 bg-black/60 p-8 transition hover:border-gold/40 hover:bg-white/5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gold text-black transition group-hover:scale-105">✔</div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{area.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Elite guidance</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Focused practice area support with corporate finesse.</h2>
            </div>
            <Link href="/contact" className="inline-flex rounded-full border border-gold bg-black/80 px-6 py-4 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black">
              Speak with an Advocate
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
