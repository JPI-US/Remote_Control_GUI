"use client"

import { GlassCard } from "./glass-card"
import { Droplets, Thermometer, Zap, TrendingUp } from "lucide-react"

const envStats = [
  { label: "Humidity", value: "52%", icon: Droplets, cssVar: "--status-blue" },
  { label: "Temperature", value: "9\u00b0C", icon: Thermometer, cssVar: "--status-red" },
]

const perfStats = [
  { label: "Daily Power", value: "7 kW", icon: Zap, cssVar: "--accent" },
  { label: "Power Output", value: "42.5%", icon: TrendingUp, cssVar: "--primary" },
]

export function TodayAtAGlance() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Environment */}
        <div className="col-span-2 md:col-span-2">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Environment</p>
          <div className="grid grid-cols-2 gap-3">
            {envStats.map((stat) => {
              const Icon = stat.icon
              return (
                <GlassCard key={stat.label} className="!p-4 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `color-mix(in srgb, var(${stat.cssVar}) 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, var(${stat.cssVar}) 20%, transparent)`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: `var(${stat.cssVar})` }} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>

        {/* Performance */}
        <div className="col-span-2 md:col-span-2">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Performance</p>
          <div className="grid grid-cols-2 gap-3">
            {perfStats.map((stat) => {
              const Icon = stat.icon
              return (
                <GlassCard key={stat.label} className="!p-4 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `color-mix(in srgb, var(${stat.cssVar}) 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, var(${stat.cssVar}) 20%, transparent)`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: `var(${stat.cssVar})` }} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
