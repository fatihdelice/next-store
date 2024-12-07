"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/api/api";

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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(); // API'den ürünleri çekiyoruz
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Ürünleri yüklerken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="mx-auto max-w-7xl p-8 pb-16">
      <h2 className="text-2xl font-semibold mb-4">Opportunity Products</h2>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.code}>
            <Link
              href={`/product/${product.code}`}
              className="block border rounded-lg p-4 hover:shadow-lg transition relative"
            >
              <div className="aspect-square overflow-hidden bg-neutral-50">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-contain object-center p-2"
                  width={512}
                  height={512}
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium mt-2">{product.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {product.category}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm text-neutral-500 line-through">
                    ${product.price.amount}
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-900">
                    ${product.discountedPrice.amount}
                  </p>
                </div>
              </div>
              {product.isFavorite && (
                <div className="absolute top-2 right-2 text-red-500">❤️</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
