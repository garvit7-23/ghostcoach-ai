import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Basketball player"
          fill
          priority
          className="
            object-cover
            object-[60%_25%]
          "
        />
      </div>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-r
          from-[#020817]/82
          via-[#020817]/20
          to-transparent
        "
      />

      {/* EXTRA GLOW */}
      <div
        className="
          absolute inset-0

          bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_35%)]
        "
      />
    </>
  );
}