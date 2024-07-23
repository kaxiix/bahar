import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";
import { simplifiedProduct } from "../interface"; // Ensure this path is correct
import Cat from "@/app/components/Cat";

async function getProducts(category: string): Promise<simplifiedProduct[]> {
  const query =
    category === "all"
      ? `*[_type == "product"] {
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name
      }`
      : `*[_type == "product" && category->name == "${category}"] {
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name
      }`;

  try {
    const data = await client.fetch(query);
    console.log(`Fetched products for category ${category}:`, data); // Log the fetched data
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getProducts(params.category);

  if (!data.length) {
    return (
      <div className="bg-white">
        <div>hello</div>
        <div className="mx-auto mt-8 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {params.category === "all"
              ? "All Products"
              : `Our Products for ${params.category}`}
          </h2>
          <p className="text-gray-500">No products found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="w-full px-36 pt-10 ">
        <Cat />
      </div>
      <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            <div className="flex flex-col">
              {params.category === "all"
                ? "all Products"
                : `Our Products for ${params.category}`}
            </div>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square w-full overflow-hidden  rounded-2xl bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    SAR {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
