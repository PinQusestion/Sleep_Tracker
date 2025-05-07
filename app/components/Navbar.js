import React from "react";
import { UserCircle } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full flex flex-row justify-evenly items-center text-[#fefefe]">
      <h1 className="font-bold text-4xl">trackeep.</h1>
      <div className="bg-[#1d2028] flex flex-row px-[80] py-[20] rounded-4xl gap-[64] text-[15px] mr-2">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tips">Tips for Sleep</Link>
        <Link href="/guide">Guide</Link>
      </div>
      <UserCircle size={48} className="right-0" />
    </div>
  );
}

export default Navbar;
