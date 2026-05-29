export interface FeedbackReport {
  overallScore: number;

  strengths: string[];

  improvements: string[];

  priorityFocus: string;

  recommendedDrill: string;

  confidence: "Low" | "Medium" | "High";
}