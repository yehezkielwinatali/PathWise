import { getResume } from "@/actions/resume";
import React from "react";
import ResumeBuilder from "./_components/resume-builder";

const ResumePage = async () => {
  const resume = await getResume();

  return (
    <div className="container mx-auto py-6 px-5">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
};

export default ResumePage;
