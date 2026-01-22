import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { FooterCTAProvider } from "@/contexts/FooterCTAContext";

export const metadata: Metadata = {
  title: {
    default: "Water Heater SOS - Expert Water Heater Services | Inland Empire",
    template: "%s | Water Heater SOS",
  },
  description: "The Inland Empire's most trusted water heater experts. Professional repair, installation, and maintenance services. Licensed, insured, and 5-star rated. Call (800) 697-4014.",
  keywords: ["water heater repair", "water heater installation", "tankless water heater", "plumbing services", "Inland Empire", "Redlands", "Riverside", "San Bernardino"],
  authors: [{ name: "Water Heater SOS" }],
  creator: "Water Heater SOS",
  publisher: "Water Heater SOS",
  metadataBase: new URL("https://www.waterheatersos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.waterheatersos.com",
    siteName: "Water Heater SOS",
    title: "Water Heater SOS - Expert Water Heater Services",
    description: "The Inland Empire's most trusted water heater experts. Fast, affordable repair and replacement services.",
    images: [
      {
        url: "https://www.waterheatersos.com/wh-sos-service-van.webp",
        width: 1200,
        height: 630,
        alt: "Water Heater SOS Service Van - Expert Water Heater Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater SOS",
    description: "Expert water heater services in the Inland Empire",
    images: ["https://www.waterheatersos.com/wh-sos-service-van.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "UcJ9BTMatAVBrk12EfnYd315YJcloEa9CX-kZHsbzsU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.waterheatersos.com/#organization",
        name: "Water Heater SOS",
        url: "https://www.waterheatersos.com",
        telephone: "(800) 697-4014",
        email: "info@waterheatersos.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Redlands",
          addressRegion: "CA",
          postalCode: "92373",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "34.0556",
          longitude: "-117.1825",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Inland Empire",
          },
          {
            "@type": "City",
            name: "Redlands",
          },
          {
            "@type": "City",
            name: "Riverside",
          },
          {
            "@type": "City",
            name: "San Bernardino",
          },
        ],
        priceRange: "$$",
        image: "https://www.waterheatersos.com/wh-sos-logo.webp",
        logo: "https://www.waterheatersos.com/wh-sos-logo.webp",
        openingHours: "Mo-Su 00:00-23:59",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "500",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.waterheatersos.com/#website",
        url: "https://www.waterheatersos.com",
        name: "Water Heater SOS",
        publisher: {
          "@id": "https://www.waterheatersos.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.waterheatersos.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.waterheatersos.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.waterheatersos.com",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <FooterCTAProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </FooterCTAProvider>
      </body>
    </html>
  );
}
