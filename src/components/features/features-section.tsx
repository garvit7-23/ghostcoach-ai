import {
  Activity,
  Brain,
  LineChart,
  ShieldCheck,
} from "lucide-react";

import { FeatureCard } from "./feature-card";
import { SectionHeading } from "./section-heading";

const features = [
  {
    icon: (
      <Brain className="h-7 w-7 text-blue-400" />
    ),

    title: "AI-Powered Analysis",

    description:
      "Advanced computer vision trained to analyze shooting mechanics, body positioning, and movement patterns in real-time.",
  },

  {
    icon: (
      <Activity className="h-7 w-7 text-blue-400" />
    ),

    title: "Personalized Coaching",

    description:
      "Receive tailored feedback based on your experience level, position, training goals, and performance history.",
  },

  {
    icon: (
      <LineChart className="h-7 w-7 text-blue-400" />
    ),

    title: "Track Your Progress",

    description:
      "Monitor score improvements across sessions and identify consistent weaknesses to accelerate development.",
  },

  {
    icon: (
      <ShieldCheck className="h-7 w-7 text-blue-400" />
    ),

    title: "Private & Secure",

    description:
      "Your uploads and coaching sessions remain encrypted, secure, and accessible only to you.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="
        relative
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="container-width">
        <SectionHeading
          badge="Platform Features"
          title="Built for Serious Basketball Players"
          description="
          GhostCoach AI combines computer vision,
          personalized coaching intelligence, and
          performance analytics into a single
          elite-level training platform.
          "
        />

        <div
          className="
            mt-12
            sm:mt-16
            grid gap-6

            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}