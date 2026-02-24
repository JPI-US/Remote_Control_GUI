"use client"

import { GlassCard } from "./glass-card"
import { Zap, RotateCw, Wifi, Server, Shield, Cpu } from "lucide-react"

const healthItems = [
  { label: "Inverter", status: "online", icon: Zap },
  { label: "Motor", status: "online", icon: RotateCw },
  { label: "Network", status: "online", icon: Wifi },
  { label: "PV Module", status: "warning", icon: Cpu },
  { label: "Controller", status: "online", icon: Server },
  { label: "Security", status: "online", icon: Shield },
]

export function TowerStatus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Power Output Gauge */}
      <GlassCard className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              className="stroke-border"
              strokeWidth="6"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#tealGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${(5.94 / 10) * 264} 264`}
              className="drop-shadow-[0_0_8px_rgba(42,157,143,0.4)]"
            />
            <defs>
              <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--status-green)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-primary">5.94</span>
            <span className="text-xs text-muted-foreground">KW</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Current Power Output</p>
      </GlassCard>

      {/* Tower Angle */}
      <GlassCard className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              className="stroke-border"
              strokeWidth="2"
            />
            {/* Compass markings */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="50"
                y1="12"
                x2="50"
                y2="16"
                className="stroke-muted-foreground/40"
                strokeWidth="1"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
            {/* Needle */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="18"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              transform="rotate(177 50 50)"
              className="drop-shadow-[0_0_6px_rgba(243,182,100,0.5)]"
            />
            <circle cx="50" cy="50" r="4" fill="var(--accent)" className="drop-shadow-[0_0_8px_rgba(243,182,100,0.4)]" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-8">
            <span className="text-xl font-bold text-accent">177</span>
            <span className="text-xs text-muted-foreground">degrees</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Tower Angle</p>
      </GlassCard>

      {/* System Health */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-foreground mb-4">System Health</h3>
        <div className="space-y-2.5">
          {healthItems.map((item) => {
            const Icon = item.icon
            const isOnline = item.status === "online"
            return (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-secondary-foreground">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full status-pulse"
                    style={{ backgroundColor: isOnline ? "var(--status-green)" : "var(--status-amber)" }}
                  />
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: isOnline ? "var(--status-green)" : "var(--status-amber)" }}
                  >
                    {isOnline ? "Online" : "Warning"}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </GlassCard>
    </div>
  )
}
