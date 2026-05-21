'use client';

import { usePathname } from 'next/navigation';

export default function HeaderFooterGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname?.startsWith('/admin');

  if (hideHeaderFooter) {
    return null;
  }

  return <>{children}</>;
}
