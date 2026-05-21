import { Metadata } from 'next';
import Disclaimer from '@/components/privacyPolicy/Disclaimer';

export const metadata: Metadata = {
  title: 'Disclaimer - Prints Basket',
  alternates: { canonical: 'https://printsbasket.com/disclaimer' },
};

export default function DisclaimerPage() { return <Disclaimer />; }
