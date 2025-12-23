'use client';
import HIstorical from '@/components/historical';
import { useParams } from 'next/navigation';

/* export const metadata = {
  title: "Janta Power ⋅  Portal",
}; */

export default function HistoricalPage() {
  const { powerID } = useParams();
  return (
    <div>
      <HIstorical powerID={powerID}/>
    </div>
  );
}
