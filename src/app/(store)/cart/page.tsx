'use client'

import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/utils/Icones';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState("flat-rate");
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '') {
      setQuantity(0);
      return;
    }
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setQuantity(numericValue);
    }
  };

  const handleBlur = () => {
    if (quantity === 0) {
      setQuantity(0);
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(0, prev + delta));
  };

  const getShippingCost = () => {
    switch (shipping) {
      case "flat-rate":
        return 30;
      case "free-shipping":
        return 0;
      case "local-pickup":
        return 5;
      default:
        return 0;
    }
  };

  const subtotal = 10 * quantity;
  const shippingCost = getShippingCost();
  const total = subtotal + shippingCost;

  return (
    <div className="container mx-auto px-4">
      <section className="mx-auto max-w-7xl p-8 pb-16">
        <div className="text-center py-12">
          <h1 className="text-2xl font-semibold mb-4">Cart Page</h1>
        </div>
        <div className="border border-[#d9e7d6] rounded-lg p-6 flex flex-col lg:flex-row w-full">
          <div className="flex-1">
            <h2 className="text-sm font-normal mb-4 text-[#212121]">Product</h2>
            <div className="flex items-center border-b pb-4">
              <img
                src="https://via.placeholder.com/80x80"
                alt="Spring Onions"
                className="w-20 h-20 rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium text-lg">Spring Onions 1 bunch</h3>
                <p className="text-gray-500">$10.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="font-medium text-lg w-[50px] text-center outline-none"
                  value={quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <p className="ml-4 font-medium">${subtotal.toFixed(2)}</p>
            </div>
          </div>

          <div className="lg:ml-8 mt-6 lg:mt-0 w-full lg:w-1/3">
            <div className="border border-[#243f2f] p-4 rounded-xl">
              <div className="coupon-section relative">
                <div
                  className="flex justify-between items-center cursor-pointer py-4"
                  onClick={() => setIsCouponOpen(!isCouponOpen)}
                >
                  <h3 className="font-normal text-2xl">Coupon code</h3>
                  {isCouponOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </div>

                {isCouponOpen && (
                  <div className={`flex overflow-hidden transition-[height] duration-1000 ease-in-out 
                    ${isCouponOpen ? "max-h-10" : "max-h-0"}`}>
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="flex-1 border px-3 py-2 rounded-l-md focus:outline-none w-full"
                    />
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md">
                      Apply
                    </button>
                  </div>
                )}
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <h3 className="text-2xl font-normal">Subtotal</h3>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr className="my-4" />
              <div className="mt-4">
                <h4 className="font-normal mb-2 text-2xl">Shipping</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "flat-rate"}
                      onChange={() => setShipping("flat-rate")}
                      className="mr-2"
                    />
                    Flat rate: $30.00
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "free-shipping"}
                      onChange={() => setShipping("free-shipping")}
                      className="mr-2"
                    />
                    Free shipping
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "local-pickup"}
                      onChange={() => setShipping("local-pickup")}
                      className="mr-2"
                    />
                    Local pickup: $5.00
                  </label>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <h3 className="text-2xl">Total</h3>
                <p className="text-green-600 font-bold">${total.toFixed(2)}</p>
              </div>
              <button className="mt-6 w-full bg-gray-800 rounded-full text-white py-2 hover:bg-gray-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
