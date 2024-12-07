"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getProductDetails } from "@/api/api";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (typeof slug === 'string') {
          const productDetails = await getProductDetails(slug);
          setProduct(productDetails);
        } else {
          setError('Invalid slug');
        }
      } catch (err) {
        setError("An error occurred while loading the product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [slug]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="mx-auto grid max-w-7xl p-8">
      <form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8" action="javascript:void(0)">
        <div className="md:col-span-1 lg:col-span-5">
          <div className="aspect-square overflow-hidden bg-neutral-50">
            <img
              alt={product.name}
              fetchPriority="high"
              width="1024"
              height="1024"
              decoding="async"
              className="h-full w-full object-contain object-center p-2"
              src={product.imageUrl}
            />
          </div>
        </div>

        <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
          <div>
            <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
              {product.name}
            </h1>
            <p className="mb-8 text-sm" data-testid="ProductElement_Price">
              ${product.discountedPrice.amount}
            </p>
            <div className="mt-8">
              <button
                type="submit"
                aria-disabled="false"
                aria-busy="false"
                className="h-12 items-center rounded-md bg-neutral-900 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-neutral-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 hover:aria-disabled:bg-neutral-700"
              >
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductPage;
