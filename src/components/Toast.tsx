"use client";

import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

export default function Toast({
  message,
  type = "success",
  onClose,
}: {
  message: string;
  type?: ToastType;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-emerald-500/90",
    error: "bg-red-500/90",
    info: "bg-slate-900/90",
  };

  return (
    <div className="fixed top-6 right-6 z-[100]">
      <div
        className={`
          ${styles[type]}
          text-white px-5 py-3 rounded-xl shadow-lg
          backdrop-blur-md
          animate-in slide-in-from-top-2 fade-in
        `}
      >
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
