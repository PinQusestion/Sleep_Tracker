import Image from "next/image";
import moon from "../public/image/moon.png";
import Navbar from "./components/Header";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-[#0a0e18] flex flex-col items-center justify-items-center min-h-screen pt-20 font-[switzer variable]">
      <Navbar />
      <div className="w-full flex justify-center items-center mt-18">
        <Image
          src={moon}
          alt="Moon"
          width="383px"
          height="284px"
          className="m-10"
        />
      </div>

      <div className="w-full text-white text-center mt-5">
        <h1 className= "font-bold text-6xl">
          Sleep. Track. Improve
        </h1>
        <p className="mt-3">Enhance your sleep quality, schedules and be at your best</p>
        <Link href="/home"><button className="bg-white text-black py-2 px-5 rounded-2xl mt-8 hover:cursor-pointer">Get Started</button></Link>
      </div>
    </div>
  );
}
