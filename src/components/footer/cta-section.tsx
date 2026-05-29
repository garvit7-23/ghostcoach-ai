import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { GradientButton } from "@/components/ui/gradient-button";

export function CTASection() {
  return (
    <section
      className="
        relative

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute inset-0

          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_40%)]
        "
      />

      <div className="container-width relative">
        <div
          className="
            relative
            overflow-hidden

            rounded-[40px]

            border border-white/10

            bg-gradient-to-br
            from-blue-500/[0.12]
            to-cyan-500/[0.04]

            px-6
            py-16

            text-center

            sm:px-10
            lg:px-16
            lg:py-20
          "
        >
          {/* ORBS */}
          <div
            className="
              absolute
              left-0
              top-0

              h-72
              w-72

              rounded-full

              bg-blue-500/10

              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0

              h-72
              w-72

              rounded-full

              bg-cyan-500/10

              blur-3xl
            "
          />

          {/* CONTENT */}
          <div className="relative z-10">
            <div
              className="
                inline-flex
                items-center

                rounded-full

                border border-blue-500/20

                bg-blue-500/10

                px-4 py-2

                text-sm
                font-medium

                text-blue-300
              "
            >
              Start Training Smarter
            </div>

            <h2
              className="
                mx-auto
                mt-8

                max-w-4xl

                text-3xl
                font-semibold
                leading-tight
                tracking-tight

                sm:text-4xl
                lg:text-6xl
              "
            >
              Unlock AI-Powered Basketball
              Coaching Designed For Real
              Performance Growth.
            </h2>

            <p
              className="
                mx-auto
                mt-6

                max-w-2xl

                text-base
                leading-8

                text-slate-300

                sm:text-lg
              "
            >
              Upload your form, receive elite
              coaching feedback, and track your
              improvement with GhostCoach AI.
            </p>

            {/* CTA */}
            <div
              className="
                mt-10

                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
              "
            >
              <Link href="/register">
                <GradientButton
                  className="
                    h-14

                    px-8

                    text-base
                    font-semibold
                  "
                >
                  Start Free Analysis

                  <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
              </Link>

              <Link
                href="/login"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-full

                  border border-white/10

                  bg-white/[0.03]

                  px-6
                  py-3

                  text-sm
                  font-medium

                  text-slate-300

                  transition-all

                  hover:border-white/20
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}