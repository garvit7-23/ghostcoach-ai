import Link from "next/link";

const footerLinks = {
  Product: [
    "Features",
    "AI Analysis",
    "Progress Tracking",
    "Pricing",
  ],

  Company: [
    "About",
    "Careers",
    "Blog",
    "Contact",
  ],

  Resources: [
    "Help Center",
    "Privacy Policy",
    "Terms",
    "Security",
  ],
};

export function Footer() {
  return (
    <footer
      className="
        border-t border-white/10
        py-16
      "
    >
      <div className="container-width">
        <div
          className="
            grid gap-12

            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="
                flex items-center gap-3
              "
            >
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-full

                  border border-blue-500/20
                  bg-blue-500/10
                "
              >
                <span
                  className="
                    text-lg
                    font-semibold
                    text-blue-400
                  "
                >
                  G
                </span>
              </div>

              <div>
                <p
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                  "
                >
                  GhostCoach AI
                </p>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-slate-500
                  "
                >
                  AI Basketball Coach
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-md

                leading-7
                text-slate-400
              "
            >
              AI-powered basketball coaching
              platform built to help players
              improve mechanics, consistency,
              and performance through computer
              vision analysis.
            </p>
          </div>

          {/* LINKS */}
          <div
            className="
              grid gap-10

              sm:grid-cols-3
            "
          >
            {Object.entries(footerLinks).map(
              ([category, links]) => (
                <div key={category}>
                  <h4
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-slate-500
                    "
                  >
                    {category}
                  </h4>

                  <div className="mt-5 space-y-4">
                    {links.map((link) => (
                      <button
                        key={link}
                        className="
                          block
                          text-sm
                          text-slate-300
                          transition-colors

                          hover:text-white
                        "
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-16
            flex flex-col gap-4

            border-t border-white/10

            pt-8

            text-sm text-slate-500

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 GhostCoach AI. All rights
            reserved.
          </p>

          <p>
            Designed for elite basketball
            development.
          </p>
        </div>
      </div>
    </footer>
  );
}