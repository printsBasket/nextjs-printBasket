import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ShopMain from '@/components/shop/ShopMain';

const categoryFilters = {
  home: {
    title: 'Home Printers - Prints Basket',
    description: 'Browse the best home printers at Prints Basket for personal and home office use.',
    initialFilters: { usageCategory: 'Home' },
  },
  office: {
    title: 'Office Printers - Prints Basket',
    description: 'Discover the best office printers for small business and corporate printing needs.',
    initialFilters: { usageCategory: 'Office' },
  },
  inkjet: {
    title: 'Inkjet Printers - Prints Basket',
    description: 'Shop premium inkjet printers from leading brands at Prints Basket.',
    initialFilters: { technology: 'Inkjet' },
  },
  laser: {
    title: 'Laser Printers - Prints Basket',
    description: 'Find high-performance laser printers for home and office at Prints Basket.',
    initialFilters: { technology: 'Laser' },
  },
};

type CategorySlug = keyof typeof categoryFilters;

type ShopCategoryParams = {
  params: {
    category: CategorySlug;
  };
};

export async function generateMetadata({ params }: ShopCategoryParams): Promise<Metadata> {
  const category = categoryFilters[params.category];

  if (!category) {
    return {
      title: 'Shop Printers & Printing Supplies - Prints Basket',
      description: 'Browse our full selection of printers and printing supplies.',
      alternates: { canonical: 'https://printsbasket.com/shop' },
    };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `https://printsbasket.com/shop/${params.category}` },
  };
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(categoryFilters).map((category) => ({ category: category as CategorySlug }));
}

export default async function ShopCategoryPage({ params }: ShopCategoryParams) {
  const category = categoryFilters[params.category];
  if (!category) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ShopMain initialFilters={category.initialFilters} />
    </Suspense>
  );
}
