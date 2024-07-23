import React from "react";
import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        {/* <CircleCheckIcon className="mx-auto h-12 w-12 text-green-500" /> */}
        <FaRegCircleCheck className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Thank you for your order!
        </h1>
        <p className="mt-4 text-muted-foreground">
          A member of our team will be in touch with you shortly to confirm the
          details of your order.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[#006d35] px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-[#006d35]/30 hover:text-bold hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
