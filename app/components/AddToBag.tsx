"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

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
      setItemQuantity(price_id, cartItem.quantity + 1);
    } else {
      addItem(product);
    }
    handleCartClick();
  };

  return (
    <Button className="bg-black hover:bg-[#409339]" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
}
