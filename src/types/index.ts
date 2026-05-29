export type ExperienceLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type ConfidenceLevel =
  | "Low"
  | "Medium"
  | "High";

export interface FeedbackReport {
  overallScore: number;

  strengths: string[];

  improvementAreas: string[];

  priorityFix: string;

  drillSuggestion: string;

  confidence: ConfidenceLevel;
}