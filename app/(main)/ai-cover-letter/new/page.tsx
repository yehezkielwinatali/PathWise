import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";

export default function NewCoverLetterPage() {
  return (
    <div className="container mx-auto py-2">
      <div className="flex flex-col space-y-1">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0 ml-5 cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <div className="pb-6">
          <h1 className="text-6xl font-bold gradient tracking-tighter text-transparent bg-clip-text pb-2 pr-2 mb-1 pl-8">
            Create Cover Letter
          </h1>
          <p className="text-muted-foreground pl-9">
            Generate a tailored cover letter for your job application
          </p>
        </div>
      </div>
      <div className="px-8">
        <CoverLetterGenerator />
      </div>
    </div>
  );
}
