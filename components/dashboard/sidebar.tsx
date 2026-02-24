"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Activity,
  Settings2,
  BarChart3,
  User,
  Cog,
  SunMedium,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const systemLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Diagnostics", href: "/dashboard/diagnostics", icon: Activity },
  { label: "Control", href: "/dashboard/control", icon: Settings2 },
  { label: "Historical Data", href: "/dashboard/history", icon: BarChart3 },
]

const accountLinks = [
  { label: "Profile", href: "/dashboard/profile", icon: User },
  { label: "User Settings", href: "/dashboard/profile", icon: Cog },
  { label: "PV System", href: "/dashboard/control", icon: SunMedium },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "glass-sidebar relative flex flex-col h-full transition-all duration-300",
        collapsed ? "w-16" : "w-56"
      )}
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 z-10 w-6 h-6 rounded-full bg-primary/20 border border-border flex items-center justify-center text-primary hover:bg-primary/30 transition-all"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>

      <div className="flex-1 py-6 overflow-y-auto">
        {/* System Section */}
        <div className="px-4 mb-6">
          {!collapsed && (
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
              System
            </h3>
          )}
          <nav className="space-y-1">
            {systemLinks.map((link) => {
              const isActive = pathname === link.href
              const Icon = link.icon
              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                    collapsed && "justify-center px-0",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <span className="relative">
                    <Icon className="w-4 h-4" />
                    {isActive && (
                      <span className="absolute -left-1.5 -top-1.5 w-1.5 h-1.5 rounded-full bg-primary status-pulse" />
                    )}
                  </span>
                  {!collapsed && <span>{link.label}</span>}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Account Section */}
        <div className="px-4">
          {!collapsed && (
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Account
            </h3>
          )}
          <nav className="space-y-1">
            {accountLinks.map((link, i) => {
              const isActive = pathname === link.href && i === 0
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                    collapsed && "justify-center px-0",
                    isActive
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {!collapsed && <span>{link.label}</span>}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={() => router.push("/")}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm w-full transition-all duration-200 text-destructive/80 hover:text-destructive hover:bg-destructive/10",
            collapsed && "justify-center px-0"
          )}
        >
          <LogOut className="w-4 h-4" />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </aside>
  )
}
