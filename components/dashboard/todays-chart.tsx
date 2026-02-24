"use client"

import { GlassCard } from "./glass-card"
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { time: "6am", power: 0.2 },
  { time: "8am", power: 1.8 },
  { time: "10am", power: 4.2 },
  { time: "12pm", power: 5.9 },
  { time: "2pm", power: 5.4 },
  { time: "4pm", power: 3.1 },
  { time: "6pm", power: 1.0 },
  { time: "8pm", power: 0.1 },
]

export function TodaysChart() {
  return (
    <GlassCard>
      <h3 className="text-sm font-semibold text-foreground mb-4">{"Today's Data"}</h3>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "var(--chart-text)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "var(--chart-text)" }}
              domain={[0, 7]}
              width={25}
            />
            <Tooltip
              contentStyle={{
                background: "var(--tooltip-bg)",
                border: "1px solid var(--tooltip-border)",
                borderRadius: "8px",
                backdropFilter: "blur(12px)",
                color: "var(--tooltip-text)",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="power"
              stroke="var(--accent)"
              strokeWidth={2}
              fill="url(#powerGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}
