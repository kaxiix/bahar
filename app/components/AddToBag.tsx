"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import React, { useState } from "react";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, cartDetails, setItemQuantity, handleCartClick } =
    useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: price_id, // Make sure the id matches the key in cartDetails
  };

  const handleAddToCart = () => {
    const cartItem = cartDetails?.[price_id];
    if (cartItem) {
      setItemQuantity(price_id, cartItem.quantity + quantity);
    } else {
      addItem(product, { count: quantity });
    }
    handleCartClick();
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };

  return (
    <div className="flex  items-center gap-2">
      <div className="flex items-center">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          className="px-2 py-1  text-white bg-[#409339] rounded-l"
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          className="w-12 text-center border-t border-b border-gray-200"
        />
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="px-2 py-1 text-white bg-[#409339] rounded-r"
        >
          +
        </button>
      </div>
      <Button
        className="bg-black text-white hover:bg-[#409339]"
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
    </div>
  );
}
