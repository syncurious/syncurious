import Heading from "@/components/base/heading";
import SphereBackgound from "@/lib/three/sphereBackgound";
import React from "react";

function HeroSection() {
  return (
    <div className="relative h-[80vh] p-[8%] px-10 flex justify-center items-center">
      <SphereBackgound className="z-0 " />
      <div className="md:max-w-[50%] z-10 flex flex-col justify-between  h-full w-full border-primary">
        <div className="py-20 md:py-0">
          <Heading
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            level={1}
            gradient={true}
            fontPrimary={true}
          >
           Blogs
          </Heading>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
