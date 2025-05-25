import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center pt-18">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
