"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import GlassCard from "../GlassCard";

const data = [
  { name: "Frustration", value: 35, color: "#EF4444" },
  { name: "Satisfaction", value: 25, color: "#10B981" },
  { name: "Confusion", value: 20, color: "#F59E0B" },
  { name: "Neutral", value: 20, color: "#94A3B8" },
];

export default function EmotionChart() {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">Emotion Analysis</h3>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((item, i) => (
              <Cell key={i} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-slate-700">
              {item.name} — <b>{item.value}%</b>
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
