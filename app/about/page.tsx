import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">About Advocate Venkatesh</p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">A legacy of trusted legal counsel and advocacy excellence.</h1>
              <p className="text-lg leading-8 text-white/75">As a premium advocate, Venkatesh combines strategic litigation, calm courtroom presence, and highly personal legal guidance across the region. The practice specializes in complex legal matters while maintaining discretion and corporate-class service.</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <p className="text-3xl font-semibold text-gold">18+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">Years Practice</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <p className="text-3xl font-semibold text-gold">520+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">Cases Won</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <p className="text-3xl font-semibold text-gold">9.8/10</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">Client Rating</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
              <Image src="/court-photos.webp" alt="Courtroom consultation" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Philosophy</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Selective, strategic and results-driven.</h2>
            <p className="mt-4 text-white/75 leading-7">Each case is managed with the highest level of attention, combining legal expertise with a deep understanding of client priorities and courtroom strategy.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Approach</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Client-first approach with discreet support.</h2>
            <p className="mt-4 text-white/75 leading-7">We ensure swift communication, reasoned advice, and dependable representation from first consultation through final resolution.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Values</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Integrity, excellence, trust.</h2>
            <p className="mt-4 text-white/75 leading-7">Trusted by families and businesses alike, this practice delivers premium legal advice with absolute ethical standards.</p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Legal Resources</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Research and intelligent legal direction informed by leading sources.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Supreme Court Guidance", description: "Referencing the court’s latest national judgments and precedent-setting rulings.", url: "https://www.sci.gov.in?utm_source=chatgpt.com" },
              { title: "Statutory Framework", description: "A structured approach guided by India Code’s legal provisions and statutes.", url: "https://www.indiacode.nic.in?utm_source=chatgpt.com" },
              { title: "Case Tracking", description: "Live court status checks and progress updates through NJDG resources.", url: "https://njdg.ecourts.gov.in?utm_source=chatgpt.com" },
              { title: "Legal Reference", description: "Premium legal research and case context review via Open Library legal archives.", url: "https://openlibrary.org?utm_source=chatgpt.com" }
            ].map((item) => (
              <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-black/60 p-6 transition hover:border-gold/40 hover:bg-white/5">
                <p className="text-lg font-semibold text-white group-hover:text-gold">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-black/60 p-10 text-white shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Need immediate legal guidance?</p>
            <h2 className="mt-3 text-3xl font-semibold">Schedule a confidential consultation today.</h2>
          </div>
          <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:brightness-95">
            Book Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
