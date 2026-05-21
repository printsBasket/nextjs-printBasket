'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/**
 * Enforces trailing slashes on all routes except root.
 * Redirects /about to /about/ (preserving query/hash), using replace: true.
 * Usage: Place <TrailingSlashRedirect /> at the top of your App component.
 */
export default function TrailingSlashRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const { pathname: currentPath, search, hash } = window.location;
    if (
      currentPath !== '/' &&
      !currentPath.endsWith('/') &&
      !currentPath.match(/\.[a-zA-Z0-9]{2,5}$/) // don't redirect files like .js, .css, .png
    ) {
      router.replace(currentPath + '/' + search + hash);
    }
  }, [pathname, router]);

  return null;
}
