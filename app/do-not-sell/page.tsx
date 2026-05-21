import { Metadata } from 'next';
import DoNotSell from '@/components/policies/DoNotSell';

export const metadata: Metadata = {
  title: 'Do Not Sell My Personal Information - Prints Basket',
  alternates: { canonical: 'https://printsbasket.com/do-not-sell' },
};

export default function DoNotSellPage() { return <DoNotSell />; }
