"use client";
import React, { useState } from "react";
import { signUp } from "../../lib/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

function page() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push("/login");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          Create Account
        </h2>
        <p className="text-center text-gray-400 mb-6">Sign up to get started</p>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Full Name
            </label>
            <div className="flex items-center bg-gray-700 rounded-md p-2">
              <User className="h-5 w-5 mr-2 text-gray-400" />
              <input
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Email Address
            </label>
            <div className="flex items-center bg-gray-700 rounded-md p-2">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Password
            </label>
            <div className="flex items-center bg-gray-700 rounded-md p-2">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Confirm Password
            </label>
            <div className="flex items-center bg-gray-700 rounded-md p-2">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="text-sm text-gray-400 flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 flex justify-center items-center rounded-md font-semibold text-white hover:opacity-90 transition"
          >
            Create Account
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login">
            <button className="text-blue-400 hover:underline">Sign In</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
