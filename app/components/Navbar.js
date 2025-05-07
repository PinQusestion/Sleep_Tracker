import React from "react";
import { UserCircle } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full grid grid-cols-5 px-20 items-center text-[#fefefe]">
      <Link href="/"><h1 className="font-bold text-4xl">trackeep.</h1></Link>
      <div className="bg-[#1d2028] flex px-[80] col-span-3 py-[20] rounded-4xl gap-[64] text-[18px] justify-center">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tips">Tips for Sleep</Link>
        <Link href="/guide">Guide</Link>
      </div>
      <div className="flex justify-end">
      <UserCircle size={48} className="" />
      </div>
    </div>
  );
}

export default Navbar;
