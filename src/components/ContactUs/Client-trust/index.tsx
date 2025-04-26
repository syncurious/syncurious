import Heading from "@/components/base/heading";
import React from "react";
import Image from "next/image";
import Input from "@/components/base/Input";

export default function ClientTrustSection() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[80%] justify-center items-center gap-5 gradient-border-card rounded-2xl">
        <div className="hidden md:flex p-10">
          <div className=" rounded-2xl h-full">
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src="/assets/images/our-team-member-1.png"
              alt="img"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-between gap-5 p-5 items-start">
          <Heading level={2}>Send A Message </Heading>
          <div className="w-full flex flex-col gap-5">
            <div className="w-full">
              <Heading level={5}>Name</Heading>
              <Input />
            </div>
            <div className="w-full">
              <Heading level={5}>Email</Heading>
              <Input />
            </div>
            <div className="w-full">
              <Heading level={5}>Message</Heading>
              <Input as="textarea" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
