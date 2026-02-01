"use client";

import { useState, useEffect } from "react";
import GlassCard from "../GlassCard";
import Toast from "@/components/Toast";

export default function ActionCard({
  id,
  title,
  risk,
  reason,
}: any) {
  const [status, setStatus] = useState("pending");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`action-${id}`);
    if (saved) setStatus(saved);
  }, [id]);

  const update = (value: string) => {
    setStatus(value);
    localStorage.setItem(`action-${id}`, value);

    if (value === "approved") setToast("Action approved successfully");
    if (value === "edited") setToast("Action marked for editing");
    if (value === "rejected") setToast("Action rejected");
  };

  return (
    <>
      <GlassCard className="space-y-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-slate-600">{reason}</p>

        <p className="text-xs">
          Risk: <span className="font-semibold">{risk}</span>
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => update("approved")}
            className="px-3 py-1 text-sm rounded bg-emerald-500 text-white"
          >
            Approve
          </button>

          <button
            onClick={() => update("edited")}
            className="px-3 py-1 text-sm rounded bg-sky-500 text-white"
          >
            Edit
          </button>

          <button
            onClick={() => update("rejected")}
            className="px-3 py-1 text-sm rounded bg-red-500 text-white"
          >
            Reject
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Status: <b>{status}</b>
        </p>
      </GlassCard>

      {/* TOAST RENDER */}
      {toast && (
        <Toast
          message={toast}
          type={status === "rejected" ? "error" : "success"}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
