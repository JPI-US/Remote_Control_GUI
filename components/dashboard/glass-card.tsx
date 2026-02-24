import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-5 transition-all duration-300",
        hover && "hover:shadow-[0_0_20px_rgba(42,157,143,0.06)]",
        className
      )}
    >
      {children}
    </div>
  )
}
