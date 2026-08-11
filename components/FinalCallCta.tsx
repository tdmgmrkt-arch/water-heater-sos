import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

type FinalCallCtaProps = {
  /** Headline above the buttons. */
  heading?: string;
  /** Supporting paragraph below the headline. */
  subheading?: string;
  /** Override for the primary CTA href (defaults to tel:). */
  primaryHref?: string;
  /** Override for the primary CTA label. */
  primaryLabel?: string;
};

const PHONE_HREF = "tel:8006974014";
const PHONE_LABEL = "Call (800) 697-4014";

export function FinalCallCta({
  heading = "Ready to Get Started?",
  subheading = "Call now for same-day service or request a free quote online — backed by every promise on this page.",
  primaryHref = PHONE_HREF,
  primaryLabel = PHONE_LABEL,
}: FinalCallCtaProps = {}) {
  return (
    <section className="bg-[#11110E] py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {heading}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-6">
          <a href={primaryHref} className="flex-1">
            <button className="w-full inline-flex items-center justify-center gap-2 bg-[#EA5D19] hover:bg-[#d45416] text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 group min-h-11">
              <Phone
                className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              {primaryLabel}
            </button>
          </a>
          <Link href="/quote" className="flex-1">
            <button className="w-full inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#11110E] font-semibold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 group min-h-11">
              <ArrowRight
                className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300"
                aria-hidden="true"
              />
              Get a Free Quote
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          <strong className="text-gray-400">CA LIC #1140776</strong> &nbsp;&middot;&nbsp; Licensed,
          Bonded &amp; Insured
        </p>
      </div>
    </section>
  );
}
