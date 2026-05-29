import { ChatMessage as ChatMessageType } from "@/types/chat";

type ChatMessageProps = {
  message: ChatMessageType;
};

export function ChatMessage({
  message,
}: ChatMessageProps) {
  const isAssistant =
    message.role === "assistant";

  return (
    <div
      className={`
        flex
        ${
          isAssistant
            ? "justify-start"
            : "justify-end"
        }
      `}
    >
      <div
        className={`
          max-w-2xl
          rounded-3xl
          px-6 py-5

          ${
            isAssistant
              ? `
                border border-white/10
                bg-white/[0.04]
              `
              : `
                bg-blue-500/20
              `
          }
        `}
      >
        <p
          className="
            whitespace-pre-wrap
            leading-8
            text-slate-100
          "
        >
          {message.content}
        </p>
      </div>
    </div>
  );
}