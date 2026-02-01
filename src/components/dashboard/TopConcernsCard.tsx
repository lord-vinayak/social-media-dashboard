"use client";

import GlassCard from "../GlassCard";

const concerns = [
  { label: "Data Privacy Issues", count: 142, color: "#10B981" },
  { label: "Pricing Complaints", count: 89, color: "#EF4444" },
  { label: "Service Delays", count: 67, color: "#F59E0B" },
];

export default function TopConcernsCard() {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">Top Concerns</h3>

      <div className="space-y-4">
        {concerns.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: c.color }}
            />
            <span className="flex-1 text-sm text-slate-800">
              {c.label}
            </span>
            <span className="text-xs text-slate-500">
              {c.count}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
