import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";

const practiceAreas = [
  "Civil Law",
  "Criminal Law",
  "Family Law",
  "Property Law",
  "Consumer Law",
  "Labour Law",
  "Cyber Law",
  "Documentation",
  "Legal Advisory"
];

const reasons = [
  {
    title: "Proven Success",
    description: "A strong track record in high-value cases, corporate disputes, and family law settlements."
  },
  {
    title: "Award-Winning Counsel",
    description: "Trusted by businesses and individuals for premium legal solutions with integrity."
  },
  {
    title: "Strategic Representation",
    description: "Tailored legal strategy that balances risk, reputation, and results."
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.45),_rgba(17,17,17,0.82))]" />
          <div className="absolute inset-0">
            <Image src="/front-image.avif" alt="Elegant law background" fill className="object-cover" />
          </div>
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_auto] lg:items-center lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/5 px-4 py-2 text-sm text-gold">
              Premium legal counsel for individuals and corporations
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">Trusted Legal Solutions with Integrity and Excellence.</h1>
              <p className="max-w-xl text-lg leading-8 text-white/75">Advocate Venkatesh delivers strategic representation across civil, criminal, family, property, consumer, labour, and cyber law, backed by a premium experience designed for royalty.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="tel:+918555912093" className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">
                Call Now
              </Link>
              <Link href="https://wa.me/919160093811" className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-gold hover:text-gold">
                WhatsApp
              </Link>
              <Link href="/book-consultation" className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-gold bg-black/80 px-6 py-3 text-sm text-gold transition hover:bg-gold hover:text-black">
                Book Consultation
              </Link>
            </div>
            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-white shadow-soft sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-white/60">Office Phone</p>
                <p className="font-semibold">+91 85559 12093</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/60">WhatsApp</p>
                <p className="font-semibold">+91 91600 93811</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/60">Office</p>
                <p className="font-semibold">Cottonmill, Gollavanigunta, Tirupati</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 shadow-glow">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[1.75rem]">
              <Image src="/law1.jpg" alt="Professional advocate portrait" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Courtroom Presence</p>
              <h2 className="text-3xl font-semibold text-white">A powerful legal image that reflects expertise and trust.</h2>
              <p className="max-w-xl text-white/75 leading-8">This premium courtroom image showcases the strength, dignity and professional environment of the law practice.</p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 h-[320px] sm:h-[420px]">
              <Image src="/court-photos.webp" alt="Courtroom scene" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 pb-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Practice Areas</p>
            <h2 className="text-3xl font-semibold text-white">Strategic legal expertise across every essential practice area.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div key={area} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-soft transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10">
                <p className="mb-4 text-2xl font-semibold text-gold">•</p>
                <h3 className="text-xl font-semibold">{area}</h3>
                <p className="mt-3 text-sm text-white/70">Premium counsel for {area.toLowerCase()}, tailored with confidence and clarity.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">About Advocate</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Advocate Venkatesh offers royal legal guidance for modern disputes.</h2>
            <p className="mt-6 text-white/75 leading-8">With decades of experience in high-stakes litigation and settlement advisory, Advocate Venkatesh delivers a premium legal experience rooted in trust, discretion, and elite advocacy.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">Expertise</p>
                <p className="mt-2 text-lg font-semibold text-white">Corporate & Civil</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">Reputation</p>
                <p className="mt-2 text-lg font-semibold text-white">Trusted Advocacy</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
              <div className="mt-6 space-y-5">
                {reasons.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-black/50 p-5">
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <TestimonialCarousel />
          </div>
        </div>

        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Success Statistics</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Cases Won", value: "520+" },
                { label: "Happy Clients", value: "460+" },
                { label: "Years Experience", value: "18" }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-black/60 p-6 text-center">
                  <p className="text-4xl font-semibold text-gold">{item.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">FAQ Preview</p>
            <div className="mt-6 space-y-4">
              <FAQAccordion limit={3} />
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Office Location</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Visit our premium law office in Tirupati.</h2>
              <p className="mt-4 text-white/75">Conveniently located at Cottonmill, Gollavanigunta, with a sophisticated consultation lounge and full-service legal support.</p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/60">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.462935633447!2d79.13075077532223!3d13.63585659050587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ccf53e6c2f863%3A0x9ddb802e7ee8d258!2sCotton%20Mill%2C%20Gollavanigunta%2C%20Tirupati%2C%20Andhra%20Pradesh%20517001!5e0!3m2!1sen!2sin!4v1748844987662!5m2!1sen!2sin"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
