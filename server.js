const express = require("express");
const cors = require("cors");

// Dummy data
const products = [
  {
    code: "483729",
    imageUrl: "/staticimage/product-1.webp",
    stock: {
      available: 50,
      inStock: "IN_STOCK",
    },
    price: {
      amount: 100,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    discountedPrice: {
      amount: 90,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    quantity: {
      cartAddedQuantity: 0,
      minQuantity: 1,
      maxQuantity: 5,
      unit: "PIECE",
    },
    breadcrumb: "Sweatshirts > Casual Wear",
    brand: "Brand A",
    rating: 4.5,
    isInCart: false,
    name: "Sweatshirt 1",
    description: "A stylish sweatshirt for casual wear.",
    expirationDate: "2025-12-31",
    isFavorite: true,
  },
  {
    code: "592184",
    imageUrl: "/staticimage/product-2.webp",
    stock: {
      available: 30,
      inStock: "IN_STOCK",
    },
    price: {
      amount: 200,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    discountedPrice: {
      amount: 180,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    quantity: {
      cartAddedQuantity: 0,
      minQuantity: 1,
      maxQuantity: 5,
      unit: "PIECE",
    },
    breadcrumb: "Sweatshirts > Premium Wear",
    brand: "Brand B",
    rating: 4.0,
    isInCart: false,
    name: "Sweatshirt 2",
    description: "A premium sweatshirt made with high-quality fabric.",
    expirationDate: "2026-01-01",
    isFavorite: false,
  },
  {
    code: "781634",
    imageUrl: "/staticimage/product-3.webp",
    stock: {
      available: 20,
      inStock: "LOW_STOCK",
    },
    price: {
      amount: 300,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    discountedPrice: {
      amount: 270,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    quantity: {
      cartAddedQuantity: 0,
      minQuantity: 1,
      maxQuantity: 3,
      unit: "PIECE",
    },
    breadcrumb: "Sweatshirts > Sports Wear",
    brand: "Brand C",
    rating: 4.7,
    isInCart: false,
    name: "Sweatshirt 3",
    description: "Perfect for sports and outdoor activities.",
    expirationDate: "2026-02-28",
    isFavorite: true,
  },
  {
    code: "243876",
    imageUrl: "/staticimage/product-4.webp",
    stock: {
      available: 15,
      inStock: "LOW_STOCK",
    },
    price: {
      amount: 150,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    discountedPrice: {
      amount: 140,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    quantity: {
      cartAddedQuantity: 0,
      minQuantity: 1,
      maxQuantity: 5,
      unit: "PIECE",
    },
    breadcrumb: "Sweatshirts > Winter Collection",
    brand: "Brand D",
    rating: 4.2,
    isInCart: false,
    name: "Sweatshirt 4",
    description: "Keep warm during the winter with this stylish sweatshirt.",
    expirationDate: "2025-11-30",
    isFavorite: false,
  },
  {
    code: "905432",
    imageUrl: "/staticimage/product-5.webp",
    stock: {
      available: 60,
      inStock: "IN_STOCK",
    },
    price: {
      amount: 250,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    discountedPrice: {
      amount: 220,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    quantity: {
      cartAddedQuantity: 0,
      minQuantity: 1,
      maxQuantity: 5,
      unit: "PIECE",
    },
    breadcrumb: "Sweatshirts > Casual Wear",
    brand: "Brand E",
    rating: 4.8,
    isInCart: false,
    name: "Sweatshirt 5",
    description: "A comfortable sweatshirt for everyday wear.",
    expirationDate: "2026-03-15",
    isFavorite: true,
  },
  {
    code: "367581",
    imageUrl: "/staticimage/product-6.webp",
    stock: {
      available: 25,
      inStock: "IN_STOCK",
    },
    price: {
      amount: 350,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    discountedPrice: {
      amount: 300,
      currency: {
        code: "USD",
        name: "United States Dollar",
        shortName: "USD",
      },
    },
    quantity: {
      cartAddedQuantity: 0,
      minQuantity: 1,
      maxQuantity: 3,
      unit: "PIECE",
    },
    breadcrumb: "Sweatshirts > Sports Wear",
    brand: "Brand F",
    rating: 4.9,
    isInCart: false,
    name: "Sweatshirt 6",
    description: "A stylish sweatshirt designed for active individuals.",
    expirationDate: "2025-10-31",
    isFavorite: false,
  },
];


const app = express();

app.use(cors());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/product/:slug", (req, res) => {
  const { slug } = req.params;
  const product = products.find((item) => item.code === slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found." });
  }
});

const PORT = 3058;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});