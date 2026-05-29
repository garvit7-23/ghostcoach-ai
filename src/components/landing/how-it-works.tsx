import { ProcessCard } from "./process-card";

import { SectionHeading } from "@/components/features/section-heading";

const steps = [
  {
    step: "01",

    title: "Upload Your Form",

    description:
      "Upload a clear photo of your basketball stance, shooting form, or movement technique directly from your device.",
  },

  {
    step: "02",

    title: "AI Vision Analysis",

    description:
      "GhostCoach AI analyzes balance, posture, arm alignment, landing mechanics, and positioning using computer vision.",
  },

  {
    step: "03",

    title: "Receive Elite Feedback",

    description:
      "Get personalized coaching insights, improvement priorities, and drill recommendations tailored to your skill level.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative

        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="container-width">
        <SectionHeading
          badge="How It Works"
          title="Train Smarter With AI Coaching"
          description="
          GhostCoach AI transforms a single
          upload into structured coaching
          feedback designed to accelerate
          improvement.
          "
        />

        <div
          className="
            relative

            mt-12
            sm:mt-16

            grid gap-6

            lg:grid-cols-3
          "
        >
          {/* FLOW LINE */}
          <div
            className="
              absolute

              left-[16%]
              right-[16%]
              top-[72px]

              hidden

              border-t
              border-dashed
              border-white/10

              lg:block
            "
          />

          {steps.map((step) => (
            <ProcessCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}