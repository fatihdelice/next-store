import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  code: string;
  name: string;
  imageUrl: string;
  category: string;
  price: {
    amount: number;
  };
  discountedPrice: {
    amount: number;
  };
  isFavorite: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <li>
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
            <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
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
  );
};

export default ProductCard;
