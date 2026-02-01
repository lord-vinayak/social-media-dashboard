"use client";

import React from "react";

type BadgeVariant =
  | "sensitive"
  | "normal"
  | "crisis"
  | "medium-risk"
  | "high-risk"
  | "low-risk";

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  large?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  sensitive: "bg-orange-100 text-orange-600",
  normal: "bg-emerald-100 text-emerald-600",
  crisis: "bg-red-100 text-red-600",
  "medium-risk": "bg-amber-100 text-amber-600",
  "high-risk": "bg-red-100 text-red-600",
  "low-risk": "bg-emerald-100 text-emerald-600",
};

export default function StatusBadge({
  variant,
  children,
  large = false,
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-md font-medium
        ${large ? "px-5 py-2 text-sm" : "px-3 py-1 text-xs"}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
