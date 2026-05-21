import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogsMain from '@/components/blogs/BlogsMain';

export const metadata: Metadata = {
  title: 'Printer Blogs & Guides 2026 - Prints Basket',
  description: 'Read expert guides on printers, ink, toner, and printing best practices from the Prints Basket blog.',
  alternates: { canonical: 'https://printsbasket.com/blogs' },
};

export default function BlogsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <BlogsMain />
    </Suspense>
  );
}
