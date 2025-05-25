import { getCoverLetters } from "@/actions/cover-letter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import CoverLetterList from "./_components/cover-letter-list";

const AICoverLettersPage = async () => {
  const coverLetters = await getCoverLetters();

  return (
    <div className="px-8">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient tracking-tighter text-transparent bg-clip-text pb-2 pr-2">
          My Cover Letters
        </h1>
        <Link href="/ai-cover-letter/new">
          <Button className="cursor-pointer">
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
};

export default AICoverLettersPage;
