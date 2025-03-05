import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import React from "react";

export default function ClientTrustSection() {
  return (
    <div className="flex flex-col justify-between gap-10  w-full h-full py-[5%]">
      <div className="flex flex-col justify-between gap-10">
        <div className="btn w-full flex justify-center">
          <button className="rounded-full py-1 px-4 border border-white hover:border-primary hover:text-primary text-white">
            About Us
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-5 text-center">
          <Heading level={1} fontPrimary gradient className="px-2">
            Client-Trusted Solutions
          </Heading>
          <Paragraph level={4} className="text-white w-[50%]  block">
            Join the ranks of more than 100 satisfied clients who rely on us for
            their software and digital needs. Our commitment to excellence is
            reflected in our high-quality solutions
          </Paragraph>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        {Array.from({ length: 3 }).map((_) => (
          <div className="relative">
            <div className="card-border"></div>
            <div className="card-blur flex justify-center items-center h-[150px] w-[300px] rounded-2xl">
              <Heading level={2} fontPrimary gradient className="px-3">
                Syncurious<span className="text-clip ">.</span>
              </Heading>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
