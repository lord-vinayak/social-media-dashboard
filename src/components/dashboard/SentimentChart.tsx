import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import GlassCard from "../GlassCard";

const data = [
  { day: "Mon", positive: 40, negative: 20 },
  { day: "Tue", positive: 55, negative: 18 },
  { day: "Wed", positive: 48, negative: 30 },
  { day: "Thu", positive: 60, negative: 15 },
  { day: "Fri", positive: 52, negative: 22 },
];

export default function SentimentChart() {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">Sentiment Trend</h3>

      <ResponsiveContainer width="100%" height={260}>
       <LineChart data={data}>
  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
  <XAxis dataKey="day" />
  <YAxis tickFormatter={(v) => `${v}%`} />
  <Tooltip />
  <Legend verticalAlign="bottom" />

  <Line
    type="monotone"
    dataKey="positive"
    stroke="#22c55e"
    strokeWidth={2}
    dot={{ r: 4 }}
  />
  <Line
    type="monotone"
    dataKey="neutral"
    stroke="#64748b"
    strokeWidth={2}
    dot={{ r: 4 }}
  />
  <Line
    type="monotone"
    dataKey="negative"
    stroke="#ef4444"
    strokeWidth={2}
    dot={{ r: 4 }}
  />
</LineChart>

      </ResponsiveContainer>
    </GlassCard>
  );
}
