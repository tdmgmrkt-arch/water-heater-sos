import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { getSortedBlogPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Inland Empire Plumbing, Water Heater & HVAC Blog",
  description:
    "Practical guides from a licensed Inland Empire contractor — water heaters, plumbing, AC, heating, and indoor air quality tips for Riverside and San Bernardino County homeowners.",
  keywords: [
    "Inland Empire plumbing blog",
    "water heater tips Riverside",
    "HVAC blog Southern California",
    "AC repair advice",
    "home maintenance blog",
  ],
  alternates: {
    canonical: "https://waterheatersos.com/blog",
  },
  openGraph: {
    title: "Inland Empire Plumbing, Water Heater & HVAC Blog | SOS Plumbing and Air",
    description:
      "Practical guides from a licensed Inland Empire contractor — water heaters, plumbing, AC, heating, and indoor air quality tips for Riverside and San Bernardino County homeowners.",
    type: "website",
    url: "https://waterheatersos.com/blog",
  },
};

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://waterheatersos.com/blog#blog",
    name: "SOS Plumbing and Air — Field Notes",
    description:
      "Homeowner-friendly guides on water heaters, plumbing, and HVAC from a licensed Inland Empire contractor.",
    url: "https://waterheatersos.com/blog",
    publisher: {
      "@id": "https://waterheatersos.com/#organization",
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `https://waterheatersos.com/blog/${p.slug}`,
      image: `https://waterheatersos.com${p.coverImage}`,
      author: {
        "@type": "Organization",
        name: p.author,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogIndex />
    </>
  );
}
