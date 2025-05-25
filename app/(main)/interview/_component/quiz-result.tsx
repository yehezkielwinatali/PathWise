"use client";

import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type QuizResultProps = {
  result: {
    quizScore: number;
    improvementTip?: string;
    questions: {
      question: string;
      userAnswer: string;
      answer: string;
      isCorrect: boolean;
      explanation: string;
    }[];
  };
  hideStartNew?: boolean;
  onStartNew?: () => void;
};

export default function QuizResult({
  result,
  hideStartNew = false,
  onStartNew,
}: QuizResultProps) {
  if (!result) return null;

  return (
    <div className="mx-auto">
      <div className="ml-6 mb-6">
        <h1 className="flex items-center gap-2 text-3xl gradient-title">
          <Trophy className="h-6 w-6 text-yellow-500" />
          Quiz Results
        </h1>
      </div>

      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">{result.quizScore.toFixed(1)}%</h3>
          <Progress value={result.quizScore} className="w-full" />
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Improvement Tip:</p>
            <p className="text-muted-foreground">{result.improvementTip}</p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="font-medium">Question Review</h3>
          {result.questions.map((q, index) => (
            <div key={index} className="border rounded-lg px-4 pb-7 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{q.question}</p>
                {q.isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-3" />
                ) : (
                  <XCircle className="mt-3 h-5 w-5 text-red-500 flex-shrink-0" />
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Your answer: {q.userAnswer}</p>
                {!q.isCorrect && <p>Correct answer: {q.answer}</p>}
              </div>
              <div className="text-sm bg-muted p-2 rounded">
                <p className="font-medium">Explanation:</p>
                <p>{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
