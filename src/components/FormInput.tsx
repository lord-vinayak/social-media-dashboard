"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <input
        type={isPassword && show ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full h-[46px] px-4 pr-10 rounded-lg
          bg-[#F8FAFC]
          border border-[#E2E8F0]
          text-[#0F172A]
          placeholder:text-[#94A3B8]
          focus:outline-none
          focus:ring-2 focus:ring-[#2563EB]/20
          focus:border-[#2563EB]
        "
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}
