import Divider from "@/components/base/Divider";
import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../SectionHeader";

export default function ClientTrustSection() {
  return (
    <SectionHeader
    button="About Us"
    heading="Client Trust"
    paragraph="Join the ranks of more than 100 satisfied clients who rely on us for their software and digital needs. Our commitment to excellence is reflected in our high-quality solutions"
    >
      <div className="flex justify-center gap-5">
        {Array.from({ length: 3 }).map((_) => (
          <div className="relative">
            <div className="gradient-border-card flex justify-center items-center h-[150px] w-[300px] rounded-2xl">
              <Heading level={2} fontPrimary gradient className="px-3">
                Syncurious<span className="text-clip ">.</span>
              </Heading>
            </div>
          </div>
        ))}
      </div>
    </SectionHeader>
  );
}
