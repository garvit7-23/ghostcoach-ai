import { supabase } from "@/lib/supabase/client";

export async function getChatHistory(
  userId: string
) {
  const { data, error } =
    await supabase
      .from("chat_messages")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", {
        ascending: true,
      });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function saveMessage({
  userId,
  role,
  content,
}: {
  userId: string;
  role: "user" | "assistant";
  content: string;
}) {
  const { error } =
    await supabase
      .from("chat_messages")
      .insert({
        user_id: userId,
        role,
        content,
      });

  if (error) {
    throw error;
  }
}

export async function clearChatHistory(
  userId: string
) {
  const { error } =
    await supabase
      .from("chat_messages")
      .delete()
      .eq("user_id", userId);

  if (error) {
    throw error;
  }
}
export async function getRecentMessages(
  userId: string,
  limit = 20
) {
  const { data, error } =
    await supabase
      .from("chat_messages")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      })
      .limit(limit);

  if (error) {
    throw error;
  }

  return (data ?? []).reverse();
}