"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import QuizResult from "./quiz-result";
import { motion } from "framer-motion";

interface Assessment {
  id: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  quizScore: number;
  questions: any[];
  improvementTip: string | null;
}

interface QuizListProps {
  assessments: Assessment[];
}

// Framer Motion variants
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const QuizList: React.FC<QuizListProps> = ({ assessments }) => {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState<Assessment | null>(null);

  return (
    <>
      <motion.div variants={containerVariant} initial="hidden" animate="show">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="gradient-title text-3xl md:text-4xl pb-2">
                  Recent Quizzes
                </CardTitle>
                <CardDescription>
                  Review your past quiz performance
                </CardDescription>
              </div>
              <Button
                className="cursor-pointer"
                onClick={() => router.push("/interview/mock")}
              >
                Start New Quiz
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <motion.div className="space-y-5">
              {assessments?.map((assessment, i) => (
                <motion.div key={assessment.id} variants={itemVariant}>
                  <Card
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => setSelectedQuiz(assessment)}
                  >
                    <CardHeader>
                      <CardTitle className="gradient-title text-2xl">
                        Quiz {i + 1}
                      </CardTitle>
                      <CardDescription className="flex justify-between w-full">
                        <div>Score: {assessment.quizScore.toFixed(1)}%</div>
                        <div>
                          {format(
                            new Date(assessment.createdAt),
                            "MMMM dd, yyyy HH:mm"
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    {assessment.improvementTip && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {assessment.improvementTip}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedQuiz && (
            <QuizResult
              result={{
                ...selectedQuiz,
                improvementTip: selectedQuiz.improvementTip ?? undefined,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizList;
