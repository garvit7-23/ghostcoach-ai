"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  BarChart3,
  Brain,
  Home,
  Menu,
  Settings,
  Upload,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const mobileNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },

  {
    label: "Upload Session",
    href: "/upload",
    icon: Upload,
  },

  {
    label: "Session History",
    href: "/sessions",
    icon: BarChart3,
  },

  {
    label: "AI Coach",
    href: "/chat",
    icon: Brain,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function DashboardNavbar() {
  const pathname = usePathname();

  return (
    <header
      className="
        sticky
        top-0
        z-30

        border-b
        border-white/10

        bg-[#020817]/75
        backdrop-blur-xl
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-blue-500/40
          to-transparent
        "
      />

      <div
        className="
          flex
          h-20
          items-center
          justify-between

          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* MOBILE SIDEBAR */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open navigation menu"
                  className="
                    group

                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.03]

                    transition-all
                    duration-200

                    hover:border-white/20
                    hover:bg-white/[0.06]
                  "
                >
                  <Menu
                    className="
                      h-5
                      w-5

                      transition-transform
                      duration-200

                      group-hover:scale-110
                    "
                  />
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="
                  w-[320px]

                  border-white/10

                  bg-[#020817]/95
                  backdrop-blur-2xl
                "
              >
                {/* BRAND */}
                <div
                  className="
                    relative

                    mb-8

                    border-b
                    border-white/10

                    pb-6
                  "
                >
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-px

                      bg-gradient-to-r
                      from-transparent
                      via-blue-500/30
                      to-transparent
                    "
                  />

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-2xl

                        border
                        border-blue-500/20

                        bg-blue-500/10

                        shadow-[0_0_30px_rgba(59,130,246,0.15)]
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
                          text-lg
                          font-semibold
                          tracking-tight
                          text-white
                        "
                      >
                        GhostCoach AI
                      </p>

                      <p
                        className="
                          mt-1

                          text-[11px]
                          uppercase
                          tracking-[0.24em]

                          text-slate-500
                        "
                      >
                        Basketball Coach
                      </p>
                    </div>
                  </div>
                </div>

                {/* MOBILE NAV */}
                <nav className="space-y-2">
                  {mobileNavItems.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      const isActive =
                        pathname ===
                        item.href;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`
                            group
                            relative

                            flex
                            items-center
                            gap-3

                            rounded-2xl

                            px-4
                            py-3.5

                            transition-all
                            duration-200

                            ${
                              isActive
                                ? `
                                  border border-blue-500/20
                                  bg-blue-500/10

                                  text-white

                                  shadow-[0_0_25px_rgba(59,130,246,0.12)]
                                `
                                : `
                                  border border-transparent

                                  text-slate-400

                                  hover:border-white/10
                                  hover:bg-white/[0.04]
                                  hover:text-white
                                `
                            }
                          `}
                        >
                          {isActive && (
                            <div
                              className="
                                absolute
                                inset-y-2
                                left-0
                                w-[3px]

                                rounded-full

                                bg-blue-400
                              "
                            />
                          )}

                          <Icon
                            className={`
                              h-5
                              w-5

                              transition-transform
                              duration-200

                              ${
                                isActive
                                  ? "text-blue-400"
                                  : "group-hover:scale-110"
                              }
                            `}
                          />

                          <span
                            className="
                              text-sm
                              font-medium
                            "
                          >
                            {item.label}
                          </span>
                        </Link>
                      );
                    }
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* PAGE TITLE */}
          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <h1
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                Dashboard
              </h1>

              <div
                className="
                  hidden

                  rounded-full

                  border
                  border-blue-500/20

                  bg-blue-500/10

                  px-3
                  py-1

                  text-xs
                  font-medium
                  text-blue-300

                  md:flex
                "
              >
                AI Active
              </div>
            </div>

            <p
              className="
                mt-1

                text-sm
                text-slate-400
              "
            >
              Track your basketball
              development.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* STATUS */}
          <div
            className="
              hidden

              items-center
              gap-2

              rounded-full

              border
              border-emerald-500/20

              bg-emerald-500/10

              px-4
              py-2

              text-sm
              font-medium
              text-emerald-300

              xl:flex
            "
          >
            <div
              className="
                h-2
                w-2

                rounded-full

                bg-emerald-400
              "
            />

            AI Analysis Active
          </div>

          {/* USER AVATAR */}
          <button
            className="
              group

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/[0.04]

              text-lg
              font-semibold
              text-white

              transition-all
              duration-200

              hover:border-white/20
              hover:bg-white/[0.06]
            "
          >
            <span
              className="
                transition-transform
                duration-200

                group-hover:scale-105
              "
            >
              G
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}