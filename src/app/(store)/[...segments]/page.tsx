"use client";

import { useRouter } from "next/navigation";

const DynamicSegments = () => {
  const router = useRouter(); // Yeni useRouter fonksiyonu
  return (
    <div>
      <h1>Dynamic Segments</h1>
      <button
        onClick={() => router.push("/products")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        All Products
      </button>
    </div>
  );
};

export default DynamicSegments;