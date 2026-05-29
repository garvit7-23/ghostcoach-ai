"use client";

import { useState } from "react";

import { SendHorizonal } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (
    message: string
  ) => Promise<void>;

  disabled?: boolean;
};

export function ChatInput({
  onSendMessage,
  disabled,
}: ChatInputProps) {
  const [message, setMessage] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    await onSendMessage(message);

    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border-t border-white/10
        p-6
      "
    >
      <div
        className="
          flex items-end gap-4
        "
      >
        <textarea
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="
          Ask GhostCoach AI about
          shooting mechanics, drills,
          positioning, confidence,
          or performance strategy...
          "
          rows={1}
          disabled={disabled}
          className="
            min-h-[60px]
            flex-1
            resize-none

            rounded-2xl

            border border-white/10

            bg-white/[0.03]

            px-5 py-4

            text-white

            outline-none

            transition-colors

            placeholder:text-slate-500

            focus:border-blue-500/40
          "
        />

        <button
          type="submit"
          disabled={disabled}
          className="
            flex h-[60px] w-[60px]
            items-center justify-center

            rounded-2xl

            bg-blue-500

            transition-all

            hover:bg-blue-400

            disabled:opacity-50
          "
        >
          <SendHorizonal className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}