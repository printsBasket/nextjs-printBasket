import { Metadata } from 'next';
import RefundReturnPolicy from '@/components/privacyPolicy/RefundReturnPolicy';

export const metadata: Metadata = {
  title: 'Refund & Return Policy - Prints Basket',
  description: 'Learn about our 30-day refund and return policy at Prints Basket.',
  alternates: { canonical: 'https://printsbasket.com/refund-return-policy' },
};

export default function RefundPage() { return <RefundReturnPolicy />; }
