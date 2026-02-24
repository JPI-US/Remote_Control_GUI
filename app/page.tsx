"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  const bgImage = mounted && resolvedTheme === "dark"
    ? "/images/solar-sunset-bg.png"
    : "/images/city-bg.jpg"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password.")
      return
    }

    setIsLoading(true)
    // Simulate authentication delay then navigate
    setTimeout(() => {
      router.push("/dashboard")
    }, 800)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - swaps with theme */}
      <Image
        key={bgImage}
        src={bgImage}
        alt={resolvedTheme === "dark" ? "Solar panels at sunset" : "City skyline background"}
        fill
        className="object-cover transition-opacity duration-700"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Floating light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-accent/8 blur-[80px]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="glass-panel-strong rounded-2xl p-8 md:p-10">
          {/* Inner glow ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-foreground/[0.04] to-transparent pointer-events-none" />

          <div className="relative space-y-8">
            {/* Logo */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-wider text-foreground">
                JANTA <span className="text-primary">POWER</span>
              </h1>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] pt-1">Sign In</p>
            </div>

            {/* Error */}
            {error && (
              <div className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2.5 text-center">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wider" htmlFor="email">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="glass-input w-full pl-11 pr-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wider" htmlFor="password">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="glass-input w-full pl-11 pr-11 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded bg-transparent border border-border accent-primary" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="glass-button w-full py-3 rounded-xl text-sm font-semibold text-primary-foreground uppercase tracking-wider disabled:opacity-50 transition-all"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-muted-foreground">
              {"Don't have an account? "}
              <button type="button" className="text-primary hover:text-primary/80 transition-colors">
                Contact Admin
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
