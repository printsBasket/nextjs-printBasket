import { Metadata } from 'next';
import ShippingPolicy from '@/components/privacyPolicy/ShippingPolicy';

export const metadata: Metadata = {
  title: 'Shipping Policy - Prints Basket',
  alternates: { canonical: 'https://printsbasket.com/shipping-policy' },
};

export default function ShippingPolicyPage() { return <ShippingPolicy />; }
