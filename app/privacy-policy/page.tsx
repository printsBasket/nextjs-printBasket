import { Metadata } from 'next';
import PrivacyPolicy from '@/components/privacyPolicy/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy - Prints Basket',
  description: 'Read the Prints Basket Privacy Policy to understand how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://printsbasket.com/privacy-policy' },
};

export default function PrivacyPage() { return <PrivacyPolicy />; }
