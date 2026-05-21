import { Metadata } from 'next';
import ReturnExchangePolicy from '@/components/privacyPolicy/ReturnExchangePolicy';

export const metadata: Metadata = {
  title: 'Return & Exchange Policy - Prints Basket',
  alternates: { canonical: 'https://printsbasket.com/return-exchange-policy' },
};

export default function ReturnExchangePage() { return <ReturnExchangePolicy />; }
