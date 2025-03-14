import Button from "@/components/base/Button";
import Heading from "@/components/base/heading";
import SphereBackgound from "@/lib/three/sphereBackgound";
import React from "react";

function HeroSection() {
  return (
    <div className="relative h-full p-[8%] px-10 flex justify-center items-center">
      {/* <SphereBackgound className="z-0" /> */}
      <div className="md:max-w-[50%] z-10 flex flex-col justify-between  h-full w-full border-primary">
        <div className="py-20 md:py-0">
          <Heading
            level={1}
            gradient={true}
            fontPrimary={true}
            className="!leading-snug"
          >
            Empowering IT, ICT & ELV Businesses for the Digital Age
          </Heading>
        </div>
        <div>
          <div className="Button flex flex-col gap-4 justify-center items-center">
            <Button variant="outlined">View Our Portfolio</Button>
            <Button color="!text-white">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
