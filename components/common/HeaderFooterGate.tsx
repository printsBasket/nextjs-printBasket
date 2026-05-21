'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HeaderFooterGate() {
  const pathname = usePathname();
  const hideHeaderFooter = pathname?.startsWith('/admin');

  if (hideHeaderFooter) {
    return null;
  }

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
