import Heading from "@/components/base/heading";
import SphereBackgound from "@/lib/three/sphereBackgound";
import Container  from "@/components/section/container";
import React from "react";

function HeroSection() {
  return (
    <div className="h-screen max-h-[750px] py-[8%] flex justify-center items-center">
      <SphereBackgound className="z-0" />
      <div className="max-w-[50%] z-10 flex flex-col justify-between  h-full w-full border-primary">
        <div>
          <Heading level={1} gradient={true} fontPrimary={true}>
            Empowering IT, ICT & ELV Businesses for the Digital Age
          </Heading>
        </div>
        <div>
          <div className="Button flex flex-col gap-4 justify-center items-center">
            <button className="bg-primary border-2 rounded-md border-primary transition-all hover:bg-transparent hover:text-primary text-white py-2 px-4">
              View Our Portfolio
            </button>
            <button className="rounded-md border-primary hover:text-primary text-white py-2 px-4">
                Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
