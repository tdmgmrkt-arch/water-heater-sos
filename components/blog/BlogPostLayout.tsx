"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import type { BlogPostMeta } from "@/lib/blog/posts";
import type { ReactNode } from "react";

interface BlogPostLayoutProps {
  post: BlogPostMeta;
  children: ReactNode;
  relatedPosts?: BlogPostMeta[];
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostLayout({ post, children, relatedPosts = [] }: BlogPostLayoutProps) {
  return (
    <div className="bg-[#fffdf9]">
      <SetFooterCTA
        title="Have a Question the Blog Didn't Answer?"
        description="Call our licensed team 24/7 or get a free written quote in under a minute."
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#11110E]">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#11110E]/60 via-[#11110E]/70 to-[#11110E]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#EA5D19] hover:text-[#FF6E2E] transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EA5D19] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
              {post.description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
              <div className="h-10 w-10 rounded-full bg-[#EA5D19] flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <p className="text-white font-semibold">{post.author}</p>
                <p className="text-xs text-gray-400">Licensed Contractor · CA LIC# 1140776</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <article className="blog-prose">
              {children}
            </article>

            {/* Post-CTA */}
            <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-8 md:p-10 shadow-xl text-white">
            <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3">
              Need a Licensed Local Pro?
            </h3>
            <p className="text-white/95 mb-6 leading-relaxed">
              SOS Plumbing and Air serves the entire Inland Empire — Riverside County and San Bernardino County — with 24/7 emergency service, upfront pricing, and 5-star rated technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#11110E] mb-8">
              More From the Blog
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={rp.coverImage}
                      alt={rp.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#EA5D19] mb-2">
                      {rp.category}
                    </span>
                    <h3 className="text-base font-bold text-[#11110E] leading-tight group-hover:text-[#EA5D19] transition-colors">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">{formatDate(rp.date)} · {rp.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
