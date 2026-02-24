"use client"

import { GlassCard } from "@/components/dashboard/glass-card"
import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts"

const dailyData = Array.from({ length: 30 }, (_, i) => ({
  day: `${i + 1}`,
  power: Math.round((3 + Math.random() * 5) * 10) / 10,
}))

const monthlyData = [
  { day: "Jan", power: 120 },
  { day: "Feb", power: 145 },
  { day: "Mar", power: 180 },
  { day: "Apr", power: 210 },
  { day: "May", power: 240 },
  { day: "Jun", power: 280 },
  { day: "Jul", power: 300 },
  { day: "Aug", power: 290 },
  { day: "Sep", power: 250 },
  { day: "Oct", power: 200 },
  { day: "Nov", power: 160 },
  { day: "Dec", power: 130 },
]

const yearlyData = [
  { day: "2020", power: 1800 },
  { day: "2021", power: 2200 },
  { day: "2022", power: 2600 },
  { day: "2023", power: 2900 },
  { day: "2024", power: 3200 },
  { day: "2025", power: 3484 },
]

type TabKey = "daily" | "monthly" | "yearly"

const tabs: { key: TabKey; label: string }[] = [
  { key: "daily", label: "Daily" },
  { key: "monthly", label: "Monthly" },
  { key: "yearly", label: "Yearly" },
]

const datasets: Record<TabKey, typeof dailyData> = {
  daily: dailyData,
  monthly: monthlyData,
  yearly: yearlyData,
}

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("daily")

  return (
    <div className="space-y-6 max-w-5xl">
      <h2 className="text-xl font-bold tracking-wider uppercase text-foreground">
        Historical Data
      </h2>

      <GlassCard className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Historical Power Data</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Energy production over time</p>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-accent/20 text-accent border border-accent/30 shadow-[0_0_12px_rgba(243,182,100,0.1)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datasets[activeTab]}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "var(--chart-text)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "var(--chart-text)" }}
                width={35}
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
                cursor={{ fill: "var(--muted)" }}
              />
              <Bar
                dataKey="power"
                fill="url(#barGrad)"
                radius={[4, 4, 0, 0]}
                maxBarSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>
            {"Total: "}
            <span className="text-accent font-semibold">
              {datasets[activeTab].reduce((s, d) => s + d.power, 0).toFixed(1)} kWh
            </span>
          </span>
          <span>
            {"Avg: "}
            <span className="text-primary font-semibold">
              {(
                datasets[activeTab].reduce((s, d) => s + d.power, 0) /
                datasets[activeTab].length
              ).toFixed(1)}{" "}
              kWh
            </span>
          </span>
        </div>
      </GlassCard>
    </div>
  )
}
