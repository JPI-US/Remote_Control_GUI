import { TowerStatus } from "@/components/dashboard/tower-status"
import { TodayAtAGlance } from "@/components/dashboard/today-glance"
import { CarbonSaved } from "@/components/dashboard/carbon-saved"
import { TodaysChart } from "@/components/dashboard/todays-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <h2 className="text-xl font-bold tracking-wider uppercase text-foreground">
        Tower Status
      </h2>

      <TowerStatus />

      <h2 className="text-xl font-bold tracking-wider uppercase text-foreground">
        Today at a Glance
      </h2>

      <TodayAtAGlance />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CarbonSaved />
        <TodaysChart />
      </div>
    </div>
  )
}
