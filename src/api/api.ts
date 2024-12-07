import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Yetkilendirme hatası");
    }
    return Promise.reject(error);
  }
);

export const getProducts = async (category?: string) => {
  const endpoint = category ? `/products?category=${category}` : "/products";
  const response = await api.get(endpoint);
  return response.data;
};

export const getProductDetails = async (slug: string) => {
  const response = await api.get(`/product/${slug}`);
  return response.data;
};

export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

export const addToCart = async (productId: string, quantity: number) => {
  const response = await api.post("/cart", { productId, quantity });
  return response.data;
};

export const placeOrder = async (orderData: any) => {
  const response = await api.post("/order", orderData);
  return response.data;
};
