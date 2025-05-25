import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const LayoutResume = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5">
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
};

export default LayoutResume;
