"use client"

import { GlassCard } from "@/components/dashboard/glass-card"
import { User, Mail, Phone, Edit3 } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const profileData = {
    name: "Mohammad Salla",
    username: "MSalla",
    email: "msalla@jantus.com",
    phone: "(123) 456-789",
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-bold tracking-wider uppercase text-foreground">
        Account Details
      </h2>

      <GlassCard className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">M</span>
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background status-pulse" style={{ backgroundColor: "var(--status-green)" }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{profileData.name}</h3>
            <p className="text-xs text-muted-foreground">System Administrator</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Fields */}
        <div className="space-y-4">
          {[
            { label: "Username", value: profileData.username, icon: User },
            { label: "Email", value: profileData.email, icon: Mail },
            { label: "Phone", value: profileData.phone, icon: Phone },
          ].map((field) => {
            const Icon = field.icon
            return (
              <div
                key={field.label}
                className="flex items-center justify-between py-3 px-4 rounded-xl bg-secondary border border-border"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground w-20">{field.label}</span>
                </div>
                {isEditing ? (
                  <input
                    defaultValue={field.value}
                    className="glass-input px-3 py-1.5 rounded-lg text-sm text-foreground text-right focus:outline-none max-w-48"
                  />
                ) : (
                  <span className="text-sm text-primary">{field.value}</span>
                )}
              </div>
            )
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
              isEditing
                ? "bg-primary/15 text-primary border-primary/25 hover:bg-primary/25"
                : "bg-accent/15 text-accent border-accent/25 hover:bg-accent/25"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </GlassCard>
    </div>
  )
}
