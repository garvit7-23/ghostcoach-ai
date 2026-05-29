import { supabase } from "@/lib/supabase/client";

import { FeedbackReport } from "@/types/feedback";

export async function saveSession({
  imageUrl,
  feedback,
}: {
  imageUrl: string;

  feedback: FeedbackReport;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error(
      "User not authenticated."
    );
  }

  const { error } =
    await supabase
      .from("sessions")
      .insert({
        user_id: user.id,

        image_url: imageUrl,

        feedback,
      });

  if (error) {
    throw error;
  }
}

export async function getSessions() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error(
      "User not authenticated."
    );
  }

  const { data, error } =
    await supabase
      .from("sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    throw error;
  }

  return data;
}