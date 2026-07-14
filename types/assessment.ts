export type CategoryId =
  | "analytical"
  | "communication"
  | "leadership"
  | "creativity"
  | "execution"
  | "adaptability";

export interface Category {
  id: CategoryId;
  name: string;
  shortDesc: string;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  text: string;
  reverse?: boolean;
}

export interface CategoryResult {
  categoryId: CategoryId;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface AssessmentReport {
  results: CategoryResult[];
  strengths: CategoryResult[];
  growthArea: CategoryResult;
}
