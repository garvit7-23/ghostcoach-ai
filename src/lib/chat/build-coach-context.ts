import { supabaseServer } from "@/lib/supabase/server";

export async function buildCoachContext(
    userId: string
) {
     


  // PROFILE
  const { data: profile } =
    await supabaseServer
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

  // RECENT SESSIONS
  const { data: sessions } =
    await supabaseServer
      .from("sessions")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      })
      .limit(5);

  // SAFETY
  if (!sessions || sessions.length === 0) {
    return {
      profile,
      summary:
        "No previous coaching sessions found.",
    };
  }

  // LATEST SESSION
  const latestSession =
    sessions[0];

  // AGGREGATE WEAKNESSES
  const recurringWeaknesses =
    sessions.flatMap(
      (session) =>
        session.feedback
          ?.improvements || []
    );

  // AGGREGATE STRENGTHS
  const recurringStrengths =
    sessions.flatMap(
      (session) =>
        session.feedback
          ?.strengths || []
    );

  // AVERAGE SCORE
  const averageScore =
    sessions.reduce(
      (acc, session) =>
        acc +
        (session.feedback
          ?.overallScore || 0),
      0
    ) / sessions.length;

  return {
    profile,

    latestSession,

    recurringWeaknesses:
      recurringWeaknesses.slice(
        0,
        10
      ),

    recurringStrengths:
      recurringStrengths.slice(
        0,
        10
      ),

    averageScore:
     Number(
      averageScore.toFixed(1),
    ),
  };
}