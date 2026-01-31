"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        relative
        bg-white/55
        backdrop-blur-[28px]
        border border-white/60
        rounded-[32px]
        shadow-[0_20px_60px_rgba(15,23,42,0.15)]
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
