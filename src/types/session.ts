import { FeedbackReport } from "./feedback";

export interface Session {
  id: string;

  imageUrl: string;

  createdAt: string;

  feedback: FeedbackReport;
}