"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="liquid-bg min-h-screen flex flex-col">
      <Header onToggleMobile={() => setMobileOpen(!mobileOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile sidebar overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/70 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={cn(
            "fixed md:relative z-40 h-[calc(100vh-3.5rem)] transition-transform duration-300 md:translate-x-0",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
