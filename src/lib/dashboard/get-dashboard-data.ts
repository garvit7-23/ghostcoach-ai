import { supabase } from "@/lib/supabase/client";

export async function getDashboardData() {
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
        ascending: true,
      });

  if (error) {
    throw error;
  }

  return data || [];
}