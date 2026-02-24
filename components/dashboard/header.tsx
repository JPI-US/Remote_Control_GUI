"use client"

import { Search, Moon, Sun, Menu, FileText } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Header({ onToggleMobile }: { onToggleMobile: () => void }) {
  const [time, setTime] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }) + " CST"
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="glass-header h-14 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMobile}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold tracking-wider text-foreground">
          JANTA <span className="text-primary">POWER</span>
        </h1>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <span>Patrick Home</span>
          <span className="text-primary">{">"}</span>
          <span className="font-mono text-secondary-foreground">{time}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          aria-label="View reports"
        >
          <FileText className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
