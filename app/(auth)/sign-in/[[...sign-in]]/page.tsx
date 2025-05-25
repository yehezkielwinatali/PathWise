import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full pt-15">
      <SignIn />
    </div>
  );
};

export default SignInPage;
