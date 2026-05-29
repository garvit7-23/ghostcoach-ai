import Link from "next/link";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Progress",
    href: "#showcase",
  },
];

export function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-black/30
        backdrop-blur-xl
      "
    >
      <div className="container-width">
        <div
          className="
            flex h-20 items-center
            justify-between
          "
        >
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-blue-500/30
                bg-blue-500/10
              "
            >
              <span className="text-lg font-bold text-blue-400">
                G
              </span>
            </div>

            <div>
              <p
                className="
                  font-inter-tight
                  text-lg
                  font-semibold
                  tracking-tight
                "
              >
                GhostCoach AI
              </p>

              <p
                className="
                  text-xs
                  uppercase tracking-[0.3em]
                  text-slate-400
                "
              >
                AI Basketball Coach
              </p>
            </div>
          </Link>

          <nav
            className="
              hidden items-center gap-8
              md:flex
            "
          >
            {navItems.map((item) => (
             <Link
               key={item.label}
               href={item.href}
               className="
                 text-sm
                 text-slate-300

                 transition-colors

                 hover:text-white
               "
             >
               {item.label}
             </Link>
           ))}
            
          </nav>

          <div
            className="
              hidden
              md:flex
              items-center

              overflow-hidden

              rounded-full

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-xl
            "
           >
              <Link
                href="/login"
                className="
                  px-6
                  py-3

                  text-sm
                  font-medium

                  text-slate-300

                  transition-colors

                  hover:text-white
                "
                >
              Log in
            </Link>

            <div className="h-5 w-px bg-white/10" />

            <Link
              href="/register"
              className="
                gradient-primary

                px-6
                py-3

                text-sm
                font-semibold

                text-white
            "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}