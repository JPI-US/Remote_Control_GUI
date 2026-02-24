"use client"

import { GlassCard } from "./glass-card"
import { Leaf } from "lucide-react"

export function CarbonSaved() {
  return (
    <GlassCard className="flex items-center gap-5">
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "color-mix(in srgb, var(--status-green) 10%, transparent)",
            border: "1px solid color-mix(in srgb, var(--status-green) 20%, transparent)",
          }}
        >
          <Leaf className="w-7 h-7" style={{ color: "var(--status-green)" }} />
        </div>
        <div className="absolute inset-0 rounded-full blur-md" style={{ background: "color-mix(in srgb, var(--status-green) 5%, transparent)" }} />
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">
          3484.42 <span className="text-sm font-normal text-muted-foreground">kg CO</span>
          <sub className="text-[10px] text-muted-foreground">2</sub>
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--status-green)" }}>Carbon Saved</p>
      </div>
    </GlassCard>
  )
}
