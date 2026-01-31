"use client";

import { useState } from "react";
import PremiumButton from "@/components/PremiumButton";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex bg-[#FAFBFC]">
      
      {/* LEFT – SIGNUP PANEL */}
      <div className="w-full lg:w-2/5 bg-white flex items-center justify-center px-8">
        <div className="w-full max-w-[420px]">

          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
              <span className="text-white font-semibold text-lg">AI</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] font-semibold text-center text-[#1A202C] mb-2">
            Create your account
          </h1>
          <p className="text-sm text-center text-[#64748B] mb-10">
            Start monitoring your brand with AI
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full name"
              className="
                w-full h-[46px] px-4 rounded-lg
                bg-[#F8FAFC]
                border border-[#E2E8F0]
                text-[#0F172A]
                placeholder:text-[#94A3B8]
                focus:outline-none
                focus:ring-2 focus:ring-[#2563EB]/20
                focus:border-[#2563EB]
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Work email"
              className="
                w-full h-[46px] px-4 rounded-lg
                bg-[#F8FAFC]
                border border-[#E2E8F0]
                text-[#0F172A]
                placeholder:text-[#94A3B8]
                focus:outline-none
                focus:ring-2 focus:ring-[#2563EB]/20
                focus:border-[#2563EB]
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Create password"
              className="
                w-full h-[46px] px-4 rounded-lg
                bg-[#F8FAFC]
                border border-[#E2E8F0]
                text-[#0F172A]
                placeholder:text-[#94A3B8]
                focus:outline-none
                focus:ring-2 focus:ring-[#2563EB]/20
                focus:border-[#2563EB]
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PremiumButton variant="primary" fullWidth>
              Create account
            </PremiumButton>
          </form>

          {/* SWITCH TO LOGIN */}
          <p className="mt-8 text-center text-sm text-[#64748B]">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#2563EB] font-medium hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT – GRADIENT (SAME AS LOGIN) */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden items-center justify-center">
        
        {/* animated gradient blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-teal-300/30 rounded-full blur-[140px] animate-pulse delay-1000" />
        </div>

        {/* content */}
        <div className="relative z-10 max-w-xl text-center px-10">
          <h2 className="text-4xl font-semibold text-[#1A202C] mb-6">
            AI-Powered Brand Intelligence
          </h2>
          <p className="text-lg text-[#4A5568] leading-relaxed">
            Monitor social sentiment, manage PR crises, and protect your brand
            reputation with human-verified AI recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
