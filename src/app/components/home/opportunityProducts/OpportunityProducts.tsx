"use client";

import React, { useEffect, useState } from "react";
import { getProducts } from "@/api/api";
import ProductCard from "@/app/components/product/ProductCard";
import { useProperties } from '@/hooks/useProperties';

interface Product {
  code: string;
  name: string;
  imageUrl: string;
  category: string;
  price: {
    amount: number;
    currency: {
      code: string;
      name: string;
      shortName: string;
    };
  };
  discountedPrice: {
    amount: number;
    currency: {
      code: string;
      name: string;
      shortName: string;
    };
  };
  stock: {
    available: number;
    inStock: string;
  };
  description: string;
  isFavorite: boolean;
}

export default function OpportunityProducts() {
  const { t } = useProperties();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(t('global.error.loadingProducts'));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="mx-auto max-w-7xl p-8 pb-16">
      <h2 className="text-2xl font-semibold mb-4">{t('global.home.opportunityProducts')}</h2>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </ul>
    </section>
  );
}
