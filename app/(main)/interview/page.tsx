import { getAssessments } from "@/actions/interview";
import React from "react";
import StatsCards from "./_component/stats-cards";
import QuizList from "./_component/quiz-list";
import PerformanceChart from "./_component/performance-chart";

const InterviewPage = async () => {
  const assessments = await getAssessments();
  return (
    <div>
      <div className="flex items-center justify-between mb-4 pl-8">
        <h1 className="text-6xl font-bold gradient tracking-tighter text-transparent bg-clip-text pb-1 pr-2">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-12 px-8">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
