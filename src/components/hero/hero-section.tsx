import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[calc(100svh-88px)]
        overflow-hidden
        pt-[88px]
      "
    >
      <HeroBackground />

      <HeroContent />
    </section>
  );
}