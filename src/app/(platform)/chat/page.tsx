"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { toast } from "sonner";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";

import { ChatInput } from "@/components/chat/chat-input";

import { ChatMessage } from "@/components/chat/chat-message";

import { ChatShell } from "@/components/chat/chat-shell";

import { TypingIndicator } from "@/components/chat/typing-indicator";

import { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatApiResponse {
  response: string;
}

export default function ChatPage() {
  const [messages, setMessages] =
    useState<ChatMessageType[]>([
      {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          "Welcome to GhostCoach AI. Ask me anything about shooting mechanics, training drills, confidence, positioning, or basketball development.",

        createdAt:
          new Date().toISOString(),
      },
    ]);

  const [isLoading, setIsLoading] =
    useState(false);

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  interface ChatHistoryMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    created_at: string;
  }

  async function loadHistory() {
   try {
     const userId =
       localStorage.getItem(
         "ghostcoach-user-id"
       );

     if (!userId) {
       return;
     }

     const response =
       await fetch(
         `/api/chat/history?userId=${userId}`
       );

     if (!response.ok) {
       return;
     }

     const history =
       await response.json();

     if (history.length === 0) {
       return;
     }

     const formattedHistory =
       history.map(
        (message: ChatHistoryMessage) => ({
         id: message.id,
 
         role: message.role,

         content: message.content,

         createdAt:
           message.created_at,
       }));

     setMessages(
       formattedHistory
     );
   } catch (error) {
     console.error(error);
   }
 }
 

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function handleSendMessage(
    message: string
  ) {
    try {
      setIsLoading(true);

      const userMessage: ChatMessageType =
        {
          id: crypto.randomUUID(),

          role: "user",

          content: message,

          createdAt:
            new Date().toISOString(),
        };

      setMessages((prev) => [
        ...prev,
        userMessage,
      ]);

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,

            userId:
             localStorage.getItem(
               "ghostcoach-user-id"
             ),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Chat request failed."
        );
      }

      const data: ChatApiResponse =
        await response.json();

      const assistantMessage: ChatMessageType =
        {
          id: crypto.randomUUID(),

          role: "assistant",

          content: data.response,

          createdAt:
            new Date().toISOString(),
        };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);
    } catch (error) {
        console.error(error);


        toast.error(
          "Unable to generate response."
        );
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <DashboardShell>
      <div className="space-y-8">
        {/* HEADER */}
        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-blue-300
            "
          >
            AI Basketball Coach
          </p>

          <h1
            className="
              mt-4
              text-5xl
              font-semibold
              tracking-tight
            "
          >
            Chat With GhostCoach AI
          </h1>

          <p
            className="
              mt-5
              max-w-3xl

              text-lg
              leading-8
              text-slate-400
            "
          >
            Ask questions about mechanics,
            drills, confidence, positioning,
            or basketball performance
            improvement.
          </p>
        </div>

        {/* CHAT */}
        <ChatShell>
          {/* MESSAGES */}
          <div
            className="
              flex-1
              space-y-6
              overflow-y-auto

              p-6
            "
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}

            {isLoading && (
              <TypingIndicator />
            )}

            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <ChatInput
            onSendMessage={
              handleSendMessage
            }
            disabled={isLoading}
          />
        </ChatShell>
      </div>
    </DashboardShell>
  );
}