"use client";

import { useParams } from "next/navigation";

const CategoryPage = () => {
  const { slug } = useParams(); // Dinamik parametreyi al

  return (
    <div>
      <h1>category: {slug}</h1>
      <p>category page.</p>
    </div>
  );
};

export default CategoryPage;
