import { Container } from "./Container";
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import type { Metadata } from "next";

interface StubPageProps {
  title: string;
}

export function StubPage({ title }: StubPageProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center py-20">
          <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Content coming soon
          </p>
          <CTAButton href="/quote">
            Get a Free Quote
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
