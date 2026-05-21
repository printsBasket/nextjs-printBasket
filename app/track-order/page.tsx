import { Metadata } from 'next';
import { Suspense } from 'react';
import TrackOrder from '@/components/order/TrackOrder';

export const metadata: Metadata = {
  title: 'Track Order - Prints Basket',
  description: 'Track your printer order and get real-time shipping updates from Prints Basket.',
  alternates: { canonical: 'https://printsbasket.com/track-order' },
};

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <TrackOrder />
    </Suspense>
  );
}
