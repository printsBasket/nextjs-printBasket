import { Metadata } from 'next';
import CookiePolicy from '@/components/privacyPolicy/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy - Prints Basket',
  alternates: { canonical: 'https://printsbasket.com/cookie-policy' },
};

export default function CookiePolicyPage() { return <CookiePolicy />; }
