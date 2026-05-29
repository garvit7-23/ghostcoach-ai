import { Session } from "@/types/session";

export function getAverageScore(
  sessions: Session[]
) {
  if (!sessions.length) return 0;

  const total =
    sessions.reduce(
      (sum, session) =>
        sum +
        session.feedback
          .overallScore,
      0
    );

  return Math.round(
    total / sessions.length
  );
}

export function getBestScore(
  sessions: Session[]
) {
  if (!sessions.length) return 0;

  return Math.max(
    ...sessions.map(
      (session) =>
        session.feedback
          .overallScore
    )
  );
}

export function getPrimaryFocus(
  sessions: Session[]
) {
  if (!sessions.length)
    return "No Data";

  return (
    sessions[
      sessions.length - 1
    ]?.feedback.priorityFocus ||
    "Unknown"
  );
}

export function getChartData(
  sessions: Session[]
) {
  return sessions.map(
    (session, index) => ({
      session:
        `S${index + 1}`,

      score:
        session.feedback
          .overallScore,
    })
  );
}