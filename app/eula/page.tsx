import { Metadata } from 'next';
import EULA from '@/components/policies/EULA';

export const metadata: Metadata = {
  title: 'EULA - Prints Basket | End User License Agreement',
  alternates: { canonical: 'https://printsbasket.com/eula' },
};

export default function EULAPage() { return <EULA />; }
