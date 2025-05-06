import { UserCircle } from "lucide-react";
import Image from "next/image";
import moon from "../public/image/moon.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0a0e18] flex flex-col items-center justify-items-center min-h-screen pt-10">
      <div className="w-full flex flex-row justify-around items-center text-[#fefefe]">
        <h1 className="font-bold text-4xl">trackeep.</h1>
        <div className="bg-[#1d2028] flex flex-row px-[80] py-[20] rounded-4xl gap-[64] text-[18px]">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tips">Tips for Sleep</Link>
          <Link href="/guide">Guide</Link>
        </div>
        <UserCircle size={48} className="right-0" />
      </div>

      <div className="w-screen flex justify-center items-center mt-18">
        <Image src={moon} alt="Moon" width="383px" height="284px" />
      </div>

      <div>
        <h1 className="text-white font-bold text-center text-5xl mt-0">
          Sleep. Track. Improve
        </h1>
      </div>
    </div>
  );
}
