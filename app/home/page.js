'use client';

import React from "react";
import { Header } from "../components";
import { useRouter } from "next/navigation";

function page() {

    const router = useRouter();

  return (
    <div>
      <Header />
      <div className="flex flex-col mt-10 justify-self-center justify-center items-center gap-5">
        <h1>Welcome you have successfully logged in!</h1>
        <p>Lets explore the app, Shall We?</p>
        <button onClick={() => router.push("/dashboard")} className="w-fit bg-blue-500 py-2 px-4 rounded-xl hover:cursor-pointer">Get Started</button>
      </div>
    </div>
  );
}

export default page;
