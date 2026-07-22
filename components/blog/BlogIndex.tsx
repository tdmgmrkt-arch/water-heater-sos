"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { getSortedBlogPosts } from "@/lib/blog/posts";

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogIndex() {
  const posts = getSortedBlogPosts();
  const [featured, ...rest] = posts;

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="bg-[#fffdf9]">
      <SetFooterCTA
        title="Skip the Reading. Just Call."
        description="24/7 emergency service across the Inland Empire — licensed & insured."
      />

      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#11110E]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/blogpagehero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11110E] via-[#11110E]/85 to-[#11110E]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110E] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EA5D19]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#EA5D19] mb-4">
              <BookOpen className="h-3 w-3" />
              The SOS Field Notes Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Real answers from a licensed Inland Empire{" "}
              <span className="text-gradient">plumbing, water heater, and HVAC</span> team.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Practical, seasonal, homeowner-friendly guides written by the field technicians who actually service Riverside and San Bernardino County homes every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-14 md:py-20 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA5D19] mb-4">
              Latest Post
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 md:grid-cols-2 items-center"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={featured.coverImage}
                  alt={featured.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-[#EA5D19] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-[#11110E] leading-tight group-hover:text-[#EA5D19] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                  {featured.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EA5D19] group-hover:gap-3 transition-all">
                  Read the full post
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#11110E] mb-8">
            All Posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block rounded-full bg-[#EA5D19] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#11110E] leading-tight group-hover:text-[#EA5D19] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#EA5D19] group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-8 md:p-12 shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black leading-tight">
                  Prefer to talk it through with a licensed pro?
                </h3>
                <p className="mt-2 text-white/95">
                  We answer the phone 24/7 across the Inland Empire. Free written quotes in under a minute.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:8006974014"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-[#EA5D19] hover:bg-gray-50 transition-all shadow-md hover:shadow-xl"
                >
                  <Phone className="h-4 w-4" />
                  (800) 697-4014
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white/10 transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
