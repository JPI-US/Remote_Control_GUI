'use client';
import Dashboard from '@/components/dashboard';
import { useParams } from 'next/navigation';

/* export const metadata = {
  title: "Janta Power ⋅ Dashboard",
};
 */
export default function DashboardPage() {
  const { powerID } = useParams();
  return (
    <div>
      <Dashboard powerID={powerID}/>
    </div>
  );
}
