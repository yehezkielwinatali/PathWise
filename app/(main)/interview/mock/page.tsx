import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Quiz from "../_component/quiz";

const MockInterviewPage = () => {
  return (
    <div className="container mx-auto space-y-4 py-1">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href={"/interview"}>
          <Button variant={"link"} className="gap-2 pl-0 cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>
        <div className="px-5">
          <h1 className="text-6xl font-bold gradient tracking-tighter text-transparent bg-clip-text pb-2 pr-2 ">
            Mock Inteview
          </h1>
          <p className="text-muted-foreground">
            Dive into real-world scenarios to test your field-specific know-how
          </p>
        </div>
      </div>
      <div className="pt-15">
        <Quiz />
      </div>
    </div>
  );
};

export default MockInterviewPage;
