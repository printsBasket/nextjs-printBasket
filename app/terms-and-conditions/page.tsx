import { Metadata } from 'next';
import TermsAndConditions from '@/components/TermsAndConditions';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Prints Basket',
  description: 'Read the Prints Basket Terms and Conditions for your purchase and use of our website.',
  alternates: { canonical: 'https://printsbasket.com/terms-and-conditions' },
};

export default function TermsPage() { return <TermsAndConditions />; }
