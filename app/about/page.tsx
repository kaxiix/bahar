import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div>
      <section className="w-full md:px-20 md:py-10 bg-[url('/bg.svg')] bg-fixed border-b-2 ">
        <Image
          src="/about.webp"
          width={1200}
          height={500}
          alt="About Us"
          className="aspect-[3/1] hover:scale-95 transition-transform duration-300 shadow-2xl w-full object-cover  md:rounded-xl border-2 border-[#409339]"
        />
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Our Company
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Bahar Jeddah Food Co. is a premier supplier of premium food
              products, serving the elite restaurants, luxury hotels, and
              esteemed businesses of Jeddah. We specialize in sourcing and
              delivering high-quality ingredients at competitive prices,
              ensuring our clients always receive the best value for their
              investment. Our diverse product range, from gourmet specialties to
              everyday essentials, is carefully curated to meet the highest
              standards of taste and quality.
            </p>
            <p className="text-muted-foreground md:text-xl">
              Our commitment to excellence, affordability, and exceptional
              customer service sets us apart in the food industry. At Bahar
              Jeddah Food Co., we believe that top-tier products shouldn&apos;t
              come with a high price tag. We are dedicated to bringing the
              finest flavors to your table, making us your trusted and
              cost-effective partner in every culinary endeavor.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Team
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Meet the talented individuals who make up our team. Each member
              brings a unique set of skills and experiences that contribute to
              the success of our company.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/ow1.jpg"
                  width={200}
                  height={200}
                  alt="John Doe"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Mr. Monirul Islam
                </h3>
                <p className="text-muted-foreground">CEO</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/ow2.jpg"
                  width={200}
                  height={200}
                  alt="Jane Smith"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">Mr. Ali Ammar</h3>
                <p className="text-muted-foreground">Angel Investor</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/ow3.jpg"
                  width={200}
                  height={200}
                  alt="Bob Johnson"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Mr. Javed Hossain
                </h3>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Bahar Jeddah Food Co?
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Wholesale Food Supply</h3>
                <p className="text-muted-foreground">
                  We provide a wide range of high-quality food products,
                  including gourmet items, everyday essentials, and specialty
                  ingredients, to restaurants, hotels, and businesses.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  We offer our products at competitive prices, providing
                  excellent value without compromising on quality.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Reliable Delivery</h3>
                <p className="text-muted-foreground">
                  We ensure timely and reliable delivery of our products,
                  maintaining the freshness and quality of the goods from our
                  suppliers to our client&apos;s kitchens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Clients
            </h2>
            <p className="text-muted-foreground md:text-xl">
              We are proud to have worked with a diverse range of clients, from
              startups to enterprise-level organizations. Here are just a few of
              the companies weve had the pleasure of partnering with.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              <div className="flex items-center justify-center">
                <Image
                  src="/client1.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/client2.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/client3.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/client4.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/client5.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/client6.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/client7.jpg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
