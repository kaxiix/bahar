import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  try {
    const data = await client.fetch(query);
    console.log("Fetched data:", data); // Log the fetched data
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

export default async function Hero() {
  const data = await getData();

  if (!data) {
    return (
      <section className="mx-auto  mt-8 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full bg-[url('/bg.svg')] bg-fixed border-b-2 border-t-2">
      <section className="mx-auto  pt-8 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full hover:translate-x-1 transform transition-transform duration-300 flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
              Committed To Culinary Perfection
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              Bahar Jeddah Food Company delivers top quality ingredients to the
              Kingdom&apos;s finest establishments, ensuring you can craft every
              dish with excellence and care. Trust us for unmatched
              quality and service.
            </p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            {data.image1 && (
              <div className="relative left-12 top-12 z-10   -ml-12 overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <Image
                  src={urlFor(data.image1).url()}
                  alt="Great Photo"
                  className="h-full  w-full object-cover object-center"
                  priority
                  width={700}
                  height={500}
                />
              </div>
            )}

            {data.image2 && (
              <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={urlFor(data.image2).url()}
                  alt="Great Photo"
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center md:hidden justify-between gap-8 md:flex-row">
          <div className="flex h-12 mb-5 md:mb-0 bg-green-100/70  divide-x overflow-hidden rounded-lg border">
            <Link
              href="/all"
              className="flex  px-5 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="flex px-5   items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              About us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
