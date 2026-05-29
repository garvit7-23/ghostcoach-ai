import { FeaturesSection } from "@/components/features/features-section";

import { CTASection } from "@/components/footer/cta-section" ;

import { HeroSection } from "@/components/hero/hero-section";

import { HowItWorks } from "@/components/landing/how-it-works";
import { MetricsStrip } from "@/components/landing/metrics-strip";

import { AIShowcase } from "@/components/showcase/ai-showcase";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <MetricsStrip />

      <FeaturesSection />

      <HowItWorks />

      <AIShowcase />

      <CTASection />
    </main>
  );
}