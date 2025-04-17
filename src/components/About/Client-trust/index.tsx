import Heading from "@/components/base/heading";
import React from "react";
import SectionHeader from "../../section/SectionHeader";
import Image from "next/image";
import Paragraph from "@/components/base/Paragraph";

export default function ClientTrustSection() {
  return (
    <SectionHeader button="About Syncurious">
      <div className="flex justify-center">
        <div className="flex max-w-[80%]  gap-5">
          <div className="w-[50%]">
            <Image
              className="w-full"
              src="/assets/images/trust-client-group.png"
              alt="img"
              width={200}
              height={200}
            />
          </div>
          <div className="w-[50%] flex flex-col justify-center items-start">
            <Heading level={2} fontPrimary gradient>Client-Trusted Solutions</Heading>
            <Paragraph className=" " level={3}>
              Join the ranks of more than 100 satisfied clients who rely on us
              for their software and digital needs. Our commitment to excellence
              is reflected in our high-quality solutionsJoin the ranks of more
              than 100 satisfied clients who rely on us for their software and
              digital needs. Our commitment to excellence is reflected in our
              high-quality solutions
            </Paragraph>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
