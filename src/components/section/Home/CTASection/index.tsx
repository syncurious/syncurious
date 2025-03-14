"use client";
import React from "react";
import SectionHeader from "../../SectionHeader";
import Button from "@/components/base/Button";

export default function CTASection() {
  return (
    <SectionHeader
      button="CTA"
      heading="Let’s Elevate Your Digital Presence"
      paragraph={`Printers in the 1500s scrambled the words from Cicero's "De Minibus Nongourmet
                    Dolores'' after mixing the words in each sentence. They abbreviated the word Dolores, which means pain. Printers in the 1500s scrambled the words from Cicero's "De Minibus Nongourmet
                    Dolores'' after mixing the words in each sentence. They abbreviated the word Dolores, which means pain.`}
    >
      <div className="flex justify-center items-center gap-5">
        <div className="gradient-border-card !bg-[#ffffff0b] rounded-md cursor-pointer">
          <Button textColor="text-white" className="m-0">Start Project</Button> 
          {/* 12 */}
        </div>
        <Button variant="contained" className="m-0">Talk to Our Experts</Button>
        {/* <div className=" bg-primary py-2 px-6 rounded-md text-black cursor-pointer">Talk to Our Experts</div> */}
      </div>
    </SectionHeader>
  );
}
