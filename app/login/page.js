"use client";

import { useState } from "react";
import { logIn } from "../../lib/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      router.push("/home");
    } catch (err) {
      alert(err.message);
      router.push("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Sign in to your account to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Email Address
            </label>
            <div className="flex items-center bg-gray-700 rounded-md p-2">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Password
            </label>
            <div className="flex items-center bg-gray-700 rounded-md p-2">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link href="/forgetPass">
              <button className="text-blue-400 hover:underline">
                Forgot password?
              </button>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center py-2 rounded-md font-semibold text-white hover:opacity-90 transition"
          >
            Sign in
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup">
            <button className="text-blue-400 hover:underline">Register!</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
