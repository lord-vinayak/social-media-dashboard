"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PremiumButton from "./PremiumButton";
import FormInput from "./FormInput";
import { login } from "@/lib/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const validateForm = (): boolean => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call - Replace with actual authentication API
      await new Promise((res) => setTimeout(res, 1200));

      // In production, validate credentials with backend API
      // For now, accept any valid email/password
      login(email);

      // Navigate to dashboard
      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FAFBFC]">
      {/* LEFT – LOGIN PANEL */}
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
            Welcome back
          </h1>
          <p className="text-sm text-center text-[#64748B] mb-10">
            Sign in to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <FormInput
              type="email"
              placeholder="your@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PremiumButton
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </PremiumButton>
          </form>

          {/* SWITCH TO SIGN UP */}
          <p className="mt-8 text-center text-sm text-[#64748B]">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#2563EB] font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT – GRADIENT */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-teal-300/30 rounded-full blur-[140px] animate-pulse delay-1000" />
        </div>

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
