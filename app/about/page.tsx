import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div>
      <section className="w-full md:px-20 md:py-10 ">
        <Image
          src="/about.webp"
          width={1200}
          height={500}
          alt="About Us"
          className="aspect-[3/1] shadow-2xl w-full object-cover  md:rounded-xl border-2 border-[#409339]"
        />
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Our Company
            </h2>
            <p className="text-muted-foreground md:text-xl">
              We are a team of passionate individuals dedicated to creating
              innovative solutions that empower our clients to achieve their
              goals. With years of experience in the industry, we pride
              ourselves on our commitment to excellence and our ability to
              deliver exceptional results.
            </p>
            <p className="text-muted-foreground md:text-xl">
              Our mission is to be the leading provider of cutting-edge
              technology solutions that drive business success. We believe in
              the power of collaboration and strive to build strong partnerships
              with our clients, working closely with them to understand their
              unique needs and deliver tailored solutions.
            </p>
            <p className="text-muted-foreground md:text-xl">
              At the heart of our company are our core values: innovation,
              integrity, and a relentless pursuit of excellence. These values
              guide every aspect of our work, from the way we approach
              problem-solving to the way we treat our clients and each other.
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
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="John Doe"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Co-Founder, CEO</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="Jane Smith"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">Jane Smith</h3>
                <p className="text-muted-foreground">Co-Founder, CTO</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="Bob Johnson"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">Bob Johnson</h3>
                <p className="text-muted-foreground">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="text-muted-foreground md:text-xl">
              We offer a wide range of services to help our clients achieve
              their goals. From web development to cloud infrastructure, we have
              the expertise to deliver tailored solutions that drive business
              success.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Web Development</h3>
                <p className="text-muted-foreground">
                  Our team of experienced web developers can create custom
                  websites and web applications that are both visually appealing
                  and highly functional.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Cloud Infrastructure</h3>
                <p className="text-muted-foreground">
                  We can help you build and manage scalable cloud infrastructure
                  to support your business needs, ensuring reliability and
                  security.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Data Analytics</h3>
                <p className="text-muted-foreground">
                  Our data analytics experts can help you unlock valuable
                  insights from your data, enabling you to make informed
                  decisions that drive business growth.
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
                  src="/placeholder.svg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width={140}
                  height={70}
                  alt="Client Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
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
