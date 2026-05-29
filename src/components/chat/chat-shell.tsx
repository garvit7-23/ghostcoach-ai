type ChatShellProps = {
  children: React.ReactNode;
};

export function ChatShell({
  children,
}: ChatShellProps) {
  return (
    <div
      className="
        mx-auto
        flex h-[calc(100vh-140px)]
        max-w-6xl
        flex-col

        overflow-hidden

        rounded-[32px]

        border border-white/10

        bg-white/[0.03]
      "
    >
      {children}
    </div>
  );
}