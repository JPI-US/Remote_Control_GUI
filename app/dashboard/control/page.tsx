"use client"

import { GlassCard } from "@/components/dashboard/glass-card"
import { useState } from "react"
import { Play, RotateCcw, Square, AlertTriangle, Home } from "lucide-react"

const controlButtons = [
  {
    label: "Start",
    description: "Power on tower and start automated tracking",
    icon: Play,
    cssVar: "--status-green",
  },
  {
    label: "Restart",
    description: "Reboot tower systems and recalibrate",
    icon: RotateCcw,
    cssVar: "--status-amber",
  },
  {
    label: "Stop",
    description: "Emergency stop all operations",
    icon: Square,
    cssVar: "--chart-5",
  },
  {
    label: "Reset",
    description: "Reset tower to default factory settings",
    icon: AlertTriangle,
    cssVar: "--status-red",
  },
  {
    label: "Home",
    description: "Return tower to home position",
    icon: Home,
    cssVar: "--status-blue",
  },
]

export default function ControlPage() {
  const [mode, setMode] = useState<"autonomous" | "maintenance">("autonomous")
  const [angle, setAngle] = useState(177)

  return (
    <div className="space-y-6 max-w-5xl">
      <h2 className="text-xl font-bold tracking-wider uppercase text-foreground">
        System Controls
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tower Orientation */}
        <GlassCard className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Tower Orientation</h3>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
            {/* SVG illustration of a solar panel */}
            <svg viewBox="0 0 400 300" className="w-full h-full" aria-label="Solar panel tower illustration">
              {/* Sky gradient */}
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="var(--background)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect fill="url(#skyGrad)" width="400" height="300" />
              {/* Ground */}
              <rect y="240" width="400" height="60" fill="var(--primary)" opacity="0.08" rx="4" />
              {/* Tower pole */}
              <rect x="192" y="100" width="16" height="150" rx="4" fill="var(--muted-foreground)" opacity="0.3" />
              {/* Panel */}
              <g transform={`rotate(${angle - 180} 200 100)`}>
                <rect x="120" y="80" width="160" height="40" rx="4" fill="var(--primary)" opacity="0.5" />
                <rect x="122" y="82" width="38" height="36" rx="2" fill="var(--primary)" opacity="0.8" />
                <rect x="162" y="82" width="38" height="36" rx="2" fill="var(--primary)" opacity="0.8" />
                <rect x="202" y="82" width="38" height="36" rx="2" fill="var(--primary)" opacity="0.8" />
                <rect x="242" y="82" width="36" height="36" rx="2" fill="var(--primary)" opacity="0.8" />
              </g>
              {/* Sun indicator */}
              <circle cx="320" cy="50" r="20" fill="var(--accent)" opacity="0.3" />
              <circle cx="320" cy="50" r="10" fill="var(--accent)" opacity="0.6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-accent">{angle}°</span>
              <input
                type="range"
                min={0}
                max={360}
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-32 h-1 appearance-none rounded-full bg-border accent-accent"
                aria-label="Tower angle"
              />
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("autonomous")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                mode === "autonomous"
                  ? "bg-primary/10 text-primary border border-primary/25"
                  : "bg-secondary text-muted-foreground border border-transparent"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${mode === "autonomous" ? "bg-primary status-pulse" : "bg-muted-foreground"}`} />
              Autonomous
            </button>
            <button
              onClick={() => setMode("maintenance")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                mode === "maintenance"
                  ? "bg-destructive/10 text-destructive border border-destructive/25"
                  : "bg-secondary text-muted-foreground border border-transparent"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${mode === "maintenance" ? "bg-destructive status-pulse" : "bg-muted-foreground"}`} />
              Maintenance
            </button>
          </div>
        </GlassCard>

        {/* Control Panel */}
        <GlassCard className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground mb-2">Control Panel</h3>

          {controlButtons.map((btn) => {
            const Icon = btn.icon
            return (
              <button
                key={btn.label}
                className="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:scale-[1.01] border"
                style={{
                  background: `color-mix(in srgb, var(${btn.cssVar}) 12%, transparent)`,
                  borderColor: `color-mix(in srgb, var(${btn.cssVar}) 25%, transparent)`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `color-mix(in srgb, var(${btn.cssVar}) 18%, transparent)` }}
                >
                  <Icon className="w-4 h-4" style={{ color: `var(${btn.cssVar})` }} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: `var(${btn.cssVar})` }}>
                    {btn.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{btn.description}</p>
                </div>
              </button>
            )
          })}
        </GlassCard>
      </div>
    </div>
  )
}
