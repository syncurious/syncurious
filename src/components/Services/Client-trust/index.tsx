import Heading from "@/components/base/heading";
import React from "react";
import Image from "next/image";
import Paragraph from "@/components/base/Paragraph";
import VerticalStepper from "@/components/ui/VerticalStepper";


const steps = [
  {
    title: 'Social Media Strategies',
    description: 'We specialize in designing and developing responsive websites specifically for IT, ICT.',
  },
  {
    title: 'Social Media Strategies',
    description: 'We specialize in designing and developing responsive websites specifically for IT, ICT.',
  },
  {
    title: 'Social Media Strategies',
    description: 'We specialize in designing and developing responsive websites specifically for IT, ICT.',
  },
];


export default function ClientTrustSection() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] justify-center items-center gap-5">
        <div className="w-full mt-10">
          <div className="gradient-border-card  md:block rounded-2xl">
            <Image
              className="w-full  object-cover rounded-2xl"
              src="/assets/images/our-team-member-1.png"
              alt="img"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-start">
          <Heading level={2} fontPrimary gradient>
            Client-Trusted Solutions
          </Heading>
          <Paragraph className=" " level={3}>
            Join the ranks of more than 100 satisfied clients who rely on us for
            their software and digital needs. Our commitment to excellence is
            reflected in our high-quality solutionsJoin the ranks of more than
            100 satisfied clients who rely on us for their software and digital
            needs. Our commitment to excellence is reflected in our high-quality
            solutions
          </Paragraph>
          <div className="mt-10">
            <VerticalStepper steps={steps} />
          </div>
        </div>
      </div>
    </div>
  );
}
