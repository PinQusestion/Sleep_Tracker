import Link from "next/link";
import React from "react";
import Navbar from "../components/Header";

function page() {
  return (
    <div className="w-full pt-20 bg-[#0B0E16] min-h-screen">
      <Navbar />

      <div className="w-full flex flex-col justify-center mt-30 pl-44 font-[switzer variable]">
        <h1 className="text-5xl font-bold mb-10">Tracking Status</h1>
        <div className="w-full">
          {/* Showing the sleep debt */}
          <div className="w-[289] h-[289] bg-[#0D172C] rounded-full flex justify-center items-center border-solid border-[#2a2d35] border-25 border-e-[#4e27af]">
            <h4 className="font-bold text-4xl text-white">7hr 32min</h4>
          </div>
          {/* Describing about the sleep quality and comparison*/}
          <div className="w-1/2">
            <div>
              {/* Comparison */}
            </div>
            <div> {/* Sleep Quality */}</div>
            <div> {/* Remaining bed time */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
