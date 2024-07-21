"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const { cartCount, cartDetails, totalPrice, clearCart } = useShoppingCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const itemNames = Object.values(cartDetails ?? {})
      .map((item) => `${item.name} (${item.quantity})`)
      .join(", ");

    let form = {
      name,
      itemNames, // add item names to the form
      totalPrice, // add total price to the form
      company,
      city,
      add,
      phone,
      email,
      note,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();

    // print to screen
    alert("Our team will contact you shortly");
    clearCart();
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* left/top */}
      <div className="w-full overflow-y-auto md:w-1/2 h-[50vh] border-4 rounded-2xl border-primary/20 m-5 md:h-screen">
        {/* map cart items */}
        {cartCount === 0 ? (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="py-6">You don&apos;t have any items</h1>
          </div>
        ) : (
          <>
            <div className="mx-20 mt-10 text-4xl pb-10">Order Summary</div>
            {Object.values(cartDetails ?? {}).map((entry) => (
              <li
                key={entry.id}
                className="flex py-6 mx-20 border-b-2 border-primary/70"
              >
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
                      <p className="ml-4">SAR {entry.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {entry.description}
                    </p>
                  </div>

                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">QTY: {entry.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
            <div className="flex justify-between text-base mx-20 mt-10 p-5 rounded-lg border-2 border-black/30 font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>SAR {totalPrice}</p>
            </div>
          </>
        )}
      </div>
      {/* right/bottom */}
      <div className="w-full md:w-1/2 my-5">
        {/* form */}
        <form
          action="#"
          onSubmit={handleSubmit}
          className="mx-20 max-w-screen-xl px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name*
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="your_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Kazi"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email*
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="your_email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="select-city-input-3"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City*
                    </label>
                    <select
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      id="select-city-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="" disabled selected>
                        Please select
                      </option>
                      <option value="jeddah">Jeddah</option>
                      <option value="makkah">Makkah</option>
                      <option value="taif">Taif</option>
                      <option value="yanbu">Yanbu</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="phone-input-3"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number*
                    </label>
                    <div className="relative w-full">
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        id="phone-input-3"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="street"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Street address*
                    </label>
                    <input
                      value={add}
                      onChange={(e) => setAdd(e.target.value)}
                      type="text"
                      id="street"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company name
                    </label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      type="text"
                      id="company_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Quixstudios"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="note"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Notes (optional)
                    </label>
                    <input
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      type="text"
                      id="note"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-primary/50 hover:bg-primary text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
