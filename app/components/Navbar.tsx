"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { FaShoppingCart } from "react-icons/fa";

import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/all" },
  { name: "About us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="  bg-[url('/bg.svg')] bg-fixed  pb-5   ">
      <div className="flex items-center  backdrop-blur-lg bg-green-200  md:rounded-b-2xl  justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <Image alt="logo" src={"/logo.png"} width={100} height={50} />
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-[#409339]"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-black"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r  sm:border-l">
          <Button
            onClick={() => handleCartClick()}
            className="flex bg-black hover:bg-black/70 flex-col  gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-20 md:w-24 rounded-2xl"
          >
            <FaShoppingCart className="text-white" />

            <span className="hidden text-xs font-semibold text-white  sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
