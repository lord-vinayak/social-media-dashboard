"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface PremiumButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-[0px_2px_8px_rgba(59,130,246,0.2)]",
  secondary:
    "bg-transparent border border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC]",
  danger:
    "bg-[#EF4444] text-white hover:bg-[#DC2626] shadow-[0px_2px-8px_rgba(239,68,68,0.2)]",
};

export default function PremiumButton({
  variant,
  children,
  onClick,
  fullWidth = false,
  className = "",
  disabled = false,
  type = "submit",
}: PremiumButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-lg font-medium text-sm
        transition-all duration-200
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
