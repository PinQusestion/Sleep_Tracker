'use client'
import React, { useEffect } from "react";
import { Header, Footer } from "../components";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/authContext";
function page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!user){
      router.push("/login");
    }
  }, []);
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full text-left text-white flex flex-1 flex-col mt-10 gap-2 px-[160px] py-[20px]">
        <h1 className="text-3xl font-bold">Sleep Dashboard</h1>
        <p className="text-sm text-[#A1ADBA]">Your sleep data at a glance.</p>
        <div className="w-full flex mt-5 gap-5">
          <div className="w-[298.67px] bg-[#2e363e] p-6 rounded-xl justify-between text-left">
            <h3 className="text-[16px] font-semibold">Average Sleep Duration</h3>
            <h3 className="text-2xl font-extrabold mt-2">7h 30min</h3>
          </div>
          <div className="w-[298.67px] bg-[#2e363e] p-6 rounded-xl justify-between text-left">
            <h3 className="text-[16px] font-semibold">Sleep Score</h3>
            <h3 className="text-2xl font-extrabold mt-2">85</h3>
          </div>
          <div className="w-[298.67px] bg-[#2e363e] p-6 rounded-xl justify-between text-left">
            <h3 className="text-[16px] font-semibold">Total Sleep This Week</h3>
            <h3 className="text-2xl font-extrabold mt-2">52h 36min</h3>
          </div>
        </div>
        <div className="w-full mt-10">
          <h1 className="text-[22px] font-bold">Sleep Trends</h1>
          <div className="w-full flex mt-5 justify-between">
            <div>
              <h3 className="text-sm font-semibold">Sleep Duration Over Time</h3>
              <h3 className="text-3xl font-bold mt-2">7h 30min</h3>
              <p className="text-sm text-[#A1ADBA] mt-2">Last 7 days <span className="text-green-400 font-extrabold">+15%</span></p>
              <img src="/graph_1.png" alt="graph_1" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Sleep Quality Distribution</h3>
              <h3 className="text-3xl font-bold mt-2">85</h3>
              <p className="text-sm text-[#A1ADBA] mt-2">Last 7 days <span className="text-green-400 font-extrabold">+5%</span></p>
              <img src="/graph_2.png" alt="graph_2" className="mt-5"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
