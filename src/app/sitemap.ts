import { MetadataRoute } from "next";

const publicUrl = "https://next-store-fatih-delice.vercel.app";

const pages = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/cart-overlay', changefreq: 'weekly', priority: 0.8 },
  { path: '/favicon.ico', changefreq: 'monthly', priority: 0.3 },
  { path: '/globals.css', changefreq: 'monthly', priority: 0.3 },
  { path: '/layout.tsx', changefreq: 'monthly', priority: 0.3 },
  { path: '/not-found.tsx', changefreq: 'monthly', priority: 0.3 },
  { path: '/page.tsx', changefreq: 'daily', priority: 0.8 },
  { path: '/robots.ts', changefreq: 'monthly', priority: 0.3 },
  { path: '/sitemap.ts', changefreq: 'monthly', priority: 0.3 },
  
  // Store pages
  { path: '/store/cart', changefreq: 'daily', priority: 0.8 },
  { path: '/store/category/[slug]', changefreq: 'weekly', priority: 0.7 },
  { path: '/store/order/success', changefreq: 'daily', priority: 0.8 },
  { path: '/store/product/[slug]', changefreq: 'daily', priority: 0.8 },
  { path: '/store/products', changefreq: 'daily', priority: 0.8 },
  { path: '/store/search', changefreq: 'weekly', priority: 0.7 },

  // Other dynamic pages
  { path: '/store/[...segments]', changefreq: 'weekly', priority: 0.6 },

  // Components pages
  { path: '/app/components/footer', changefreq: 'monthly', priority: 0.5 },
  { path: '/app/components/header', changefreq: 'monthly', priority: 0.5 },
  { path: '/app/components/home/opportunityProducts', changefreq: 'weekly', priority: 0.7 },
  { path: '/app/components/home/sliderBanner', changefreq: 'weekly', priority: 0.7 },
  { path: '/app/components/product/ProductCard', changefreq: 'weekly', priority: 0.7 },
];

export default function Sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changefreq, priority }) => ({
    url: `${publicUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: changefreq as 'daily' | 'weekly' | 'monthly' | 'always' | 'hourly' | 'yearly' | 'never', // Tür dönüşümü
    priority: priority,
  }));
}
