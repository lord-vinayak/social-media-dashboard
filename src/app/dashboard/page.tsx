"use client";

import { useEffect, useState } from "react";
import BrandHealthCard from "@/components/dashboard/BrandHealthCard";
import SentimentChart from "@/components/dashboard/SentimentChart";
import EmotionChart from "@/components/dashboard/EmotionChart";
import ActionCard from "@/components/dashboard/ActionCard";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import TopConcernsCard from "@/components/dashboard/TopConcernsCard";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 900); // fake load
  }, []);

  if (loading) return <DashboardSkeleton />;

  return (
    <div className="space-y-8">
      {/* KPI ROW */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BrandHealthCard />
        <BrandHealthCard variant="risk" />
        <BrandHealthCard variant="sentiment" />
      </section>

      {/* CHARTS */}
      {/* ROW 1: Sentiment Trend */}
<section>
  <SentimentChart />
</section>

{/* ROW 2: Concerns + Emotion */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <TopConcernsCard />
  <EmotionChart />
</section>

      {/* ACTIONS */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          AI Suggested Actions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            id="pause"
            title="Pause Public Replies"
            risk="high"
            reason="Negative sentiment spike detected"
          />
          <ActionCard
            id="apology"
            title="Draft Apology Post"
            risk="medium"
            reason="Repeated data privacy complaints"
          />
          <ActionCard
            id="engage"
            title="Engage Carefully"
            risk="low"
            reason="Confused but neutral audience"
          />
        </div>
      </section>
    </div>
  );
}
