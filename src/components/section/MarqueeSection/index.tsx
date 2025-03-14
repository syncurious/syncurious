"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Heading from "@/components/base/heading";

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (marqueeElement) {
      gsap.to(marqueeElement, {
        xPercent: -80,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: marqueeElement,
          start: "top bottom", // Start when the bottom of the element hits the bottom of the viewport
          end: "bottom top",         // End when the top of the element hits the top of the viewport
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-full overflow-y-hidden scrollbar-hide">
      <div ref={marqueeRef} className="w-full h-full">
        <Heading
          level={1}
          className="!text-[44vw] flex border flex-nowrap flex-row justify-center items-center h-full w-full !pb-[10%]"
        >
          syncurıous  
        </Heading>
      </div>
    </div>
  );
}
