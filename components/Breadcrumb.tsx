"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Build full breadcrumb path including Home
  const fullPath = [{ label: "Home", href: "/" }, ...items];

  // Generate BreadcrumbList JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullPath.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href
        ? `https://www.waterheatersos.com${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-600">
            {fullPath.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-1 text-gray-400 flex-shrink-0" />
                )}
                {index === 0 ? (
                  <Link
                    href={item.href || "/"}
                    className="flex items-center hover:text-[#EA5D19] transition-colors"
                  >
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#EA5D19] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
