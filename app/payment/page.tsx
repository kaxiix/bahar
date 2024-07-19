"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

import React from "react";

const AboutPage = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();
  return (
    <div>
      {Object.values(cartDetails ?? {}).map((entry) => (
        <li key={entry.id} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Image
              src={entry.image as string}
              alt="Product image"
              width={100}
              height={100}
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>{entry.name}</h3>
                <p className="ml-4">${entry.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {entry.description}
              </p>
            </div>

            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500">QTY: {entry.quantity}</p>

              <div className="flex">
                <button
                  type="button"
                  onClick={() => removeItem(entry.id)}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default AboutPage;
