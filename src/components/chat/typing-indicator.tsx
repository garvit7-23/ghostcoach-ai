export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="
          flex items-center gap-2

          rounded-3xl

          border border-white/10

          bg-white/[0.04]

          px-6 py-5
        "
      >
        <div
          className="
            h-2 w-2
            animate-bounce
            rounded-full
            bg-blue-400
          "
        />

        <div
          className="
            h-2 w-2
            animate-bounce
            rounded-full
            bg-blue-400
            [animation-delay:0.15s]
          "
        />

        <div
          className="
            h-2 w-2
            animate-bounce
            rounded-full
            bg-blue-400
            [animation-delay:0.3s]
          "
        />
      </div>
    </div>
  );
}