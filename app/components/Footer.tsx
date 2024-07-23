import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('/bg.svg')] bg-fixed py-8 md:py-12 w-full mt-20 border-t-2 border-black/50 ">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image alt="logo" src={"/logo.png"} width={100} height={100} />
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Navigation</h3>
          <Link href="/" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="/all" className="hover:underline" prefetch={false}>
            products
          </Link>
          <Link href="/about" className="hover:underline" prefetch={false}>
            about
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-1 ">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm">baharjeddahfoodco@gmail.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-muted-foreground">
            Developed by{" "}
            <a
              href="https://www.quixstudio.com"
              className=" font-bold text-orange-600 hover:underline"
              target="_blank"
            >
              QuixStudio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
