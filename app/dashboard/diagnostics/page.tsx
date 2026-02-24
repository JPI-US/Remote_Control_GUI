"use client"

import { GlassCard } from "@/components/dashboard/glass-card"
import { Radio, ToggleRight, Gauge, Droplets, Thermometer, Shield } from "lucide-react"

const sensors = [
  {
    name: "Light Sensor",
    status: "Online",
    description: "Tracking solar irradiance levels",
    icon: Radio,
  },
  {
    name: "Relay",
    status: "Online",
    description: "Circuit switching and monitoring system",
    icon: ToggleRight,
  },
  {
    name: "Pressure Sensor",
    status: "Online",
    description: "Monitoring hydraulic pressure",
    icon: Gauge,
  },
  {
    name: "Humidity Sensor",
    status: "Online",
    description: "Ambient humidity level tracking",
    icon: Droplets,
  },
  {
    name: "Temperature Sensor",
    status: "Online",
    description: "Panel and ambient temperature",
    icon: Thermometer,
  },
  {
    name: "Limit Switches",
    status: "Online",
    description: "Safety cutouts and position limits",
    icon: Shield,
  },
]

export default function DiagnosticsPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <h2 className="text-xl font-bold tracking-wider uppercase text-foreground">
        System Diagnostics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sensors.map((sensor) => {
          const Icon = sensor.icon
          return (
            <GlassCard key={sensor.name} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{sensor.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{sensor.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full status-pulse" style={{ backgroundColor: "var(--status-green)" }} />
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: "var(--status-green)",
                    background: "color-mix(in srgb, var(--status-green) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--status-green) 20%, transparent)",
                  }}
                >
                  {sensor.status}
                </span>
              </div>
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}
