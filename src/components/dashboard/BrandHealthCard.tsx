// components/dashboard/BrandHealthCard.tsx

import GlassCard from "../GlassCard";

export default function BrandHealthCard({
  variant = "trust",
}: {
  variant?: "trust" | "risk" | "sentiment";
}) {
  const config = {
    trust: { label: "Trust Score", value: "78%", color: "text-emerald-600" },
    risk: { label: "Risk Level", value: "Medium", color: "text-amber-600" },
    sentiment: { label: "Sentiment", value: "Neutral", color: "text-sky-600" },
  };

  const item = config[variant];

  return (
    <GlassCard>
      <p className="text-sm text-slate-500">{item.label}</p>
      <p className={`text-3xl font-semibold ${item.color}`}>{item.value}</p>
    </GlassCard>
  );
}
