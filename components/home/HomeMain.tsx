'use client';

import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../store/actions/productActions';
import { fetchCartFromDB } from '../../store/actions/cartActions';
import Hero from "./Hero";
import Home from "./Home";
import Reviews from "./Reviews";
import ProductGrid from "../productsCategories/ProductGrid";
import PrinterBanners from './PrinterBanners';
import ExploreCategoriesSection from './ExploreCategoriesSection';

const HomeMain = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search');
    const dispatch = useDispatch();

    const { allProducts = [], allLoading, allLoaded } = useSelector((state: any) => state.productList || {});
    const { userInfo } = useSelector((state: any) => state.userLogin || {});

    // Prefetch all products on mount
    useEffect(() => {
        if (!allLoaded) {
            dispatch(fetchAllProducts() as any);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    // Restore cart from DB if user is logged in
    useEffect(() => {
        if (userInfo?.token) {
            dispatch(fetchCartFromDB() as any);
        }
    }, [dispatch, userInfo?.token]);

    // Filter from allProducts cache for instant search
    const searchResults = useMemo(() => {
        if (!searchQuery) return [];
        const q = searchQuery.toLowerCase();
        return allProducts.filter((p: any) =>
            p.title?.toLowerCase().includes(q) ||
            p.brand?.toLowerCase().includes(q) ||
            p.description?.toLowerCase().includes(q)
        );
    }, [searchQuery, allProducts]);

    if (searchQuery) {
        return (
            <div className="min-h-screen bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Search Results for &quot;{searchQuery}&quot;</h1>
                    {(!allLoaded || allLoading) && allProducts.length === 0 ? (
                        <div className="text-center py-12">Loading...</div>
                    ) : searchResults.length > 0 ? (
                        <ProductGrid products={searchResults} />
                    ) : (
                        <div className="text-center py-12">No products found for &quot;{searchQuery}&quot;</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <Hero />
            <ExploreCategoriesSection />
            <Home />
            <PrinterBanners />
            <Reviews />
        </>
    );
};

export default HomeMain;
