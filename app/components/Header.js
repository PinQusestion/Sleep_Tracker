import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full grid grid-cols-5 px-20 items-center text-[#fefefe]">
      <Link href="/">
        <h1 className="font-bold text-4xl">trackeep.</h1>
      </Link>
      <div className="bg-[#1d2028] flex px-[80] col-span-3 py-[20] rounded-4xl gap-[64] text-[18px] justify-center">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tips">Tips for Sleep</Link>
        <Link href="/guide">Guide</Link>
      </div>
      <div className="flex justify-end gap-3">
        <Link href="/login">
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-blue-700 transition">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
