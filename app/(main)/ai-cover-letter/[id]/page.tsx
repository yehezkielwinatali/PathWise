import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import CoverLetterPreview from "../_components/cover-letter-preview";
import { getCoverLetter } from "@/actions/cover-letter";

const CoverLetter = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const coverLetter = await getCoverLetter(id);
  return (
    <div className="container mx-auto py-2">
      <div className="flex flex-col space-y-2">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0 ml-4 cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className="text-6xl font-bold gradient-title mb-4 ml-9">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
      </div>
      <div className="px-8">
        <CoverLetterPreview content={coverLetter?.content ?? ""} />
      </div>
    </div>
  );
};

export default CoverLetter;
