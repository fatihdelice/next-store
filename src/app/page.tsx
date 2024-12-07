import Link from "next/link";
import SliderBanner from "./components/home/sliderBanner/SliderBanner";
import OpportunityProducts from "./components/home/opportunityProducts/OpportunityProducts";

export default function Home() {
  return (
    <>
      <SliderBanner />
      <div className="container mx-auto px-4">
        <OpportunityProducts />

        <section className="mx-auto max-w-7xl p-8 pb-16">
          <h2 className="text-2xl font-semibold mb-4">Campaigns</h2>
          <div className="relative bg-blue-500 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold">50% Discount Opportunity</h3>
            <p className="mt-2">Big discounts await you on select products.</p>
            <Link href="/products" className="inline-block bg-white text-blue-500 px-4 py-2 rounded mt-4">
              Start Shopping
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
