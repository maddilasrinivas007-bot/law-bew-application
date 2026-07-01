"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const categories = ["All", "Corporate", "Family", "Property", "Cyber", "Litigation"];

const articles = [
  {
    title: "Understanding Consumer Rights in India",
    category: "Consumer",
    excerpt: "A clear guide to consumer protection laws and how to take action against unfair business practices.",
    date: "15 June 2026"
  },
  {
    title: "Cyber Law Compliance for Small Businesses",
    category: "Cyber",
    excerpt: "How businesses can protect data, avoid legal exposure and build secure digital operations.",
    date: "03 June 2026"
  },
  {
    title: "Land Dispute Resolution in Property Cases",
    category: "Property",
    excerpt: "Effective strategies for resolving property disputes in court and through mediation.",
    date: "28 May 2026"
  },
  {
    title: "Family Law Guidance During Divorce",
    category: "Family",
    excerpt: "Premium legal counsel to support a fair and respectful separation process.",
    date: "12 May 2026"
  },
  {
    title: "Civil Litigation: What Clients Need to Know",
    category: "Litigation",
    excerpt: "Preparation, timelines and expectations for civil court proceedings.",
    date: "06 May 2026"
  }
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const visibleArticles = useMemo(() => {
    const filtered = articles.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    return filtered;
  }, [search, category]);

  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(visibleArticles.length / pageSize));
  const paginated = visibleArticles.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Latest Articles</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Legal insights crafted for professionals and families.</h1>
          <p className="mt-6 max-w-2xl text-white/75 leading-8">Stay informed with articles about consumer rights, cyber protection, property disputes, family law, and civil litigation.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="search"
                placeholder="Search articles"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="rounded-[2rem] border border-white/10 bg-black/60 px-6 py-4 text-white outline-none transition focus:border-gold"
              />
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                className="rounded-[2rem] border border-white/10 bg-black/60 px-6 py-4 text-white outline-none transition focus:border-gold"
              >
                {categories.map((option) => (
                  <option key={option} value={option} className="bg-black text-white">{option}</option>
                ))}
              </select>
            </div>

            <div className="space-y-6">
              {paginated.map((article) => (
                <article key={article.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft transition hover:border-gold/40 hover:bg-white/10">
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">{article.category}</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">{article.title}</h2>
                  <p className="mt-4 text-white/70 leading-7">{article.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-white/60">
                    <span>{article.date}</span>
                    <Link href="/blog" className="font-semibold text-gold transition hover:text-white">Read More</Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-black/60 px-5 py-4 text-sm text-white/70">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {page} of {totalPages}</span>
              <button
                type="button"
                disabled={page === totalPages}
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Featured Article</h2>
            <p className="mt-4 text-white/70 leading-7">Discover the key compliance steps to protect your business and assets with cyber law strategies tailored for modern enterprises.</p>
            <Link href="/blog" className="inline-flex rounded-full border border-gold bg-black/80 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black">
              Explore the Blog
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
