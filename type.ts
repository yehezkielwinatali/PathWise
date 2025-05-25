export interface IndustryInsight {
  id: string;
  industry: string;
  users: any[]; // You can replace `any` with your User type if available

  salaryRanges: {
    role: string;
    min: number;
    max: number;
    median: number;
    location?: string;
  }[];

  growthRate: number;
  demandLevel: "High" | "Medium" | "Low";
  topSkills: string[];

  marketOutlook: "Positive" | "Neutral" | "Negative";
  keyTrends: string[];

  recommendedSkills: string[];

  lastUpdated: string; // or Date
  nextUpdate: string; // or Date
}
